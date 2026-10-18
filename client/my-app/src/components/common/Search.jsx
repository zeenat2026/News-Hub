import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { alpha } from '@mui/material/styles';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllTypeNews } from '../../config/asyncThunk';

    const SearchWrapper = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  maxWidth:'200px',
  
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));


const SearchInput=()=>{
const [searchData, setSearchData] = useState('');
const hasTyped=useRef(false)
  

  const dispatch=useDispatch();
 const handleSearch = (e) =>{
       setSearchData(e.target.value);
        hasTyped.current=true
  }

useEffect(() => {
  const q = searchData.trim();

  if (q.length === 0 && hasTyped.current === true) {
    dispatch(fetchAllTypeNews);
    return;
  }
  if (q.length < 3) return;

  const timer = setTimeout(() => dispatch(fetchAllTypeNews(q)), 600);
  return () => clearTimeout(timer);
}, [searchData, dispatch]);


    return(
        <SearchWrapper>
             <SearchIconWrapper>
               <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
             ref={hasTyped}
             value={searchData}
             onChange={handleSearch}
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </SearchWrapper>
    )
}

export default SearchInput




   