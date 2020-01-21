import React from 'react';
import imgSVG from '../../img/coverr-training-girl.mp4';

const Landing = () => {
  return (
  <section className="section-bg">
    
    <div className="bg-video">
      <video src={imgSVG} autoPlay={true} loop={true}></video>
    </div>
    <div className="bg-content">
      <div className="bg-content__title">
        <h1>Making a Difference... One Workout at a Time!</h1>
      </div>
    </div>
    <div className="bg-overlay"></div>
  
  </section>
  )
}

export default Landing