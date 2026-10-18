import { configureStore } from "@reduxjs/toolkit";
import newsReducer from '../feature/news/everyNewsSlice.js';
import headlinesReducer from '../feature/news/newsHeadlineSlice.js';
import themeReducer from '../feature/theme/themeSlice';
 export const store = configureStore({
    reducer:{
   news: newsReducer,
   headlines:headlinesReducer,
   theme:themeReducer
    }
})