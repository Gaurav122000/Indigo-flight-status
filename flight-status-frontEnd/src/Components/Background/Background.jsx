import React from 'react';
import './Background.css'; // Make sure to import your CSS file

import Video1 from '../../assets/Video2.mp4';
import image1 from '../../assets/image1.jpg';
import image2 from '../../assets/image6.jpg';
import image3 from '../../assets/image5.jpg';

const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video className='background fade-in' autoPlay loop muted>
        <source src={Video1} type='video/mp4' />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={image1} className='background fade-in' alt='' />;
  } else if (heroCount === 1) {
    return <img src={image2} className='background fade-in' alt='' />;
  } else if (heroCount === 2) {
    return <img src={image3} className='background fade-in' alt='' />;
  }
};

export default Background;
