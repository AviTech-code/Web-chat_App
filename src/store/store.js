import { configureStore } from '@reduxjs/toolkit'
import displayUserData from './features/displayingUserData'
import searchUser from './features/searchUser'
import fetchingContacts from './features/fetchContactList'
import sendingMessage from './features/sendingMessage'
export const store = configureStore({
    reducer: {
        displayData: displayUserData,
        searchUser: searchUser,
        contact: fetchingContacts,
        sendMessage: sendingMessage,

    },

})