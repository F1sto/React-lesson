import {renderTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello', likesCount: '23'},
            {id: 2, message: 'Welcome here ^^', likesCount: '1'},
            {id: 3, message: 'Thank you <3', likesCount: '11'},
        ],
        newPostText: '',
    },
    dialogsPage: {
        messages: [
            {isMe: true,  id: 1, message: 'Hello'},
            {isMe: false, id: 2, message: 'Hey!'},
            {isMe: true,  id: 3, message: 'How are you ?'},
            {isMe: false, id: 4, message: 'YoPrSt'},
            {isMe: true,  id: 5, message: 'Omaewa'},
        ],
        newMessageText: '',
        dialogs: [
            {id: 1, name: 'Lada'},
            {id: 2, name: 'BMW'},
            {id: 3, name: 'Mersedes'},
        ],
    },
    mainPage: {
        friendList: [
            {id: 1, name: 'Bob'},
            {id: 2, name: 'Lee'},
            {id: 3, name: 'John'},
        ],
    },
}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    renderTree(state);
}

export let addMessage = () => {
    let newMessage = {
        message: state.dialogsPage.newMessageText,
    };

    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    renderTree(state);
}

export let updateNewPostText = (newPost) => {
    state.profilePage.newPostText = newPost;
    renderTree(state)
}

export let updateNewMessage = (newMessage) => {
    state.dialogsPage.newMessageText = newMessage;
    renderTree(state);
}

export default state;
