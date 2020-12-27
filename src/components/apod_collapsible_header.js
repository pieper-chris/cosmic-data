import React, {useEffect, useState} from "react";
import Apod from './apod.js';
import './App.css';


function ApodCollapsibleHeader () {
  const [apod, setApod] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [url_type, setUrl] = useState([]);
  const [media_type, setMediaType] = useState();

  useEffect(() => {
    getApod();
  }, []);

  const getApod = async () => {
    /*get the set environment variable api key*/
    const react_app_api_key = process.env.REACT_APP_API_KEY;
    /* Get day in YYYY-MM-DD format for fetch*/
    const today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if(dd<10) {dd='0'+dd;};
    if(mm<10) { mm='0'+mm};
    var day = yyyy+'-'+mm+'-'+dd;
    /*fetch today's apod using our api key and date*/
    const response = await fetch('https://api.nasa.gov/planetary/apod?'
      + new URLSearchParams({
        date: day,
        hd: true,
        api_key: react_app_api_key,
      }));
    const data = await response.json();
    setApod(data);
    console.log(data);
    setMediaType(data.media_type);
    setUrl(((data.media_type) === "video")? data.url : data.hdurl);
  };

  const toggle_change = () => {
    setToggle(!toggle);
  };

  return (
    <div>
      <p onClick={e => toggle_change()} className="toggle_list">
        NASA Astronomy Picture of the Day
      </p>
      {toggle?(
        <div>
            <Apod
            name={apod.title}
            copyright={apod.copyright}
            explanation={apod.explanation}
            media_type={media_type}
            img_url={url_type}
            />
      </div>): null}
   </div>
  );
}

export default ApodCollapsibleHeader;