import { useState, useEffect } from 'react';
import {Card, Grid} from 'semantic-ui-react'
import styles from './SpeciesContainer.module.css'
import './styles.css'

function SpeciesContainer() {
    const URL_BASE_SPECIES = 'https://swapi.dev/api/species/';
    const [species, setSpecies] = useState([]);
  

    useEffect(() =>{
        async function fetchSpecies() {
            const res = await fetch(URL_BASE_SPECIES);
            const data = await res.json();
            setSpecies(data.results)
        }
        fetchSpecies();
       }, [])

  return (
    <>
    <div id='image' style={{
      backgroundImage: "url(/species.png)",
      height: "100vh",
      width: "100%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}>
      <h1 style={{color:'yellow', textAlign:'center', fontSize:"100px"}}>Species</h1>
    <Grid columns={5} divided>
        {species.map((specie, i) => (
          <Grid.Column key={i}>
            <Card className={styles.Card} style={{
              height:"200px",
              boxSahdow:"0 0 25px black",
              borderRadius:"10px",
              backgroundColor: "black",
              }}>
              <Card.Content>
                <Card.Header style={{color:"yellow"}}>{specie.name}</Card.Header>
                <Card.Meta style={{color:"white"}}>Clasification: {specie.clasification}</Card.Meta>
                <Card.Description style={{backgroundColor:"yellow", borderRadius:"8px", fontWeight:"bold"}}>
                  <p>Skin: {specie.skin_colors}</p>
                  <p>Hair: {specie.hair_colors}</p>
                  <p>Eye Color: {specie.eye_colors}</p>
                  <p>Language: {specie.language}</p>
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

export default SpeciesContainer