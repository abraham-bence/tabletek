import React, { useEffect, useState } from 'react'
import NavigationBar from './Navbar';
import { Card, Container, Spinner } from 'react-bootstrap';
import Carditem from './Carditem';


interface Tablet {
  tablet_id: number; // Optional ID, as it's likely auto-generated by the database
  name: string; // Name of the tablet
  processor_clock: number; // Clock speed in GHz
  processor_cores: number; // Number of processor cores
  display_size: number; // Size of the display in inches
  resolution_width: number; // Resolution width in pixels
  resolution_height: number; // Resolution height in pixels
  ram: number; // RAM in GB
  description?: string; // Optional description
  price: number; // Price in currency units (e.g., USD, EUR)
  }

export default function TabletList() {

  const [tablets, setTablets] = useState<Tablet[]>([]);
  const [serverError, setServerError] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null)

    useEffect(() => {
        fetch("http://localhost:3000/tablets")
        .then((res) => {
            if(res.status === 404) {
              setServerError("Resource not found 404")
            }
            if (!res.ok) {
              setServerError(`Server responded with status ${res.status}`)
            }
            return res.json();
        })
        .then((data) => {
          setTablets(data)
          setLoading(false)
        })
        .catch((error) => {
          setError(error.message)
          setLoading(false)
        })
    })

  if (loading) {
    return (
      <div className="center">
        <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      </div>
    );
  }

  if (error) {
    return (
    <div className="center">
      <p>Error: {error}</p>
    </div>
    )
  }

  return (
    <div>
    <NavigationBar/>
    <h2>Tabletek</h2>
        <div className="container">
      <div className="row">
        {tablets.map(tablet => (
          <div key={tablet.tablet_id} className="col-md-3 d-flex">
            <Carditem tablet={tablet} details={true}/>
          </div>
        ))}
      </div>
    </div>
    </div>
  )
}
