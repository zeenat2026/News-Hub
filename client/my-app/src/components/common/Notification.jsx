import { useEffect, useState } from 'react';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTopHeadlines } from '../../config/asyncThunk';


const Notification = () => {

const [anchorEl, setAnchorEl] = useState(null);
const headlines = useSelector((state) => state.headlines.newsHeadlines);
const headlineLoading = useSelector((state) => state.headlines.headlinesLoading);
const headlineError = useSelector((state) => state.headlines.headlinesError);
const dispatch = useDispatch()


const sortedData = [...headlines].slice(0,10);


const [lastSeen, setLastSeen] = useState(() => {
  const saved = localStorage.getItem('news-last-seen');
  return saved ? new Date(saved) : new Date();
});
const newCount = sortedData.filter((news) => new Date(news.publishedAt) > lastSeen).length


   
     const handleOpenNotificationsMenu = (event) => {
    setAnchorEl(event.currentTarget);
    setLastSeen(new Date());
    localStorage.setItem('news-last-seen', new Date().toISOString());
  };

  const handleCloseNotificationsMenu = () => {
    setAnchorEl(null);
  };
 const handleOpenLatestNews=(newsUrl)=>{
  window.open(newsUrl,'_blank')
  handleCloseNotificationsMenu()
 }



 useEffect(()=>{
    dispatch(fetchTopHeadlines('general'))
    const intervalId = setInterval(() => {
      dispatch(fetchTopHeadlines('general'));
    }, 30 * 60 * 1000);
    return () => {
      clearInterval(intervalId);
    };
 },[dispatch])
 

  return (
    <>
     <IconButton
              size="large"
              aria-label={`show ${newCount} new notifications`}
              color="inherit"
              onClick={handleOpenNotificationsMenu}
            >
              <Badge badgeContent={newCount}  color="error">
                <NotificationsIcon />
              </Badge>
            </IconButton>

               <Menu
              sx={{ mt: '45px'}}
              slotProps={{paper : { sx: { maxHeight: '60vh' } }}}
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleCloseNotificationsMenu}
            >  
            {sortedData.length === 0 && headlineLoading && <MenuItem disabled><Typography sx={{  maxWidth: 300,whiteSpace: 'normal' }}>Loading...</Typography></MenuItem>}
            {sortedData.length === 0 && !headlineLoading && headlineError && <MenuItem disabled><Typography sx={{  maxWidth: 300,whiteSpace: 'normal' }}>Something went wrong</Typography></MenuItem>}
            {sortedData.length === 0 && !headlineLoading && !headlineError && <MenuItem disabled>
            <Typography sx={{  maxWidth: 300,whiteSpace: 'normal' }}>No news found</Typography></MenuItem>}
            {sortedData.length > 0 &&  sortedData.map((latestNews) => (
                <MenuItem key={latestNews?.url} onClick={() => handleOpenLatestNews(latestNews?.url)}>
                  
                  <Typography sx={{  maxWidth: 300,whiteSpace: 'normal' }}>{latestNews?.title}</Typography>
                </MenuItem>
              ))}
              
            </Menu>
            </>
  )
}

export default Notification
