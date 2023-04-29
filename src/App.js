import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<LoginScreen />} />
        <Route path="/home" element={<HomeScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;