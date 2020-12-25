import React from "react";
import './App.css';

function LaunchImage({
  img
  }) {
  return(
    <div className="launch_image">
      <img id="apod_image" src={img}
        alt=" Currently unavailable :( please try again later!" />
    </div>
  );
}

export default LaunchImage;
