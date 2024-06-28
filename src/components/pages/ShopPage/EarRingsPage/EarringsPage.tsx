import React, { useState } from 'react'
import { Box, Button, Stack } from '@mui/material'


import earringsAll from '../../../../images/earringAll.jpg'
import earrings1 from '../../../../images/earrings1.avif'
import earrings from '../../../../images/earrings.avif'
import earrings12 from '../../../../images/earrings12.avif'
import earrings13 from '../../../../images/earrings13.avif'
import earrings21 from '../../../../images/earrings21.avif'
import earrings21h from '../../../../images/earrings21h.avif'
import earrings22 from '../../../../images/earrings22.avif'
import earrings22h from '../../../../images/earrings22h.avif'
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

const EarringsPage = () => {

  const[mouseHovered12, setMouseHovered12] = useState<boolean>(false);
  const[mouseHovered13, setMouseHovered13] = useState<boolean>(false);
  const[mouseHovered21, setMouseHovered21] = useState<boolean>(false);
  const[mouseHovered22, setMouseHovered22] = useState<boolean>(false);
  const[mouseHovered23, setMouseHovered23] = useState<boolean>(false);

  const dispatch = useDispatch();
  

  const handleMouseEnter12 = () =>
    {
        setMouseHovered12(true);
    }
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
  const handleMouseEnter23 = () =>
    {
        setMouseHovered23(true);
    }

   const handleMouseLeave12 = () =>
    {
        setMouseHovered12(false);
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
   const handleMouseLeave23 = () =>
    {
        setMouseHovered23(false);
    }

    const handleEarringsPage11 = (value:string,name:string,cost:string,image1:any,image2:any) =>
      {
        dispatch(setPageItemSelected(value));    
        dispatch(setItemDetails({name,cost,image1,image2}));

      }
    const handleEarringsPage12 = (value:string,name:string,cost:string,image1:any,image2:any) =>
      {
        dispatch(setPageItemSelected(value));    
        dispatch(setItemDetails({name,cost,image1,image2}));

      }
    const handleEarringsPage13 = (value:string,name:string,cost:string,image1:any,image2:any) =>
      {
        dispatch(setPageItemSelected(value));    
        dispatch(setItemDetails({name,cost,image1,image2}));

      }
    const handleEarringsPage21 = (value:string,name:string,cost:string,image1:any,image2:any) =>
      {
        dispatch(setPageItemSelected(value));    
        dispatch(setItemDetails({name,cost,image1,image2}));

      }
    const handleEarringsPage22 = (value:string,name:string,cost:string,image1:any,image2:any) =>
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
                onClick = {()=>{handleEarringsPage11('item','Dev Earrings','$50.00',earrings,earrings12)}}

                >
                <Box
                    component="img"
                    onMouseEnter = {handleMouseEnter23}
                    onMouseLeave = {handleMouseLeave23}
                    sx={{
                        height: 350,
                        width: 350,
                        transition:'opacity 0.5s ease-in-out'

                    }}
                    alt="The house from the offer."
                    src={mouseHovered23 ? earrings12 : earrings}
                    style={{ opacity: mouseHovered23 ? 0.4 : 1 }}
                />
                <Stack direction = 'column' spacing={0}>
                    <Button disableRipple sx={shopButtonStyle}>Dev Earrings</Button>
                    <Button disableRipple sx={shopButtonStyle}>$50.00</Button>
                </Stack>                  
        </Stack>
        <Stack direction = 'column' spacing={2} sx={{
          cursor:'pointer',        
          }} 
          onClick = {()=>{handleEarringsPage12('item','Gasparid Earrings','$120.40',earringsAll,earrings1)}}

          >
            <Box
              component="img"
              onMouseEnter = {handleMouseEnter12}
              onMouseLeave = {handleMouseLeave12}
              sx={{
                  height: 350,
                  width: 350,
                  transition:'opacity 0.5s ease-in-out'

              }}
              alt="The house from the offer."
              src={mouseHovered12 ? earrings1 : earringsAll}
              style={{ opacity: mouseHovered12 ? 0.4 : 1 }}
            />
            <Stack direction = 'column' spacing={0}>
                <Button disableRipple sx={shopButtonStyle}>Gasparid Earrings</Button>
                <Button disableRipple sx={shopButtonStyle}>$120.40</Button>
            </Stack>                  
        </Stack>
        <Stack direction = 'column' spacing={2} sx={{
            cursor:'pointer',        
            }} 
            onClick = {()=>{handleEarringsPage13('item','Katy Earrings','$220.40',earrings13,earrings13)}}

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
                src={mouseHovered13 ? earrings13 : earrings13}
                style={{ opacity: mouseHovered13 ? 0.4 : 1 }}
              />
              <Stack direction = 'column' spacing={0}>
                  <Button disableRipple sx={shopButtonStyle}>Katy Earrings</Button>
                  <Button disableRipple sx={shopButtonStyle}>$220.40</Button>
              </Stack>                  
        </Stack>
      </Stack>
      <Stack direction = 'row'   spacing={10}>
        <Stack direction = 'column' spacing={2} sx={{
            cursor:'pointer',        
            }} 
            onClick = {()=>{handleEarringsPage21('item','Katy Earrings','$220.40',earrings13,earrings13)}}

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
                src={mouseHovered21 ? earrings21h : earrings21}
                style={{ opacity: mouseHovered21 ? 0.4 : 1 }}
              />
              <Stack direction = 'column' spacing={0}>
                  <Button disableRipple sx={shopButtonStyle}>Ben Earrings</Button>
                  <Button disableRipple sx={shopButtonStyle}>$220.40</Button>
              </Stack>                  
        </Stack>
        <Stack direction = 'column' spacing={2} sx={{
            cursor:'pointer',        
            }} 
            onClick = {()=>{handleEarringsPage22('item','Jared Blue Heart Earrings','$280.00',earrings22,earrings22h)}}

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
                src={mouseHovered22 ? earrings22h : earrings22}
                style={{ opacity: mouseHovered22 ? 0.4 : 1 }}
              />
              <Stack direction = 'column' spacing={0}>
                  <Button disableRipple sx={shopButtonStyle}>Jared Blue Heart Earrings</Button>
                  <Button disableRipple sx={shopButtonStyle}>$280.00</Button>
              </Stack>                  
        </Stack>
      </Stack>
    </Stack>
    
  )
}

export default EarringsPage;