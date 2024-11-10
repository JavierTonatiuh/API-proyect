import React from 'react';
import './styles.css'



function HomeContainer() {
  return (
    <div id='image' style={{
      backgroundImage: "url(/starwarslogo3.jpg)",
      height: "100vh",
      width: "100%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
    }}>
      <h1 style={{color:'yellow', textAlign:'center', fontSize:"50px"}}>WELCOME</h1>

         </div>

  )
}

export default HomeContainer