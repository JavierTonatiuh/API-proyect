import { useState, useEffect } from 'react';
import {Card, Grid} from 'semantic-ui-react';
import styles from './SpaceshipsContainer.module.css'
import './styles.css'

function SpaceshipsContainer() {
    const URL_BASE_SPACESHIPS = "https://swapi.dev/api/starships/";
    const [spaceships, setSpaceships] = useState([]);

   useEffect(() =>{
    async function fetchSpaceships() {
        const res = await fetch(URL_BASE_SPACESHIPS);
        const data = await res.json();
        setSpaceships(data.results)
    }
    fetchSpaceships();
   }, [])

  return (
    <>
    <div id='image' style={{
      backgroundImage: "url(/navesfondo.jpg)",
      height: "100vh",
      width: "100%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}>
     <h1 style={{color:'yellow', textAlign:'center', fontSize:"100px"}}>Spaceships</h1>
     <Grid columns={5} divided>
        {spaceships.map((spaceship, i) => (
          <Grid.Column key={i}>
            <Card className={styles.Card} style={{
              height:"250px",
              boxSahdow:"0 0 25px black",
              borderRadius:"10px",
              backgroundColor: "black",
              }}>
              <Card.Content>
                <Card.Header style={{color:"yellow"}}>{spaceship.name}</Card.Header>
                <Card.Meta style={{color:"white"}}>Model: {spaceship.model}</Card.Meta>
                <Card.Description style={{backgroundColor:"yellow", borderRadius:"8px", fontWeight:"bold"}}>
                  <p>Manufacturer: {spaceship.manufacturer}</p>
                  <p>Length: {spaceship.length}</p>
                  <p>Passengers: {spaceship.passengers}</p>
                  <p>Max speed: {spaceship.max_atmosphering_speed}</p>
                  <p>Class: {spaceship.starship_class}</p>
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

export default SpaceshipsContainer