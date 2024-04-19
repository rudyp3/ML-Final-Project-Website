import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Home from './components/Home';
import Code from './components/Code';
import Presentation from './components/Presentation';
import Report from './components/Report';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          NFL Draft Classification Model
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/code">Code</Button>
          <Button color="inherit" component={Link} to="/presentation">Presentation</Button>
          <Button color="inherit" component={Link} to="/report">Report</Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/code" element={<Code />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/report" element={<Report />} />
      </Routes>
    </Router>
  );
}

export default App;
