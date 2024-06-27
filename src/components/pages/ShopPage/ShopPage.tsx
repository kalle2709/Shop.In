import React, { useState } from 'react'

import { Button, Grid, Stack } from '@mui/material'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import AllPage from './AllPage/AllPage'
import RingsPage from './RingsPage/RingsPage'
import BraceletPage from './BraceletPage/BraceletPage'
import NecklesPage from './NecklesPage/NecklesPage'
import EarringsPage from './EarRingsPage/EarringsPage'



const ShopPage = () => {
    const[selectedValue, setSelectedValue] = useState<string>('all');


    const handleAllClick = (value: string)=>
        {
            setSelectedValue(value);

        }
    const handleRingsClick = (value: string)=>
        {
            setSelectedValue(value);

        }
    const handleBraceletsClick = (value: string)=>
        {
            setSelectedValue(value);

        }
    const handleNecklacesClick = (value: string)=>
        {
            setSelectedValue(value);

        }
    const handleEarringClick = (value: string)=>
        {
            setSelectedValue(value);

        }

    const buttonStyle = (value:string) =>(
        {
            textTransform:'none',
            textDecoration: value === selectedValue ? 'underline':'none',
            color:'black',
            fontFamily:'cursive',
            fontSize:'1rem',
            background:'none',
            '&: hover':{
                background:'none',
                textDecoration:'underline', 
            }
        
        
        })

  
  return (
    <Grid container direction='column'>
        <Grid item sx={{paddingBottom:'1rem'}}>
            <Header/>
        </Grid>
        <Grid item sx={{backgroundColor:'whitesmoke', padding:'1rem',paddingTop:'0rem',height:'100vh',overflowY:'scroll',
            '&::-webkit-scrollbar': { width: '8px' }, 
            '&::-webkit-scrollbar-track': { backgroundColor: '#f1f1f1' }, 
            '&::-webkit-scrollbar-thumb': { backgroundColor: '#888', borderRadius: '4px' }, 
            '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#555' } 
        }}>
            <Stack direction = 'column' spacing={5} >
                <Stack direction='row' spacing={3} justifyContent='center' sx = {{background:'whitesmoke',padding:'1rem',position: 'sticky',top:0,zIndex:1,overflowY:'hidden'}}>
                    <Button sx={buttonStyle('all')} onClick = {()=>{handleAllClick('all')}}>All</Button>
                    <Button sx={buttonStyle('rings')} onClick = {()=>{handleRingsClick('rings')}}>Rings</Button>
                    <Button sx={buttonStyle('bracelets')} onClick = {()=>{handleBraceletsClick('bracelets')}}>Bracelets</Button>
                    <Button sx={buttonStyle('necklaces')} onClick = {()=>{handleNecklacesClick('necklaces')}}>Necklaces</Button>
                    <Button sx={buttonStyle('earrings')} onClick = {()=>{handleEarringClick('earrings')}}>Earrings</Button>
                </Stack>
                {
                    selectedValue === 'all' && <AllPage/>
                }
                {
                    selectedValue === 'rings' && <RingsPage/>
                }
                {
                    selectedValue === 'bracelets' && <BraceletPage/>
                }
                {
                    selectedValue === 'necklaces' && <NecklesPage/>
                }
                {
                    selectedValue === 'earrings' && <EarringsPage/>
                }
                
                

            </Stack>
           

        </Grid>
        <Grid item>
            <Footer/>
        </Grid>

    </Grid>
  )
}

export default ShopPage
