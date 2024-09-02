// src/components/SplineEmbed.js
import React from 'react';
import Spline from "@splinetool/react-spline"
import { useState } from 'react';


 export default function Home(){
    const [loading, setLoading] = useState(true)
    const splinesceneLoaded= () =>{
        setLoading(false)
    }
  return (
    <div style={{ position: 'relative', width: '1000px', height: '900px' }}>
      <iframe
        src="https://my.spline.design/untitled-b33aba006a17d9e5afd17ec6aa239f1c/" RL
        style={{ border: 'none', width: '100%', height: '100%' }}
        allowFullScreen
      ></iframe>
    </div>
  );
};

