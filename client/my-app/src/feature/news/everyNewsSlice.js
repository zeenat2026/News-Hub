import { createSlice } from "@reduxjs/toolkit";
import { fetchAllTypeNews } from "../../config/asyncThunk";


const initialState = {
    newsData:[],
    loading:true,
    error:null
}
export const everyNewsSlice = createSlice({
initialState,
name:'news',
  reducers:{},
  extraReducers:(builder)=>{
   builder.addCase(fetchAllTypeNews.pending,(state)=>{
     state.loading=true;
     state.error=null;
   });
   builder.addCase(fetchAllTypeNews.fulfilled,(state,action)=>{
     state.newsData=action.payload;
     state.loading=false
     state.error=null;
   });
   builder.addCase(fetchAllTypeNews.rejected,(state,action)=>{
     state.loading=false;
     state.error=action.payload;
   });
  

   }
});

export default everyNewsSlice.reducer;