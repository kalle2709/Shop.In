import React, { useState, useEffect } from 'react';
import { Grid, Stack, Typography } from '@mui/material';

// import img1 from '../../../images/img1.jpg';
import img1 from '../../../images/home1.webp';
// import img2 from '../../../images/img2.jpeg';
import img2 from '../../../images/home2.webp';
import img3 from '../../../images/img3.jpg';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

import './HomePage.css';




const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const images = [img1,img2,img3];
    const animationStyle = {
        width: '100%',
        height: '85vh',
        opacity:0.8,
        backgroundImage: `url(${images[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
        transition: 'background-image 1s ease-in-out',
        marginTop:'1rem'
    }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000); 

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <Grid container direction="column">
      <Grid item>
        <Header />
      </Grid>
      <Grid item sx={animationStyle} className = 'imagepart'>
        <Stack>
            <Typography variant="h3" sx={{color: 'white',fontFamily:'cursive'}}>" Treat yo' self "</Typography>
            {/* <Typography variant="h3" sx={{color: 'white', textAlign:'center',fontFamily:'cursive'}}>Buy it</Typography> */}
        </Stack>
        
      </Grid>
      <Grid item>
        <Footer/>
      </Grid>
    </Grid>
  );
};

export default HomePage;

