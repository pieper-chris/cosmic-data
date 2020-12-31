import React, {useEffect, useRef, useState} from "react";
/*import Apod from './spacex_launch.js';*/
import SpaceXLaunch from './spacex_launch.js'
import './App.css';


function SpaceXCollapsibleHeader () {
  const [launch, setLaunch] = useState([]);
  const [toggle, setToggle] = useState(false);

  const spaceX_modal_ref = useRef();

  useEffect(() => {
    getLaunch();
  }, []);

  const getLaunch = async () => {

    /*fetch most recent launch*/
    const response = await fetch('https://api.spacexdata.com/v4/launches/latest');
    const data = await response.json();
    setLaunch(data);
  };


  const toggle_change = () => {
    setToggle(!toggle);
  };

  /* Allow user to click out of modal by clicking
     on the background outside of the modal */
  const spacexModal = e => {
    if(spaceX_modal_ref.current === e.target){
      setToggle(!toggle);
    }
  }

  return (
    <div>
      <p onClick={e => toggle_change()} className="toggle_list">
        SpaceX Latest Launch
      </p>
      {toggle?(
        <div>
          <div className="modal_background"
              ref={spaceX_modal_ref} onClick={spacexModal}>
              <div className="spacex_modal">
                <SpaceXLaunch
                  name={launch.name}
                  date_time_UTC={launch.date_utc}
                  success={launch.success}
                  details={launch.details}
                  webcast={launch.links.webcast}
                  article={launch.links.article}
                  images={launch.links.flickr.original}
                />
              </div>
              <div className="modal_div">
                <p className="modal_button"
                    onClick={e => toggle_change()}>×</p>

              </div>
          </div>
      </div>): null}
   </div>
  );
}

export default SpaceXCollapsibleHeader;
