import { Button, Divider, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSelectedButton } from '../../Store/websiteSlice'

const buttonStyle={
    background:'#f384bb',
    width:'inherit',
    textTransform:'none',
    color:'black',
    padding:'0.7rem',
    '&: hover':{
        background:'#f384bb',
    },
    fontFamily:'cursive'
}

const BagPage = () => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleShopNavigation = () =>
        {
            navigate('/Shopnowpage');
            dispatch(setSelectedButton('shopnow'));
            

        }
  return (
    <Grid container direction='column'>
        <Grid item sx = {{marginBottom:'1rem'}}>
            <Header/>
        </Grid>
        <Grid sx={{padding:'2rem', background:'whitesmoke',height:'66vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <Stack direction = 'column' alignItems='center' spacing = {5} >
                <Stack direction='row' spacing={3}>
                    <Typography variant='h4' sx={{fontFamily:'cursive',paddingTop:'0.5rem'}}>Shopping Cart</Typography>
                    <Divider orientation="vertical" sx={{borderColor:'black', paddingTop:'0.5rem', borderWidth:'0.1rem', height:'2.5rem'}}/>
                    <Button disableRipple sx={{fontFamily:'cursive',
                        textTransform:'none', 
                        color:'black', 
                        fontSize:'2rem',
                        padding:'0px',
                        paddingTop:'0',
                        paddingBottom:'0',
                        background:'none',
                        '&: hover':{
                        textDecoration:'underline',
                        background:'none'
                        }
                        }}>Favorites</Button >
                </Stack>
                <Typography sx={{fontFamily:'cursive'}}>You have nothing in your shopping bag</Typography>  
                <Button sx={buttonStyle} onClick={()=>handleShopNavigation()}>Continue Shopping</Button>

            </Stack>
        </Grid>
        
        <Grid item>
            <Footer/>
        </Grid>

    </Grid>
  )
}

export default BagPage
