import { useState, useEffect } from 'react';
import {Card, Grid} from 'semantic-ui-react';
import styles from './PeopleContainer.module.css'
import './styles.css'


function PeopleContainer() {
    const URL_BASE_PEOPLE = "https://swapi.dev/api/people/";
    const [characters, setCharacters] = useState([]);

   useEffect(() =>{
    async function fetchCharacters() {
        const res = await fetch(URL_BASE_PEOPLE);
        const data = await res.json();
        setCharacters(data.results)
    }
    fetchCharacters();
   }, [])

  return (
    <>
    <div id='image' style={{
      backgroundImage: "url(/personajes.png)",
      height: "100vh",
      width: "100%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}>
    <h1 style={{color:'yellow', textAlign:'center', fontSize:"100px"}}>Characters</h1>
    <Grid columns={5} divided>
        {characters.map((character, i) => (
          <Grid.Column key={i}>
            <Card className={styles.Card} style={{
              height:"300px",
              boxSahdow:"0 0 25px black",
              borderRadius:"10px",
              backgroundColor: "black",
              }}>
              <Card.Content>
                <Card.Header style={{color:"yellow"}}>{character.name}</Card.Header>
                <Card.Meta style={{color:"white"}}>Gender: {character.gender}</Card.Meta>
                <Card.Description style={{backgroundColor:"yellow", borderRadius:"8px", fontWeight:"bold"}}>
                  <p>Height: {character.height}</p>
                  <p>Mass: {character.mass}</p>
                  <p>Hair color: {character.hair_color}</p>
                  <p>Skin color: {character.skin_color}</p>
                  <p>Eye color: {character.eye_color}</p>
                  <p>Birthyear: {character.birth_year}</p>
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

export default PeopleContainer