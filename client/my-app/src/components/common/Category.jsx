import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { fetchAllTypeNews } from '../../config/asyncThunk';




const Category = () => {
    const categories=['business','entertainment','general','health','science','sports','technology']
      const dispatch=useDispatch();
      const handleButtonClick=(category)=>{
    dispatch(fetchAllTypeNews(category));
      };
    
  
  return (
 <Stack direction="row"
  sx={{width:'100%' ,
    position:'sticky',
    top:{xs:'3.5rem', sm:'4rem'},
    zIndex:10,
   backgroundColor:'category.main',
    minWidth:'0',height:'8rem',padding:'1rem',
    overflowX:'auto', scrollbarWidth:{xs:'none', sm:'thin'}, '&::-webkit-scrollbar': { display: 'none' },alignItems:'center',justifyContent:{xs:'flex-start',md:'center'}}}
  spacing={2} >
    {categories.map((category)=><Button key={category} sx={{flexShrink:0,whiteSpace:'nowrap'}} variant="contained" onClick={()=>handleButtonClick(category)} >{category}</Button>)}  
    </Stack>
  )
}

export default Category
