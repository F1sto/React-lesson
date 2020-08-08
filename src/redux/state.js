let store = {
    _state: {
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
    },

    _callSubscriber() {

    },

    getState() {
        return this._state;
    },

    addPost() {
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };

        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state)
    },

    addMessage() {
        let newMessage ={
            message: this._state.dialogsPage.newMessageText,
        };

        this._state.dialogsPage.messages.push(newMessage);
        this._state.dialogsPage.newMessageText = '';
        this._callSubscriber(this._state);
    },

    updateNewMessage(newMessage) {
        this._state.dialogsPage.newMessageText = newMessage;
        this._callSubscriber(this._state);
    },

    updateNewPostText(newPost) {
        this._state.profilePage.newPostText = newPost;
        this._callSubscriber(this._state);
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

}

// let state = {
//     profilePage: {
//         posts: [
//             {id: 1, message: 'Hello', likesCount: '23'},
//             {id: 2, message: 'Welcome here ^^', likesCount: '1'},
//             {id: 3, message: 'Thank you <3', likesCount: '11'},
//         ],
//         newPostText: '',
//     },
//     dialogsPage: {
//         messages: [
//             {isMe: true,  id: 1, message: 'Hello'},
//             {isMe: false, id: 2, message: 'Hey!'},
//             {isMe: true,  id: 3, message: 'How are you ?'},
//             {isMe: false, id: 4, message: 'YoPrSt'},
//             {isMe: true,  id: 5, message: 'Omaewa'},
//         ],
//         newMessageText: '',
//         dialogs: [
//             {id: 1, name: 'Lada'},
//             {id: 2, name: 'BMW'},
//             {id: 3, name: 'Mersedes'},
//         ],
//     },
//     mainPage: {
//         friendList: [
//             {id: 1, name: 'Bob'},
//             {id: 2, name: 'Lee'},
//             {id: 3, name: 'John'},
//         ],
//     },
// }

// window.state = state;

// export const addPost = () => {
//     let newPost = {
//         id: 5,
//         message: state.profilePage.newPostText,
//         likesCount: 0,
//     };
//
//     state.profilePage.posts.push(newPost);
//     state.profilePage.newPostText = '';
//     renderTree(state);
// }
//
// export const addMessage = () => {
//     let newMessage = {
//         message: state.dialogsPage.newMessageText,
//     };
//
//     state.dialogsPage.messages.push(newMessage);
//     state.dialogsPage.newMessageText = '';
//     renderTree(state);
// }
//
// export const updateNewPostText = (newPost) => {
//     state.profilePage.newPostText = newPost;
//     renderTree(state)
// }
//
// export const updateNewMessage = (newMessage) => {
//     state.dialogsPage.newMessageText = newMessage;
//     renderTree(state);
// }
//
// export const subscribe = (observer) => {
//     renderTree = observer;
// }

export default store;