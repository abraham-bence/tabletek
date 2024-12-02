import express from "express";
import cors from "cors";
import mysql from "mysql2";
import { error } from "console";

import { TabletValidator } from "./tabletValidator.js";

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'webbolt'
}).promise();

app.get('/tablets', async (req, res) => {
    try {
        const temp = await db.query('SELECT *   FROM tablets');
        const rows = temp[0];
        const fields = temp[1];
        res.status(200).json(rows);
    } catch(error) {
        console.error(`Error retrieving tablets ${error}`)
        res.status(500).json({error: 'Internal server Error'})
    }
})

app.get('/tablets/cheap', async (req, res) => {
    try {
        const temp = await db.query('SELECT * FROM tablets GROUP BY price ASC LIMIT 3');
        const rows = temp[0];
        const fields = temp[1];
        res.status(200).json(rows);
    } catch(error) {
        console.error(`Error retrieving tablets ${error}`)
        res.status(500).json({error: 'Internal server Error'})
    }
})

app.get('/tablets/expensive', async (req, res) => {
    try {
        const temp = await db.query('SELECT * FROM tablets GROUP BY price DESC LIMIT 3');
        const rows = temp[0];
        const fields = temp[1];
        res.status(200).json(rows);
    } catch(error) {
        console.error(`Error retrieving tablets ${error}`)
        res.status(500).json({error: 'Internal server Error'})
    }
})


app.get('/tablets/:id', async (req, res) => {
    try{
        let id = parseInt(req.params.id);
        const [rows, fields] = await db.query(`SELECT * FROM tablets WHERE tablet_id = ${id}`)
        if (rows.length == 1) {
            res.status(200).json(rows[0])
        } else {
            res.status(404).json({error: `There is no tablet with this id (${id})`})
        }
    } catch(error) {
        console.log(`Error retrieving tablets ${error}`)
        res.status(500).json({error: 'Internal server Error'})
    }
})

app.post('/tablets', async (req, res) => {
    try {
        let tabletData = [req.body.name, req.body.processorClock, req.body.processorCores, 
            req.body.displaySize, req.body.resolutionWidth, req.body.resolutionHeight, req.body.ram,
            req.body.price, req.body.description]
        

        const errors = TabletValidator.validateTablet(tabletData);

        if (error.length > 0) {
            res.status(400).json({
                status: 'error',
                message: 'Validation failed',
                errors: errors,
            });
        } else {
            const [rows, fields] = await db.query(
                `INSERT INTO tablets (name, processor_clock, processor_cores, display_size, resolution_width, resolution_height
                , ram, price, description) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`, tabletData)
            res.status(200).json({
                status: 'succes',
                message: 'Tablet succesfully created',
                tablet: tabletData
            });
        }

    } catch(error) {
        console.log(`Error retrieving tablets ${error}`)
        res.status(500).json({error: 'Internal server Error'})
    }
})


app.delete('/tablets/:id', async (req, res) => {
    try {
        let id = parseInt(req.params.id);
        const [rows, fields] = await db.query(`DELETE FROM tablets WHERE tablet_id = ${id}`);
        if (rows.affectedRows == 0) {
            res.status(404).json({ error: "Tablet not found" });
        } else {
            res.status(200).json({ message: "Tablet successfully removed" });
        }
 
    } catch (error) {
        console.error(`Error retrieving tablets ${error}`);
        res.status(500).json({ error: "Internal Server Error" });
    }
})

app.listen(3000);
