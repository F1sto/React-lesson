import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addMessage, addPost} from "./redux/state";

export let renderTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 addMessage={addMessage} />
        </BrowserRouter>,
        document.getElementById('root')
    );
}