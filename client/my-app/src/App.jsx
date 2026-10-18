
import './App.css';
import CssBaseline from '@mui/material/CssBaseline';
import MainLayout from './layoutes/MainLayout'
import News from './pages/News';
import {getTheme} from './getThem/theme.js';
import { ThemeProvider ,useMediaQuery} from '@mui/material';
import { useSelector } from 'react-redux';
import { useMemo } from 'react';
function App() {
  const mode=useSelector((state)=>state.theme.mode);
 const prefersDark = useMediaQuery('(prefers-color-scheme: dark)');

  const actualMode = useMemo(() => {
    if (mode === 'system') {
      return prefersDark ? 'dark' : 'light';
    }
    return mode;
  }, [mode, prefersDark]);

  const myTheme = useMemo(() => getTheme(actualMode), [actualMode])
  
  return (

  <ThemeProvider theme={myTheme}>
      <> <CssBaseline />
 <MainLayout>
   <News />
 </MainLayout>
    </>
  </ThemeProvider>
  )
}

export default App
