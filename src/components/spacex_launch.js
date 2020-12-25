import React from "react";
import LaunchImage from './launch_image.js'
import './links.css'
import './App.css';

function SpaceXLaunch({
name,
date_time_UTC,
success,
details,
webcast,
article,
images
}){
  return(
    <div className="spacexLaunch">
      <div className="spacexLaunchSub1">
        <h1> Launch Title:  {name} </h1>
        <u> Details </u>
        <p> {details} </p>
        <p> Date/Time (UTC):  {date_time_UTC} </p>
        <p> Successful?: {String(success)} </p>
        <table className="spacexLinks">
          <tbody>
            <tr>
              <td>
                <p> <a href={webcast} target="_blank" rel="noopener noreferrer" > Webcast </a>
                </p>
              </td>
              <td>
                <p> <a href={article} target="_blank" rel="noopener noreferrer" > Article </a>
                </p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <u> Images of launch </u>
      {images.map(img => (
        <LaunchImage
        key={Math.floor(Math.random() * 100)}
        img={img}
        />
      ))}
    </div>
  );
}

export default SpaceXLaunch;
