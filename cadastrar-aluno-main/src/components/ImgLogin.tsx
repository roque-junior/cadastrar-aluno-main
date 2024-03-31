import { Box } from '@mui/material';

export default function ImgLogin() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        height: '100vh',
        paddingLeft: '0vw',
        width: '100vw', 
      }}
    >
      <img
        src="https://www.edgehill.ac.uk/wp-content/uploads/2022/03/Computing-1.jpg"
        alt="login"
        style={{
          width: '50%', 
          height: 'auto',
          objectFit: 'cover',
          objectPosition: 'center', 
        }}
      />
    </Box>
  );
}