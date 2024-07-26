import React from 'react';
import './Background.css'; // Make sure to import your CSS file

import Video1 from '../../assets/Video1.mp4';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image2.jpg';
import image3 from '../../assets/image3.jpg';

const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video className='background' autoPlay loop muted>
        <source src={Video1} type='video/mp4' />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={image1} className='background' alt='' />;
  } else if (heroCount === 1) {
    return <img src={image2} className='background' alt='' />;
  } else if (heroCount === 2) {
    return <img src={image3} className='background' alt='' />;
  }
};

export default Background;
