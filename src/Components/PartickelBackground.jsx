import  { useEffect } from 'react';
import * as Particles from "particles.js";

function PartickelBackground() {

    useEffect(() => {
        Particles.init({
          selector: '.particles',
          color: '#ffffff', // Warna partikel
          connectParticles: true,
          background: '#000000' // Warna latar belakang
        });
      }, []);
    
      return <div className="particles" style={{ height: '100vh', width: '100vw' }} />;
    
}

export default PartickelBackground;
