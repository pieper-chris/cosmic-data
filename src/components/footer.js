import React from "react";
import './App.css';

function Footer (props) {
 return (
     <div className="footer">
        {/*Open links in new tabs*/}
        <p>SpaceX Data provided by <a href="https://github.com/r-spacex/SpaceX-API"
            target="_blank" rel="noopener noreferrer" >SpaceX-API</a></p>
        <p>Nasa Data provided by <a href="https://api.nasa.gov/"
            target="_blank" rel="noopener noreferrer" >NASA API</a></p>
        <p> <a href="https://github.com/pieper-chris/cosmic-data"
            target="_blank" rel="noopener noreferrer" >Github</a></p>
     </div>
 );
}

export default Footer;
