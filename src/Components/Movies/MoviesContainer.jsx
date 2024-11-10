
import { useState, useEffect } from 'react';
import {Card, Grid} from 'semantic-ui-react'
import styles from './MoviesContainer.module.css'
import './styles.css'


function MoviesContainer() {
    const URL_BASE_MOVIES = "https://swapi.dev/api/films/";
    const [movies, setMovies] = useState([]);

   useEffect(() =>{
    async function fetchMovies() {
        const res = await fetch(URL_BASE_MOVIES);
        const data = await res.json();
        setMovies(data.results)
    }
    fetchMovies();
   }, [])

  return (
    <>
    <div id='image' style={{
      backgroundImage: "url(/moviesfondo.jpg)",
      height: "100vh",
      width: "100%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}>
    <h1 style={{color:'yellow', textAlign:'center', fontSize:"100px"}}>Movies</h1>
      <Grid columns={3} divided>
        {movies.map((movie, i) => (
          <Grid.Column key={i}>
            <Card className={styles.Card} style={{
              height:"150px",
              boxSahdow:"0 0 25px black",
              borderRadius:"10px",
              backgroundColor: "black",
              
              }}>
              <Card.Content>
                <Card.Header style={{color:"yellow"}}>{movie.title}</Card.Header>
                <Card.Meta style={{color:"white"}}>Release Date: {movie.release_date}</Card.Meta>
                <Card.Description style={{backgroundColor:"yellow", borderRadius:"8px", fontWeight:"bold"}}>
                  <p>Director: {movie.director}</p>
                  <p>Producer: {movie.producer}</p>
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

export default MoviesContainer