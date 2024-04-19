import React from 'react';

function Code() {
  const nbviewerUrl = "https://nbviewer.jupyter.org/github/rudyP123/CS4824-ML-Project/blob/main/ML_Project.ipynb";

  return (
    <div>
      <h1>Code</h1>
      <p>Explore our project code on <a href="https://github.com/rudyP123/CS4824-ML-Project" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
      <iframe src={nbviewerUrl} style={{ width: '100%', height: '500px' }} title="Jupyter Notebook"></iframe>
      <p>The interactive clustering output at the end of our notebook can be found <a href="https://rudyp123.github.io/CS4824-ML-Project/clustering.html" target="_blank" rel="noopener noreferrer">here</a>.</p>
    </div>
  );
}

export default Code;
