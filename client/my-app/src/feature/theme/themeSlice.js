import { createSlice } from "@reduxjs/toolkit"

const validMode = ['light', 'dark', 'system'];
const getNewsTheme = localStorage.getItem('news-app-theme');

if (getNewsTheme && !validMode.includes(getNewsTheme)) {
    localStorage.setItem('news-app-theme', 'light');
}

const initialState={
    mode:getNewsTheme || 'light'
}

const themeSlice=createSlice({
    name:'theme',
    initialState,
    reducers:{
        themeChanger:(state,action)=>{
            state.mode=action.payload
            localStorage.setItem('news-app-theme',action.payload)
        }
    }
});

export const {themeChanger} = themeSlice.actions;
export default  themeSlice.reducer;
