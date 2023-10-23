import { createSlice } from "@reduxjs/toolkit";
import data from '../../../Data/dummyData.json'
const initialState = {
    value: data.conversations
}

export const displayUserData = createSlice({
    initialState,
    name: 'displayData',
    reducers: {
        profilePicture: (state, data) => {
            // console.log(data);
            // console.log(state.value);
            let id = data.payload;
            const picAndName = {
                name: initialState.value[id].contactName,
                pic: initialState.value[id].avatar,
                chatLog: initialState.value[id].chatLog,
                boolValue: true,
                id: id,
            }
            return picAndName;
        },


    }
})

export const { profilePicture, } = displayUserData.actions
export default displayUserData.reducer;