import React from 'react';

function Presentation() {
  const presentationUrl = "https://docs.google.com/presentation/d/1J9pd4Ov8hJ_X2r6jdpCf6cr0BKiGLKa4bgC2ABz8GIc/edit?usp=sharing/edit?usp=sharing/embed?start=false&loop=false&delayms=3000";
  return (
    <div>
      <h1>Presentation Slides</h1>
      <iframe src={presentationUrl} style={{ width: '100%', height: '569px' }} allowFullScreen={true}></iframe>
    </div>
  );
}

export default Presentation;
