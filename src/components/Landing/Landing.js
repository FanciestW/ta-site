import React, { useState, useEffect, useRef } from 'react';
import VantaNet from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

export default function Landing() {
  const [vantaEffect, setVantaEffect] = useState(0);
  const backgroundDivRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        VantaNet({
          el: backgroundDivRef.current,
          THREE: THREE,
          points: 20.00,
          maxDistance: 25.00,
          mouseControls: true,
          touchControls: true,
          gyroControls: true,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: 0x3f3fff,
          backgroundColor: 0x252341,
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);
  return <div style={{ height: '100vh', width: '100vw' }} ref={backgroundDivRef}></div>;
}
