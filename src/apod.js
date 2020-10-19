import React from "react";
import './links.css'
import './App.css';

function Apod({
name,
date,
copyright,
explanation,
img_url
}){
  return(
    <div className="apod">
      <h1> Title:  {name} </h1>
      <p> Copyright:  {copyright} </p>
      <u> Description </u>
      <p> {explanation} </p>
      <img id="apod_image" src={img_url}
            alt="APOD currently unavailable :( please try again later!" />
    </div>
  );
}

export default Apod;
