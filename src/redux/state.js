let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hello', likesCount: '23'},
            {id: 2, message: 'Welcome here ^^', likesCount: '1'},
            {id: 3, message: 'Thank you <3', likesCount: '11'},
        ],
    },
    dialogsPage: {
        messages: [
            {isMe: true,  id: 1, message: 'Hello'},
            {isMe: false, id: 2, message: 'Hey!'},
            {isMe: true,  id: 3, message: 'How are you ?'},
            {isMe: false, id: 4, message: 'YoPrSt'},
            {isMe: true,  id: 5, message: 'Omaewa'},
        ],
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

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0,
    };

    state.profilePage.posts.push(newPost);
}

export let addMessage = (message) => {
    debugger;
    let newMessage = {
        message: message,
    };

    state.dialogsPage.messages.push(newMessage);
}

export default state;
