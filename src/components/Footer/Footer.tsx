import React, { useState } from 'react'
import { Box, Button, Grid, Modal, Stack, TextField, Typography } from '@mui/material'
import { Facebook, Twitter, Instagram } from '@mui/icons-material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import './Footer.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedButton } from '../Store/websiteSlice';



const ModalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border:'none',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

const buttonStyle={
    fontFamily:'cursive',
    background:'black',
    color:'#f18dbf',
    '&: hover':{
        background:'black',
    }
    
}


const Footer = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const[model,setModel] = useState<boolean>(false);
    const[email,setEmail] = useState<string>('');

    const facebookLinkHandler = (url:any)=>
        {
            window.open(url,'_blankl');
        }
    const instaLinkHandler = (url:any)=>
        {
            window.open(url,'_blankl');
        }
    const twitterLinkHandler = (url:any)=>
        {
            window.open(url,'_blankl');
        }
    const linkedInLinkHandler = (url:any)=>
        {
            window.open(url,'_blankl');
        }

     const handleHomeButton = (value:string) =>
        {
          dispatch(setSelectedButton(value));
          navigate('/Homepage');
        }
      const handleShopnowButton = (value:string) =>
        {
          dispatch(setSelectedButton(value));
          navigate('/Shopnowpage');
        }

      const handleAboutButton = (value:string) =>
        {
          dispatch(setSelectedButton(value));
          navigate('/Aboutpage');
        }
      const handleContactButton = (value:string) =>
        {
          dispatch(setSelectedButton(value));
          navigate('/Contactpage');
        }
        const subscribehandler = () =>
        {
            setModel(true);

        }
        const handleEmail = (event:any) =>
        {
            setEmail(event.target.value);

        }
        const handleClose = () =>
        {
            setModel(false);
            setEmail('');


        }

  return (
    <Grid className="footergrid">
        <Stack direction='row' justifyContent='space-between' className="footer">
            <Typography sx={{fontFamily:'cursive',fontSize:'1.5rem'}}>Follow Us On....</Typography>
            <Stack direction='row' spacing={2}>
                <Facebook sx={{color:'black',cursor:'pointer'}} onClick={()=>{facebookLinkHandler('https://www.facebook.com/')}}/>
                <Instagram sx={{color:'black',cursor:'pointer'}} onClick={()=>{instaLinkHandler('https://www.instagram.com/')}}/>
                <Twitter sx={{color:'black',cursor:'pointer'}} onClick={()=>{twitterLinkHandler('https://x.com/i/flow/login')}}/>
                <LinkedInIcon sx={{color:'black',cursor:'pointer'}} onClick={()=>{linkedInLinkHandler('https://www.linkedin.com/login')}}/>
            </Stack>
        </Stack>
        <Stack direction='row' justifyContent='space-between' className="footer">
            <Stack spacing={0.5}>
                <Typography sx={{paddingBottom:'1.5rem',fontFamily:'cursive', paddingLeft:'1.5rem'}}>POLICIES</Typography>
                <Button disableRipple sx={{fontFamily:'cursive',color:'black',textTransform:'none', background:'none','&: hover':{textDecoration:'underline',cursor:'pointer'}}}>Search</Button>
                <Button disableRipple sx={{fontFamily:'cursive',color:'black',textTransform:'none', background:'none','&: hover':{textDecoration:'underline',cursor:'pointer'}}}>Privacy Policy</Button>
                <Button disableRipple sx={{fontFamily:'cursive',color:'black',textTransform:'none', background:'none','&: hover':{textDecoration:'underline',cursor:'pointer'}}}>Refund Policy</Button>
                <Button disableRipple sx={{fontFamily:'cursive',color:'black',textTransform:'none', background:'none','&: hover':{textDecoration:'underline',cursor:'pointer'}}}>Shipping Policy</Button>
                <Button disableRipple sx={{fontFamily:'cursive',color:'black',textTransform:'none', background:'none','&: hover':{textDecoration:'underline',cursor:'pointer'}}}>Terms of Service</Button>
            </Stack>
            <Stack spacing={0.5}>
                <Typography sx={{paddingBottom:'1.5rem',fontFamily:'cursive',paddingLeft:'1.5rem'}}>QUICK LINKS</Typography>
                <Button disableRipple onClick = {()=>{handleHomeButton('home')}} sx=
                    {{fontFamily:'cursive',
                        color:'black',
                        textTransform:'none', 
                        background:'none',
                        '&: hover':{textDecoration:'underline',cursor:'pointer'}}}
                    >Home</Button>
                <Button disableRipple onClick = {()=>{handleShopnowButton('shopnow')}}
                    sx={{fontFamily:'cursive',
                        color:'black',
                        textTransform:'none', 
                        background:'none',
                        '&: hover':{textDecoration:'underline',cursor:'pointer'}}}>Shop Now</Button>
                <Button disableRipple onClick = {()=>{handleAboutButton('about')}} sx={{fontFamily:'cursive',color:'black',textTransform:'none', background:'none','&: hover':{textDecoration:'underline',cursor:'pointer'}}}>About Us</Button>
                <Button disableRipple onClick = {()=>{handleContactButton('contact')}} sx={{fontFamily:'cursive',color:'black',textTransform:'none', background:'none','&: hover':{textDecoration:'underline',cursor:'pointer'}}}>Contact Us</Button>
            </Stack>
            <Stack spacing={1}>
                <Typography sx={{paddingBottom:'1.5rem',fontFamily:'cursive'}}>SUBSCRIBE</Typography>
                <TextField placeholder='Email'
                onChange={handleEmail}
                value={email}/>
                <Button sx={buttonStyle} onClick = {() => subscribehandler()}>Subscribe</Button>
            </Stack>
        </Stack>
        {
            model && 
            <Modal
            open={model}
            onClose={handleClose}
            >
            <Box sx={{ ...ModalStyle, width: 400 }}>
                <Typography variant='h6' sx={{color:'black',fontFamily:'cursive',textAlign:'center'}}>Thank You !</Typography>

                
            </Box>
        </Modal>
        }
        
      
    </Grid>
  )
}

export default Footer
