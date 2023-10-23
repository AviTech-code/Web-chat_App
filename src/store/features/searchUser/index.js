import { createSlice } from "@reduxjs/toolkit";
import data from '../../../Data/dummyData.json'
const initialState = {
    value: data.conversations
}

export const searchUser = createSlice({
    name: "searchUser",
    initialState,
    reducers: {
        setSearchValue(state, data) {
            // console.log(data.payload)
            // console.log(search);
            // console.log(initialState.value);
            let newArr = initialState.value.filter((item) => item.contactName.toLowerCase().includes(data.payload.toLowerCase()));
            // console.log(newArr);
            const searchData = {
                arr: newArr,
                search: true
            }
            return searchData;
        },
    }

})
export const { setSearchValue } = searchUser.actions;
export default searchUser.reducer;