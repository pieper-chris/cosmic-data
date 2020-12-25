import React, {useEffect, useState} from "react";
/*import Apod from './spacex_launch.js';*/
import SpaceXLaunch from './spacex_launch.js'
import './App.css';


function SpaceXCollapsibleHeader () {
  const [launch, setLaunch] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    //getLaunch()
    getLaunch();

  }, []);

  const getLaunch = async () => {

    /*fetch most recent launch*/
    const response = await fetch('https://api.spacexdata.com/v4/launches/latest');
    const data = await response.json();
    setLaunch(data);
    console.log("spacex below");
    console.log(data);
  };


  const toggle_change = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <p onClick={e => toggle_change()} className="toggle_list">
        SpaceX Latest Launch
      </p>
      {toggle?(
        <div>
            <SpaceXLaunch
            name={launch.name}
            date_time_UTC={launch.date_utc}
            success={launch.success}
            details={launch.details}
            webcast={launch.links.webcast}
            article={launch.links.article}
            images={launch.links.flickr.original}
            />
      </div>): null}
   </div>
  );
}

export default SpaceXCollapsibleHeader;
