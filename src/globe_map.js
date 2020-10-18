import React, { useEffect, useRef } from "react";
import Globe from 'react-globe.gl';
import './App.css';

function Map (props) {
  const globeEl = useRef();
  useEffect(() => {
    const controls = globeEl.current.controls();
    controls.autoRotate=true;
    controls.autoRotateSpeed="1.0";
    controls.maxDistance="280.0";
    controls.enabled = false;
    globeEl.current.enablePointerInteraction = false;
    globeEl.current.width=600;
    globeEl.current.height=500;
  }, []);

 return (
    <>
    <div className="GlobeMap">
      <Globe
      ref={globeEl}
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
      width={600}
      height={500}
      />
      </div>
    </>
 );
}

export default Map
