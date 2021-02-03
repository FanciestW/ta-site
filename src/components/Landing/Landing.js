import React, { useState, useEffect, useRef } from 'react';
import VantaNet from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

export default function Landing() {
  const [windowDimensions, setWindowDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  const [vantaEffect, setVantaEffect] = useState(0);
  const backgroundDivRef = useRef(null);

  useEffect(() => {
    const maxDistances = [18.0, 20.0, 25.0];
    const maxDistance = maxDistances[Math.min(maxDistances.length-1, Math.floor(window.innerWidth / 500))];
    if (!vantaEffect) {
      setVantaEffect(
        VantaNet({
          el: backgroundDivRef.current,
          THREE: THREE,
          points: 20.0,
          maxDistance: maxDistance,
          spacing: 15.0,
          mouseControls: true,
          touchControls: false,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x3f3fff,
          backgroundColor: 0x252341,
        })
      );
    }
  }, [vantaEffect, windowDimensions]);

  useEffect(() => {
    function handleWindowResize() {
      setWindowDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }
    window.addEventListener('resize', handleWindowResize);
  });

  return (
    <>
      <div style={{ position: 'absolute', zIndex: -999, height: '100%', width: '100%' }} ref={backgroundDivRef}></div>
    </>
  );
}
