import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import Header from './components/Header.jsx';

const App = () => {
  return (
    <div className='app-wrapper container'>
      <div className='header'>
        <Header />
      </div>
      <div className='sidebar'>
        <Sidebar />
      </div>
      <div className='content'>
        <Profile />
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
