import { createTheme } from "@mui/material";

 export const getTheme=(mode)=> createTheme({
palette: {
    mode: mode,
    ...(mode === 'light' && {
      // palette values for light mode
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#f50057',
      },
      navbar:{
        main: '#1976d2',
      },
         footer: { main: '#1976d2' },
      category: { main: 'rgb(255, 255, 255)' },
    }),
    ...(mode === 'dark' && {
      // palette values for dark mode
      primary: {
        main: '#1976d2',
      },
      secondary: {
        main: '#f50057',
      },
      navbar:{
        main: '#1a2332', 
      },
       footer: { main: '#1a2332', },
      category: { main: '#1a2332',  },
        background: { default: 'rgb(22, 26, 37)' },
 }),
  },
})