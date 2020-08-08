import React from 'react';
import './index.css';
import * as serviceWorker from './serviceWorker';
import state, {addMessage, addPost, subscribe, updateNewMessage, updateNewPostText} from "./redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from "./redux/state";

export let renderTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                addPost={store.addPost.bind(store)}
                updateNewPostText={store.updateNewPostText.bind(store)}
                updateNewMessage={store.updateNewMessage.bind(store)}
                addMessage={store.addMessage.bind(store)}
            />
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderTree(store.getState());

store.subscribe(renderTree);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
