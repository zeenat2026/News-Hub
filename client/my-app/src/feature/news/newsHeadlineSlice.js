import { createSlice } from "@reduxjs/toolkit";
import { fetchTopHeadlines } from "../../config/asyncThunk";


const initialState = {
    newsHeadlines:[],
    headlinesLoading:false,
    headlinesError:null
}
const newsHeadlineSlice=createSlice({
    name:'headlines',
    initialState,
    reducers:{},
    extraReducers:(builder) => {
      
    builder.addCase(fetchTopHeadlines.pending,(state)=>{
      state.headlinesLoading=true;
      state.headlinesError=null;
    });
    builder.addCase(fetchTopHeadlines.fulfilled,(state,action)=>{
      state.newsHeadlines=action.payload;
      state.headlinesLoading=false
      state.headlinesError=null;
    });
    builder.addCase(fetchTopHeadlines.rejected,(state,action)=>{
      state.headlinesLoading=false;
      state.headlinesError=action.payload;
    });
    }

})


export default newsHeadlineSlice.reducer