import React from 'react';

function Presentation() {
  const presentationUrl = "https://docs.google.com/presentation/d/16o91oekJ8TTabjp-rzYJj-MFAdghXSg_QmQiOCdeVZI/edit?usp=sharing/embed?start=false&loop=false&delayms=3000";
  return (
    <div>
      <h1>Presentation Slides</h1>
      <iframe src={presentationUrl} style={{ width: '100%', height: '569px' }} allowFullScreen={true}></iframe>
    </div>
  );
}

export default Presentation;
