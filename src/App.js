import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import Header from './components/Header.jsx';
import Dialogs from './components/Dialogs';
import {Route, BrowserRouter} from 'react-router-dom';
import Music from './components/Music';
import News from './components/News';
import Settings from './components/Settings';

const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper container'>
          <Header />
          <Sidebar />
          <div className='app-wrapper-content'>
            <Route path='/dialogs' component={Dialogs} />
            <Route path='/profile' component={Profile} />
            <Route path='/news' component={News} />
            <Route path='/music' component={Music} />
            <Route path='/settings' component={Settings} />
          </div>
        {/* <Footer /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
