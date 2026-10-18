
import { Box, Container, Typography, IconButton, Divider, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';



const Footer = () => {
   
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'footer.main',
        color: 'white',
        pt: 6,
        pb: 3,
        mt: 8,
        
      }}
    >
      <Container maxWidth="lg" sx={{display:'flex',flexDirection:'column'}}>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4} sx={{px: 2,justifyContent:'space-between'}}>
                  
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
              NewsHub
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.7)' }}>
              Your trusted source for the latest news and updates.
            </Typography>
          </Box>


          {/* Social */}
          <Box>
            <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, ml: 1.2 }}>
              Follow Us
            </Typography>
            <Box>
            
              <IconButton href='https://github.com/zeenat2026' target='_blank' rel='noopener noreferrer' sx={{ color: 'white' }}><GitHubIcon /></IconButton>
              <IconButton href='https://www.linkedin.com/in/zeenat-shafqaat' target='_blank' rel='noopener noreferrer' sx={{ color: 'white' }}><LinkedInIcon /></IconButton>
            </Box>
          </Box>
        
        </Stack>
        <Divider sx={{ my: 3, borderColor: 'white' }} />

        <Typography variant="body2" align="center" sx={{ color: 'white' }}>
          © {new Date().getFullYear()} NewsHub. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;