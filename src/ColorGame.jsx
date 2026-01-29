import React, { useState } from "react";

function ColorGame() {
    const [color,setColor] = useState("");
    const styles = {
        backgroundColor: color,
    };
    const Colors  = ["crimson", "orange", "green", "yellow"]
  // Task 1
  // 1.1. Echo on screen
  // 1.2. Change the color to the typed color
  return (
    <div>
      {/* Data binding */}
      <input
        // Universal event listener - radio, checkbox
        // onChange={(event) => console.log(event.target.value)}
        // // Styles we are binding to style
        onChange={(event) => setColor(event.target.value)}
        style={styles}
        type="text"
        placeholder="Favorite color"
        value={color}
        />
        {/* {()=> console.log(event.target.value)} */}
        <h1>{color}</h1>
        {/* <ColorBox/> */}
        {Colors.map((clr)=><ColorBox color={clr} />)}
    </div>
        
  );
}
export default ColorGame;


function ColorBox({color}) {
    const styles = {
        height: "1.5rem",
        width: "10rem",
        // marginTop: "1rem",
        backgroundColor: color,
    };

  return <div style={styles}>
    
  </div>;
  
}
