import React from 'react';

function Report() {
  const reportUrl = "https://drive.google.com/file/d/17Z1rnHa-Y0_pY3-O9Ju8snwI6ETKmCI7/preview";

  return (
    <div>
      <h1>Final Report</h1>
      <iframe
        src={reportUrl}
        style={{ width: '100%', height: '100vh' }} // Adjust height as needed
        frameBorder="0"
        title="Final Report"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Report;
