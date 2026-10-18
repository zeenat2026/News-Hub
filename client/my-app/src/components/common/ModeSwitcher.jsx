import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import LightModeIcon from '@mui/icons-material/LightMode';
import Brightness6SharpIcon from '@mui/icons-material/Brightness6Sharp';
import {useDispatch} from 'react-redux';
import { themeChanger } from '../../feature/theme/themeSlice';


 const ModeSwitcher =() => {
  const dispatch = useDispatch();
 
  
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
         color:'white',
        borderRadius: 1,
        border:'2px solid lightgrey',
        minHeight: '56px',
      }}
    >

      <Stack direction={'row'} spacing={2} divider={<Divider  orientation="vertical" flexItem />}>
        <Button onClick={()=>dispatch(themeChanger('system'))}>
      <Brightness6SharpIcon />
      </Button>
       <Button onClick={()=>dispatch(themeChanger('light'))} >
     <LightModeIcon />
      </Button>
       <Button onClick={()=>dispatch(themeChanger('dark'))} >
   <DarkModeOutlinedIcon />
      </Button>
      </Stack>
    
    </Box>
  );
}

export default ModeSwitcher