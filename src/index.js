import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {addMessage, addPost, subscribe, updateNewMessage, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

export let renderTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 updateNewPostText={updateNewPostText}
                 updateNewMessage={updateNewMessage}
                 addMessage={addMessage} />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderTree(state);

subscribe(renderTree);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
