import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import LoginScreen from './LoginScreen';
import RegisterScreen from './RegisterScreen';
import Navbar from './components/Navbar';
import About from './routes/About';
import EditProfilePage from './routes/EditProfilePage';
import Profile from './routes/Profile';
import Contact from './routes/Contact';

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <Layout>
              <Routes>
                <Route exact path="/login" element={<LoginScreen />} />
                <Route path="/Register" element={<RegisterScreen />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/EditProfilePage" element={<EditProfilePage />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Contact" element={<Contact />} />

              </Routes>
            </Layout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;