import { configureStore } from "@reduxjs/toolkit";
import userReducer from './user-slice';
import replyModeReducer from './reply-slice';

const store = configureStore({
    reducer: {user: userReducer, currReplyMode: replyModeReducer}
});

export default store;