import express from 'express';
import cors from 'cors';
import axios from 'axios';
import dotenv from 'dotenv';
import ConnectDB from './config/db.js';
import Cache from './model/cache.js';

dotenv.config();

ConnectDB();

const app = express();
app.use(cors());



app.get('/api/news/everything', async(req, res) => {
     try {
        const {q='bitcoin'} = req.query;
       // 1. Create a unique identifier key for this specific request
     const cacheKey = `everything_${q.toLowerCase().trim()}`;

    //   Try to get data from the local memory cache
     const cachedDocument = await Cache.findOne({cacheKey});

        if (cachedDocument) {
            console.log("CACHE HIT: Serving from local memory!");
            return res.json(cachedDocument.data); // Return immediately and exit the function
        }
        console.log("CACHE MISS: Fetching fresh data from news.org API...");

    const response = await axios.get('https://newsapi.org/v2/everything',{
        params:{
            q,
            apiKey:process.env.NEWS_API_KEY
        }
    });
     const freshData = response.data;

        // 4. Save the fresh data into the cache so the NEXT request hits the cache
      await Cache.findOneAndUpdate(
            {cacheKey},
            {data:freshData, createdAt: new Date() },
            {upsert:true, returnDocument:'after'}
  )
    
        // 5. Send the data back to your user
        return res.json(freshData);

    
     } catch (error) {
       console.error("Error fetching news:", error.message);
        res.status(500).json({ error: "Failed to retrieve news data" });
     }
      
});

/// Route for top-headlines
app.get('/api/news/top-headlines', async (req, res) => {
    try {
        const { category='general' } = req.query;
        const cacheKey = `headlines_${category.toLowerCase().trim()}`;

        // Try to get data from the local memory cache
        const cachedDocument = await Cache.findOne({cacheKey});
        if (cachedDocument) {
            console.log("CACHE HIT: Serving from local memory!");
            return res.json(cachedDocument.data); // Return immediately and exit the function
        }
        console.log("CACHE MISS: Fetching fresh data from news.org API...");

        const response = await axios.get('https://newsapi.org/v2/top-headlines',{
            params:{
                country:'us',
                category,
                apiKey:process.env.NEWS_API_KEY
            }
        });
        const freshData = response.data;

        // 4. Save the fresh data into the cache so the NEXT request hits the cache
        await Cache.findOneAndUpdate(
            {cacheKey},
            {data:freshData, createdAt: new Date() },
            {upsert:true, returnDocument:'after'}
        )

        // 5. Send the data back to your user
        return res.json(freshData);
        
    } catch (error) {
             console.error("Error fetching top-headlines:", error.message);
        res.status(500).json({ error: "Failed to retrieve news data" });
    }
})

const PORT = process.env.PORT || 8000;
   if(!process.env.VERCEL) {
    app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
   }

   export default app