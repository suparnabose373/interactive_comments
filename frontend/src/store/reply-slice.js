import { createSlice } from "@reduxjs/toolkit";
const replyMode = {
    val: false
}

const replyModeSlice = createSlice({
    name: "currReplyMode",
    initialState: replyMode,
    reducers: {
        updateReplyMode(state) { state.val = !state.val }
    }
});

export const ReplyModeActions = replyModeSlice.actions;
export default replyModeSlice.reducer;