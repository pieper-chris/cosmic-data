import React, { useEffect, useRef, useState } from "react";
import Globe from 'react-globe.gl';
import './App.css';

function Map (props) {
  const globeEl = useRef();
  const [width, setWidth]   = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const updateArea = () => {
    setWidth(window.innerWidth/1.5);
    setHeight(window.innerHeight/1.5);
}
  useEffect(() => {
    window.addEventListener("resize", updateArea);
    const controls = globeEl.current.controls();
    controls.autoRotate=true;
    controls.autoRotateSpeed="1.0";
    controls.maxDistance="280.0";
    controls.enabled = false;
    globeEl.current.enablePointerInteraction = false;
    globeEl.current.width=600;
    globeEl.current.height=500;
    return () => window.removeEventListener("resize", updateArea);
  }, []);

 return (
    <>
    <div className="GlobeMap">
      <Globe
      ref={globeEl}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      width={width}
      height={height}
      />
      </div>
    </>
 );
}

export default Map
