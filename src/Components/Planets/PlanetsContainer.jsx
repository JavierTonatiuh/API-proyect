import { useState, useEffect } from 'react';
import {Card, Grid} from 'semantic-ui-react';
import styles from './PlanetsContainer.module.css'
import './styles.css'

function PlanetsContainer() {
    const URL_BASE_PLANETS = "https://swapi.dev/api/planets/";
    const [planets, setPlanets] = useState([]);

   useEffect(() =>{
    async function fetchPlanets() {
        const res = await fetch(URL_BASE_PLANETS);
        const data = await res.json();
        setPlanets(data.results)
    }
    fetchPlanets();
   }, [])

  return (
    <>
    <div id='image' style={{
      backgroundImage: "url(/planets.jpg)",
      height: "100vh",
      width: "100%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}>
     <h1 style={{color:'yellow', textAlign:'center', fontSize:"100px"}}>Planets</h1>
     <Grid columns={5} divided>
        {planets.map((planet, i) => (
          <Grid.Column key={i}>
            <Card className={styles.Card} style={{
              height:"200px",
              boxSahdow:"0 0 25px black",
              borderRadius:"10px",
              backgroundColor: "black",
              }}>
              <Card.Content>
                <Card.Header style={{color:"yellow"}}>{planet.name}</Card.Header>
                <Card.Meta style={{color:"white"}}>Terrain: {planet.terrain}</Card.Meta>
                <Card.Description style={{backgroundColor:"yellow", borderRadius:"8px", fontWeight:"bold"}}>
                  <p>Rotation period: {planet.rotation_period}</p>
                  <p>Orbital period: {planet.orbital_period}</p>
                  <p>Climate: {planet.climate}</p>
                  <p>Population: {planet.population}</p>
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

export default PlanetsContainer