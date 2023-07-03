import { createSlice } from "@reduxjs/toolkit";
const initialUserState = {
    imgPng: "",
    imgWebp: "",
    username: ""
}

const intialUserSlice = createSlice({
    name: "user",
    initialState: initialUserState,
    reducers: {
        updateLoggedInUser(state, action) {
            const { imgPng, imgWebp, username } = action.payload;
            state.imgPng = imgPng;
            state.imgWebp = imgWebp;
            state.username = username;
        }
    }
});

export const UserActions = intialUserSlice.actions;
export default intialUserSlice.reducer;