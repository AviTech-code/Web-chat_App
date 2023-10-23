import { createSlice } from "@reduxjs/toolkit";
import data from '../../../Data/dummyData.json'
const initialState = {
    value: data.conversations
}

export const sendMssge = createSlice({
    name: "sendMessage",
    initialState,
    reducers: {
        addConv: (state, action) => {
            const { id, input } = action.payload;
            const newMessage = {
                "id": state.value[id].chatLog.length + 1,
                "text": input,
                "sender": "me"
            };
            // Create a new state object and modify it
            return {
                ...state,
                value: {
                    ...state.value,
                    [id]: {
                        ...state.value[id],
                        chatLog: [...state.value[id].chatLog, newMessage]
                    }
                }
            };
        },
    }
});
// Action creators are generated for each case key in the action object
export const { addConv } = sendMssge.actions;
export default sendMssge.reducer;