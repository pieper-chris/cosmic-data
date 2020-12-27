import React, {useEffect, useState} from "react";
import Neo from './neo.js';
import './App.css';


function NeoCollapsibleHeader () {
  const [neos, setNEOs] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    getNEOs();
  }, []);

  const getNEOs = async () => {
    const react_app_api_key = process.env.REACT_APP_API_KEY;

    const response = await fetch('https://api.nasa.gov/neo/rest/v1/neo/browse?'
      + new URLSearchParams({
        api_key: react_app_api_key,
      }));
    const data = await response.json();
    setNEOs(data.near_earth_objects);
    console.log(data.near_earth_objects);
  };

  const toggle_change = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <p onClick={e => toggle_change()} className="toggle_list">
        Current Near-Earth Object (Asteroids) list
      </p>
      {toggle?(
        <div>
          {neos.map(neo => (
            <Neo
            key={neo.id}
            name={neo.name}
            h_abs_mag={neo.absolute_magnitude_h}
            km_diameter={neo.estimated_diameter.kilometers}
            miles_diameter={neo.estimated_diameter.miles}
            danger={neo.is_potentially_hazardous_asteroid}
            link={neo.nasa_jpl_url}

            />
          ))}
      </div>): null}
   </div>
  );
}

export default NeoCollapsibleHeader;