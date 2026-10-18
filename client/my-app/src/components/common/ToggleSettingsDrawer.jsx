import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import ClearSharpIcon from '@mui/icons-material/ClearSharp';
import SettingsIcon from '@mui/icons-material/Settings';
import { useState } from 'react';
import Stack from '@mui/material/Stack';
import ModeSwitcher from './ModeSwitcher';
import IconButton from '@mui/material/IconButton';




export default function ToggleSettingsDrawer() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const style = {
  py: 0,
  width: '100%',
  maxWidth: 360,
  borderRadius: 2,
  border: '1px solid',
  borderColor: 'divider',
  
};

  const DrawerList = (
      
    <Box sx={{ width: { xs: '100vw', sm: 360},}} role="presentation">
      <Box component="section" sx={{ display:'flex',justifyContent:'space-between',alignItems:'center', p:1}}>
     <Typography variant='h6' sx={{fontWeight:'bold'}}>Setting</Typography>
     <Button color='primary' onClick={toggleDrawer(false)}><ClearSharpIcon /></Button>
    </Box>
      <Divider  sx={style} />
    <Stack direction="column" spacing={2} sx={{p:1}}>
      <Typography variant='h6' sx={{fontWeight:'500',color:'text.secondary'}}>Mode</Typography>
      <ModeSwitcher />
      </Stack>   
     
    </Box>
  );

  return (

    <div>
    
       <IconButton
              size="large"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
            >
            <SettingsIcon />
            </IconButton>
      <Drawer  open={open} onClose={toggleDrawer(false)} >
        {DrawerList}
      </Drawer>
    </div>
  );
};









