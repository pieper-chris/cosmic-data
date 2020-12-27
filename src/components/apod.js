import React from "react";
import './links.css'
import './App.css';

function Apod({
name,
date,
copyright,
explanation,
media_type,
img_url,
}){
  return(
    <div className="apod">
      <h1> Title:  {name} </h1>
      <p> Copyright:  {copyright} </p>
      <u> Description </u>
      <p> {explanation} </p>
      {(media_type ==="video")?
        <p className="video_msg"> Occasionally, NASA's APOD API sends a youtube video for the
            "Astronomy Picture of the Day". Today is one of those days.
            You can view the video  <a href={img_url} target="_blank" rel="noopener noreferrer" >here. </a>
            Apologies for the inconveniece;
            hopefully tomorrow a nice big image will be shown here! </p>
        : <img id="apod_image" src={img_url}
            alt="APOD currently unavailable :( please try again later!" /> }

    </div>
  );
}

export default Apod;
