import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import mainPageReducer from "./mainPageReducer";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

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
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage =  dialogsReducer(this._state.dialogsPage, action);
        this._state.mainPage =  mainPageReducer(this._state.mainPage, action);

        this._callSubscriber(this._state);

    },

}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE, newMessage: text})

window.store = store;
export default store;