import React from "react";
import './App.css';

function Footer (props) {
 return (
     <div className="footer">
        <p> Data provided by <a href="https://api.nasa.gov/"
            target="_blank" rel="noopener noreferrer" >NASA API</a></p>
        <p> <a href="https://github.com/pieper-chris"
            target="_blank" rel="noopener noreferrer" >Github</a></p>
     </div>
 );
}

export default Footer;
