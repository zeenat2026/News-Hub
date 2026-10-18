
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import Loader from '../components/common/Loader';
import { Alert, Box } from '@mui/material';
import { fetchAllTypeNews } from '../config/asyncThunk';

 const  News = () => {
const newsData=useSelector((state)=>state.news.newsData);
 const loading=useSelector((state)=>state.news.loading);
const newsErr = useSelector((state) => state.news.error);
  
const dispatch = useDispatch();

useEffect(()=>{
  dispatch(fetchAllTypeNews());

},[dispatch]);

      const filteredNews= newsData?.filter((news) =>{
         return news?.urlToImage 
     })


     if(loading && filteredNews.length === 0) return <Box sx={{display:'flex',justifyContent:'center',alignItems:'center'}}><Loader /></Box>
     if (newsErr) return <Alert severity="error">{newsErr}</Alert>
     if (filteredNews?.length=== 0)  return <Alert severity='info'>No data yet</Alert>
    return(
  <Container maxWidth="lg" sx={{ py: 4}}>
      <Grid container spacing={3} >
        {filteredNews.map((news) => (
          <NewsCard key={news?.url} news={news} />
        ))}
      </Grid>
    </Container>
    )
}




 function NewsCard({news}) {
 
  return (
   <Grid size={{ xs: 12, sm: 6, md: 4,lg:3}} sx={{backgroundColor:'category.main'}} >
          <Card
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              borderRadius: 2,
              boxShadow: 3,
              transition: "transform 0.2s",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: 6,
              },
            }}
          >
            <CardMedia
              component="img"
              image={news?.urlToImage}
              alt="News thumbnail"
              sx={{
                height: 200,
                objectFit: "cover",
              }}
            />

            <CardContent sx={{ flexGrow: 1 }}>
              <Typography
                variant="h6"
                component="h2"
                sx={{
                  fontWeight: 600,
                  mb: 1,
                  overflow: "hidden",
                  color:'grey.700',
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: "vertical",
                }}
              >
                {news?.title}
              </Typography>

              <Typography
                variant="body2"
            
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  color:'grey.700'
                
                }}
              >
                {news?.description}
              </Typography>
            </CardContent>

            <CardActions sx={{ px: 2, pb: 2 }}>
              <Button onClick={()=>window.open(news.url,'_blank')} size="small" variant="contained" >
                Read More
              </Button>
            </CardActions>
          </Card>
        </Grid>

  );
}

export default News;