import React from 'react';
import './home.css';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import backgroundImage1 from '../assests/Background/backround3.png';
import backgroundImage2 from '../assests/Background/backround2.png';
import backgroundImage3 from '../assests/Background/backround4.png';

export default function Home() {
  return (
    <div>
      <Parallax pages={2} style={{ top: '0', left: '0' }} className="animation">
        <ParallaxLayer offset={0} speed={1.5}>
          {/* Apply the background image using inline style */}
          <div className='animation_layer' id='background' style={{ backgroundImage: `url(${backgroundImage3})` }}></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={2}>
          <div className='animation_layer' id='background' style={{ backgroundImage: `url(${backgroundImage2})` }}>
            {/* <h1>your adventure start here</h1> */}
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={2.5}>
          <div className='animation_layer' id='background' style={{ backgroundImage: `url(${backgroundImage1})` }}></div>
        </ParallaxLayer>
        <ParallaxLayer offset={0} speed={2.5}>
          <div className='animation_layer'></div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
