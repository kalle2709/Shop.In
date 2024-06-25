import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState = {
    buttonSelected:'home'

}

const websiteSlice = createSlice({
    name:'website',
    initialState,
    reducers:{
        setSelectedButton(state,action: PayloadAction<string>){
            state.buttonSelected = action.payload
        },
    }

})


export const{setSelectedButton} = websiteSlice.actions;
export default websiteSlice.reducer
