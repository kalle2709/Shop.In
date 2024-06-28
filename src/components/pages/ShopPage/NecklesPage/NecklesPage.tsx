import React, { useState } from 'react'
import { Box, Button, Stack } from '@mui/material'

import necklesAll from '../../../../images/necklesAll.avif'
import neckles1 from '../../../../images/neckles1.avif'
import neckles32 from '../../../../images/neckles32.avif'
import neckles13 from '../../../../images/neckles13.avif'
import neckles32h from '../../../../images/neckles32h.avif'
import neckles13h from '../../../../images/neckles13h.avif'
import neckles21 from '../../../../images/neckles21.avif'
import neckles21h from '../../../../images/neckles21h.avif'
import neckles22 from '../../../../images/neckles22.avif'
import { useDispatch } from 'react-redux'
import { setItemDetails, setPageItemSelected } from '../../../Store/websiteSlice'


const shopButtonStyle = 
    {
        textTransform:'none',
        color:'black',
        fontFamily:'cursive',
        fontSize:'1rem',
        background:'none',
        padding:'0',
        '&: hover':{
            background:'none',
            textDecoration:'underline', 
        }
    

    }

const NecklesPage = () => {

  const[mouseHovered13, setMouseHovered13] = useState<boolean>(false);
  const[mouseHovered21, setMouseHovered21] = useState<boolean>(false);
  const[mouseHovered22, setMouseHovered22] = useState<boolean>(false);
  const[mouseHovered32, setMouseHovered32] = useState<boolean>(false);

  const dispatch = useDispatch();

  
  const handleMouseEnter13 = () =>
    {
        setMouseHovered13(true);
    }
  const handleMouseEnter21 = () =>
    {
        setMouseHovered21(true);
    }
  const handleMouseEnter22 = () =>
    {
        setMouseHovered22(true);
    }
  
  const handleMouseEnter32 = () =>
    {
        setMouseHovered32(true);
    }
  
   const handleMouseLeave13 = () =>
    {
        setMouseHovered13(false);
    }
   const handleMouseLeave21 = () =>
    {
        setMouseHovered21(false);
    }
   const handleMouseLeave22 = () =>
    {
        setMouseHovered22(false);
    }
   const handleMouseLeave32 = () =>
    {
        setMouseHovered32(false);
    }
    
    const handleNecklacePage11 = (value:string,name:string,cost:string,image1:any,image2:any) =>
      {
        dispatch(setPageItemSelected(value));    
        dispatch(setItemDetails({name,cost,image1,image2}));

      }
    const handleNecklacePage12 = (value:string,name:string,cost:string,image1:any,image2:any) =>
      {
        dispatch(setPageItemSelected(value));    
        dispatch(setItemDetails({name,cost,image1,image2}));

      }
    const handleNecklacePage13 = (value:string,name:string,cost:string,image1:any,image2:any) =>
      {
        dispatch(setPageItemSelected(value));    
        dispatch(setItemDetails({name,cost,image1,image2}));

      }
    const handleNecklacePage21 = (value:string,name:string,cost:string,image1:any,image2:any) =>
      {
        dispatch(setPageItemSelected(value));    
        dispatch(setItemDetails({name,cost,image1,image2}));

      }
    const handleNecklacePage22 = (value:string,name:string,cost:string,image1:any,image2:any) =>
      {
        dispatch(setPageItemSelected(value));    
        dispatch(setItemDetails({name,cost,image1,image2}));

      }
  


  return (
    <Stack direction = 'column' sx={{padding:'0.5rem'}} spacing={10} alignItems='center'>
      <Stack direction = 'row'   spacing={10}>
        <Stack direction = 'column' spacing={2} sx={{
                cursor:'pointer',        
                }} 
                onClick = {()=>{handleNecklacePage11('item','Sam Necklace','$150.00',neckles32,neckles32h)}}

                >
                <Box
                    component="img"
                    onMouseEnter = {handleMouseEnter32}
                    onMouseLeave = {handleMouseLeave32}
                    sx={{
                        height: 350,
                        width: 350,
                        transition:'opacity 0.5s ease-in-out'

                    }}
                    alt="The house from the offer."
                    src={mouseHovered32 ? neckles32h : neckles32}
                    style={{ opacity: mouseHovered32 ? 0.4 : 1 }}
                />
                <Stack direction = 'column' spacing={0}>
                    <Button disableRipple sx={shopButtonStyle}>Sam Necklace</Button>
                    <Button disableRipple sx={shopButtonStyle}>$150.00</Button>
                </Stack>                  
        </Stack>
        <Stack direction = 'column' spacing={2} sx={{
            cursor:'pointer',        
            }} 
            onClick = {()=>{handleNecklacePage12('item','Katy Necklace','$220.40',necklesAll,neckles1)}}

            >
              <Box
                component="img"
                onMouseEnter = {handleMouseEnter21}
                onMouseLeave = {handleMouseLeave21}
                sx={{
                    height: 350,
                    width: 350,
                    transition:'opacity 0.5s ease-in-out'

                }}
                alt="The house from the offer."
                src={mouseHovered21 ? neckles1 : necklesAll}
                style={{ opacity: mouseHovered21 ? 0.4 : 1 }}
              />
              <Stack direction = 'column' spacing={0}>
                  <Button disableRipple sx={shopButtonStyle}>Katy Necklace</Button>
                  <Button disableRipple sx={shopButtonStyle}>$220.40</Button>
              </Stack>                  
        </Stack>
        <Stack direction = 'column' spacing={2} sx={{
            cursor:'pointer',        
            }} 
            onClick = {()=>{handleNecklacePage13('item','Jade Fllower Necklace','$220.40',neckles13,neckles13h)}}
            >
              <Box
                component="img"
                onMouseEnter = {handleMouseEnter13}
                onMouseLeave = {handleMouseLeave13}
                sx={{
                    height: 350,
                    width: 350,
                    transition:'opacity 0.5s ease-in-out'

                }}
                alt="The house from the offer."
                src={mouseHovered13 ? neckles13h : neckles13}
                style={{ opacity: mouseHovered13 ? 0.4 : 1 }}
              />
              <Stack direction = 'column' spacing={0}>
                  <Button disableRipple sx={shopButtonStyle}>Jade Fllower Necklace</Button>
                  <Button disableRipple sx={shopButtonStyle}>$220.40</Button>
              </Stack>                  
        </Stack>
      </Stack>
      <Stack direction = 'row'   spacing={10}>
        <Stack direction = 'column' spacing={2} sx={{
            cursor:'pointer',        
            }} 
            onClick = {()=>{handleNecklacePage21('item','Gen Stone Necklace','$220.40',neckles21,neckles21h)}}
            >
              <Box
                component="img"
                onMouseEnter = {handleMouseEnter21}
                onMouseLeave = {handleMouseLeave21}
                sx={{
                    height: 350,
                    width: 350,
                    transition:'opacity 0.5s ease-in-out'

                }}
                alt="The house from the offer."
                src={mouseHovered21 ? neckles21h : neckles21}
                style={{ opacity: mouseHovered21 ? 0.4 : 1 }}
              />
              <Stack direction = 'column' spacing={0}>
                  <Button disableRipple sx={shopButtonStyle}>Gen Stone Necklace</Button>
                  <Button disableRipple sx={shopButtonStyle}>$220.40</Button>
              </Stack>                  
        </Stack>
        <Stack direction = 'column' spacing={2} sx={{
            cursor:'pointer',        
            }} 
            onClick = {()=>{handleNecklacePage22('item','Jared Necklace','$280.00',neckles22,neckles22)}}
            >
              <Box
                component="img"
                onMouseEnter = {handleMouseEnter22}
                onMouseLeave = {handleMouseLeave22}
                sx={{
                    height: 350,
                    width: 350,
                    transition:'opacity 0.5s ease-in-out'

                }}
                alt="The house from the offer."
                src={mouseHovered22 ? neckles22 : neckles22}
                style={{ opacity: mouseHovered22 ? 0.4 : 1 }}
              />
              <Stack direction = 'column' spacing={0}>
                  <Button disableRipple sx={shopButtonStyle}>Jared Necklace</Button>
                  <Button disableRipple sx={shopButtonStyle}>$280.00</Button>
              </Stack>                  
        </Stack>
      </Stack>
    </Stack>
    
  )
}

export default NecklesPage


