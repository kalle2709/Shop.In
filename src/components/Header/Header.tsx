import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Button, Grid, Stack, Typography } from '@mui/material';

import './Header.css';


const avatarStyle = {
  background: '#f384bb',
  width: '35px',
  height: '35px',
  fontSize: '1rem',
};

const Header = () => {
  const [selectedButton, setSelectedButton] = useState<String>('home');
  const navigate = useNavigate();

  const getButtonStyle = (buttonValue:String) => ({
    textTransform: 'none',
    color: 'black',
    fontFamily:'cursive',
    backgroundColor: selectedButton === buttonValue ? '#f384bb' : 'inherit',
    '&: hover': {
      textDecoration: 'underline',
      backgroundColor: selectedButton === buttonValue ? '#f384bb' : 'inherit',
    },
  });

  const handleButtonClick = (value:String) => {
    setSelectedButton(value);
    switch (value){
        case 'home': navigate('/Homepage');break;
        case 'shopnow': navigate('/Shopnowpage');break;
        case 'about': navigate('/Aboutpage');break;
        case 'bag': navigate('/Bagpage');break;
        case 'contact': navigate('/Contactpage');break;
    }
  };

  const logouthandler = ()=>
    {
        navigate('/');
    }

  return (
    <Grid>
      <Grid item className="headergrid">
        <Stack direction="row" justifyContent="space-between">
          <Typography sx={{ fontFamily: 'cursive', color: '#f384bb', fontSize: '1.5rem' }}>SI</Typography>
          <Typography sx={{ fontFamily: 'cursive', color: '#f384bb', fontSize: '1.5rem' }}>SHOP.IN</Typography>
          <Stack direction='row' spacing={3}>
            <Avatar sx={avatarStyle} >M</Avatar>
            <Button sx={getButtonStyle('home')} onClick={logouthandler}>Logout</Button>
          </Stack>
          
        </Stack>
      </Grid>
      <Grid item>
        <Stack direction="row" justifyContent="center" spacing={5}>
          <Button sx={getButtonStyle('home')} onClick={() => handleButtonClick('home')}>Home</Button>
          <Button sx={getButtonStyle('shopnow')} onClick={() => handleButtonClick('shopnow')}>Shop Now</Button>
          <Button sx={getButtonStyle('bag')} onClick={() => handleButtonClick('bag')}>Bag(0)</Button>
          <Button sx={getButtonStyle('about')} onClick={() => handleButtonClick('about')}>About Us</Button>
          <Button sx={getButtonStyle('contact')} onClick={() => handleButtonClick('contact')}>Contact Us</Button>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Header;
