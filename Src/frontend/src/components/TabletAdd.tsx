import { useState } from "react";
import NavigationBar from "./Navbar";
import { Row, Col, Button,Form } from "react-bootstrap";
import Succes from "./succes";

export default function TabletAdd() {
    const [name, setName] = useState<string>('Samsung');
    const [processor_clock, setProcessorClock] = useState<number>(+3.5);
    const [processor_cores, setProcessorCores] = useState<number>(8);
    const [display_size, setDisplaySize] = useState<number>(11);
    const [resolution_width, setResWidth] = useState<number>(1920);
    const [resolution_height, setResHeight] = useState<number>(1080);
    const [ram, setRam] = useState<number>(4);
    const [description, setDescription] = useState<string>('');
    const [price, setPrice] = useState<number>(10000);
    
    const [success, setSuccess] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        const tablet = {
            name :name,
            processorClock : processor_clock,
            processorCores : processor_cores,
            displaySize: display_size,
            resolutionWidth: resolution_width,
            resolutionHeight: resolution_height,
            ram: ram,
            description: description,
            price: price
        }
        try {
            const response = await fetch('http://localhost:3000/tablets', {
                method: 'POST',
                headers: {
                     'Content-Type': 'application/json'
                },
                body: JSON.stringify(tablet)
            })
            if (!response.ok){
                const errorData = await response.json();
                setError(errorData.error)
                throw new Error(`Hiba történt: ${response.status}`)
            }

            setSuccess(true);
        } catch (err: any) {
            setError(err.message)
        } finally {

        }
    }
    return <>
        <NavigationBar/>
        <h2>Tabletek felvétel</h2>

        {!success? (
            <div>
                
        <Form onSubmit={handleSubmit} className="form">
      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Név</Form.Label>
          <Form.Control type="text" placeholder="Add meg a nevet" defaultValue={"Samsung"}
          onChange={(e) => {setName(e.target.value)}}/>
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Ár</Form.Label>
          <Form.Control type="number" placeholder="Add meg az árat" defaultValue={+10000}
          onChange={(e) => {setPrice(+e.target.value)}} />
        </Form.Group>
      </Row>
      <Row>
      <Form.Group className="mb-3" as={Col}>
        <Form.Label>Processzor órajel</Form.Label>
        <Form.Control type="number" placeholder="Add meg az órajelet" defaultValue={+3}
        onChange={(e) => {setProcessorClock(+e.target.value)}}/>
      </Form.Group>

      <Form.Group className="mb-3" as={Col}>
        <Form.Label>Processzor magok</Form.Label>
        <Form.Control type="number" placeholder="Add meg a processzor magok számát" defaultValue={+8}
        onChange={(e) => {setProcessorCores(+e.target.value)}} />
      </Form.Group>
      
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} >
          <Form.Label>Kijelző -  méret </Form.Label>
          <Form.Control type="number" placeholder="Add meg a kijelző méretét" defaultValue={+11}
        onChange={(e) => {setDisplaySize(+e.target.value)}} />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>- szélesség</Form.Label>
          <Form.Control type="number" placeholder="Add meg a kijelző szélességét" defaultValue={+1920}
        onChange={(e) => {setResWidth(+e.target.value)}} />
        </Form.Group>
        <Form.Group as={Col}>
          <Form.Label>- magasság</Form.Label>
          <Form.Control type="number" placeholder="Add meg a kijelző magasságát" defaultValue={+1080}
        onChange={(e) => {setResHeight(+e.target.value)}} />
        </Form.Group>
      </Row>
      <Form.Group as={Col}>
          <Form.Label>Ram</Form.Label>
          <Form.Select  defaultValue={+8}
          onChange={(e) => {setRam(+e.target.value)}}>
            <option value={4}>4 GB</option>
            <option value={8}>8 GB</option>
            <option value={16}>16 GB</option>
            <option value={32}>32 GB</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>Leírás</Form.Label>
          <Form.Control type="textArea" placeholder="Add meg a tablet leírását" defaultValue={"szupi cucc"}
        onChange={(e) => {setDescription(e.target.value)}} />
        </Form.Group>

      <Button variant="primary" type="submit" className="mt-4">
        Submit
      </Button>
      { error && <p>{ error }</p> }
    </Form>
            </div>
        ): (
            <Succes/>
        ) }
    </>
}