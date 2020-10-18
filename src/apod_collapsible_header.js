import React, {useEffect, useState} from "react";
import Apod from './apod.js';
import './App.css';

function ApodCollapsibleHeader () {
  const [apod, setApod] = useState([]);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    getApod();
  }, []);

  const getApod = async () => {
    const response = await fetch('https://api.nasa.gov/planetary/apod?api_key=WMtTrqwesceUk1odHg4uWnSjNH2FMdWVQdw0h6zG');
    const data = await response.json();
    setApod(data);
    console.log(data);
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
            date={apod.date}
            copyright={apod.copyright}
            explanation={apod.explanation}
            img_url={apod.hdurl}
            />
      </div>): null}
   </div>
  );
}

export default ApodCollapsibleHeader;
