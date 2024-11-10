import { useState, useEffect } from 'react';
import {Card, Grid} from 'semantic-ui-react';
import styles from './VehiclesContainer.module.css'
import './styles.css'

function VehiclesContainer() {
    const URL_BASE_VEHICLES = 'https://swapi.dev/api/vehicles/'
    const [vehicles, setVehicles] = useState([]);

    useEffect(() =>{
        async function fetchVehicles() {
            const res = await fetch(URL_BASE_VEHICLES);
            const data = await res.json();
            setVehicles(data.results)
        }
        fetchVehicles();
       }, [])

  return (
    <>
     <div id='image' style={{
      backgroundImage: "url(/carreraveh.jpg)",
      height: "100vh",
      width: "100%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}>
      <h1 style={{color:'yellow', textAlign:'center', fontSize:"100px"}}>Vehicles</h1>
     <Grid columns={5} divided>
        {vehicles.map((vehicle, i) => (
          <Grid.Column key={i}>
            <Card className={styles.Card} style={{
              height:"250px",
              boxSahdow:"0 0 25px black",
              borderRadius:"10px",
              backgroundColor: "black",
              }}>
              <Card.Content>
                <Card.Header style={{color:"yellow"}}>{vehicle.name}</Card.Header>
                <Card.Meta style={{color:"white"}}>Model: {vehicle.model}</Card.Meta>
                <Card.Description style={{backgroundColor:"yellow", borderRadius:"8px", fontWeight:"bold"}}>
                  <p>Manufacturer: {vehicle.manufacturer}</p>
                  <p>Speed: {vehicle.max_atmosphere_speed}</p>
                  <p>Crew: {vehicle.crew}</p>
                  <p>Passengers: {vehicle.passengers}</p>
                  <p>Class: {vehicle.vehicle_class}</p>
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        ))}
      </Grid>
      </div>
    </>
   
  )
}

export default VehiclesContainer