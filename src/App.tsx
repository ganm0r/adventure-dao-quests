import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import MainContainer from 'components/MainContainer';

import Landing from 'pages/Landing';
import Create from 'pages/Create';
import Quest from 'pages/Quest/Index';

function App() {
  
  return (
    <MainContainer>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/create" element={<Create />} />
          <Route path="/quests" element={<Quest />} />
        </Routes>
      </Router>
    </MainContainer>
  );
}

export default App;
