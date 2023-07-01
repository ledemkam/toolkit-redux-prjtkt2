import { configureStore, createSlice } from "@reduxjs/toolkit";

const comSlice = createSlice({
    name: "Com",
    initialState:{
        // question que enverra l App
        question: "par defaut",
        //reponse que enverra le composant enfant
        reponse:""
    },
    //reducer servira a tout les fontion qu onj veut utiliser
    reducers: {
        sendQuestion: (state,action) => {
            state.question = action.payload
        },
        sendReponse: (state,action) => {
            state.reponse = action.payload
        },
    }
})

export const mainStore = configureStore({
    reducer: {
          Com: comSlice.reducer
    }
})