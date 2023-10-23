import { createSlice } from "@reduxjs/toolkit";
import data from '../../../Data/dummyData.json'
const initialState = {
    value: data.conversations
}

export const fetchingContacts = createSlice({
    name: "contact",
    initialState,
    reducers: {
        fetchContacts: (state, data) => {
            let contactsArray = [];
            // let boolValue = true;
            // console.log(state.value[1]);
            console.log(state);
            for (let i = 0; i < state.value.length; i++) {
                contactsArray.push(state.value[i]);
            }
            return {
                value: contactsArray,
                boolValue: !data.payload
            };


        }
    }
})
// Action creator
export const { fetchContacts } = fetchingContacts.actions
// Selector
export default fetchingContacts.reducer;