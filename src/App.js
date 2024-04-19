import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Home from './components/Home';
import Code from './components/Code';
import Presentation from './components/Presentation';
import Report from './components/Report';

function scrollToComponent(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            NFL Draft Classification Model
          </Typography>
          <Button color="inherit" onClick={() => scrollToComponent('code-section')}>Code</Button>
          <Button color="inherit" onClick={() => scrollToComponent('report-section')}>Report</Button>
          <Button color="inherit" onClick={() => scrollToComponent('presentation-section')}>Presentation</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="lg">
        <Home />
        <div id="code-section"><Code /></div>
        <div id="report-section"><Report /></div>
        <div id="presentation-section"><Presentation /></div>
      </Container>
    </div>
  );
}

export default App;
