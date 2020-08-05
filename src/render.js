import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addMessage, addPost, updateNewMessage, updateNewPostText} from "./redux/state";

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