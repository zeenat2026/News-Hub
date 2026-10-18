import { createAsyncThunk } from "@reduxjs/toolkit";
import api from './axios';

 export const fetchAllTypeNews=createAsyncThunk('news/fetchAllTypeNews',async(q,{rejectWithValue})=>{
try {
  const response=await api.get('everything',{params:{q}});
    return response.data.articles;

} catch (error) {
  return rejectWithValue(error.message || 'something went wrong');
}
});

export const fetchTopHeadlines = createAsyncThunk('news/fetchTopHeadlines',async (category,{rejectWithValue}) => {
  try {
    const response = await api.get('top-headlines', {
      params: {
        category,
      },
    });
      return response.data.articles;
  } catch (error) {
     return rejectWithValue(error.message || 'something went wrong');
  }
})