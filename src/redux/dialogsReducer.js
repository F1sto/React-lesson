const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage ={
                message: state.newMessageText,
            };
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;

        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.newMessage;
            return state;

        default:
            return state;
    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})
export const updateNewMessageActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE, newMessage: text})

export default dialogsReducer;