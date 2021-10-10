import React from 'react';
import {Link} from "react-router-dom";

function Homepage() {

  return (
   <div>
        <h1>Reaction game</h1>

       <div className="bordered"> 
        <h2>Game Instructions</h2>
        <ul className="list">
           <li>Find the text according to the number represented.</li>
           <li>Game will start, when you click on start button.</li>
           <li>Remember, timer will start at that point when you click the start button.</li>
           <li>The reaction time will be calculated on your reaction speed.</li>
           <li>To play the game again, click on Play Again button at the end of game.</li>
        </ul>
      <Link to="./merge" >
        <button className="start-button" >Start</button>   
      </Link>
   </div>
  </div>
  );
}

export default Homepage;
