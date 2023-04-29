import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<LoginScreen />} />
        <Route path="/Register" element={<RegisterScreen />} />
        <Route path="/HomeScreen" element={<HomeScreen />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;