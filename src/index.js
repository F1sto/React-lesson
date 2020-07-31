import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
    {id: 1, message: 'Hello', likesCount: '23'},
    {id: 2, message: 'Welcome here ^^', likesCount: '1'},
    {id: 3, message: 'Thank you <3', likesCount: '11'},
]

let dialogs = [
    {id: 1, name: 'Lada'},
    {id: 2, name: 'BMW'},
    {id: 3, name: 'Mersedes'},
]

let messages = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'Hey!'},
    {id: 3, message: 'How are you ?'},
    {id: 4, message: 'YoPrSt'},
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
