import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Pilot from './pages/Pilot';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/pilot" element={<Pilot />} />
        {/* You can also add a homepage here later */}
      </Routes>
    </Router>
  );
}

export default App;
