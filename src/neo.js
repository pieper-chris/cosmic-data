import React from "react";
import './links.css'
import './App.css';

function Neo({
  name,
  danger,
  h_abs_mag,
  km_diameter,
  miles_diameter,
  close_app_date,
  link
  }) {
  return(
    <div className="Neo">
      <h1> Name:  <a href={link} target="_blank" rel="noopener noreferrer" > {name} </a>
      </h1>
      <p> H (absolute magnitude): {String(h_abs_mag)} </p>
      <p> Diameter (km): {String(km_diameter['estimated_diameter_min'])}
          - {String(km_diameter['estimated_diameter_max'])} </p>
      <p>  Diameter (miles): {String(miles_diameter['estimated_diameter_min'])}
          - {String(miles_diameter['estimated_diameter_max'])} </p>
      <p> Potentially Dangerous?: {String(danger)} </p>
    </div>
  );
}

export default Neo;
