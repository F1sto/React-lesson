import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar/Sidebar.jsx';
import Profile from './components/Profile/Profile.jsx';
import Header from './components/Header/Header.jsx';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import {Route, BrowserRouter} from 'react-router-dom';
import Music from './components/Music/Music.jsx';
import News from './components/News/News.jsx';
import Settings from './components/Settings/Settings.jsx';
import Friends from "./components/Friends/Friends";


const App = (props) => {

    return (
        <BrowserRouter>
            <div className='app-wrapper container'>
                <Header/>
                <Sidebar state={props.state.mainPage} />
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={ () => <Dialogs
                               state={props.state.dialogsPage}
                               addMessage={props.addMessage} /> }/>
                    <Route path='/profile'
                           render={ () => <Profile
                               state={props.state.profilePage}
                               addPost={props.addPost} /> }/>
                    <Route path='/news' component={News}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/friends'  component={Friends} />
                </div>
                {/* <Footer /> */}
            </div>
        </BrowserRouter>
    );
}

export default App;
