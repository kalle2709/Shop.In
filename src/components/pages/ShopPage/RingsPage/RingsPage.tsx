import React, { useState } from 'react'
import { Box, Button, Stack } from '@mui/material'


import rings11 from '../../../../images/rings11.avif'
import rings11h from '../../../../images/rings11h.webp'
import rings12 from '../../../../images/rings12.avif'
import rings12h from '../../../../images/rings12h.webp'
import ringsAll from '../../../../images/ringsAll.avif'
import rings21 from '../../../../images/rings21.avif'
import rings21h from '../../../../images/rings21h.avif'
import rings1 from '../../../../images/rings1.avif'
import ring31 from '../../../../images/ring31.avif'
import ring31h from '../../../../images/ring31h.webp'
// import braceletSet from '../../../../images/braceletSet.avif'
// import braceletSet1 from '../../../../images/braceletSet1.avif'
// import earrings from '../../../../images/earrings.avif'
// import earrings12 from '../../../../images/earrings12.avif'
// import neckles32 from '../../../../images/neckles32.avif'
// import neckles32h from '../../../../images/neckles32.avif'


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

const RingsPage = () => {

  const[mouseHovered11, setMouseHovered11] = useState<boolean>(false);
  const[mouseHovered12, setMouseHovered12] = useState<boolean>(false);
  const[mouseHovered13, setMouseHovered13] = useState<boolean>(false);
  const[mouseHovered21, setMouseHovered21] = useState<boolean>(false);
  const[mouseHovered22, setMouseHovered22] = useState<boolean>(false);

  const handleMouseEnter11 = () =>
    {
        setMouseHovered11(true);
    }
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
  
   const handleMouseLeave11 = () =>
    {
        setMouseHovered11(false);
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
 


  return (
    <Stack direction = 'column' sx={{padding:'0.5rem'}} spacing={10} alignItems='center'>
      <Stack direction = 'row'   spacing={10}>
        <Stack direction = 'column' spacing={2} sx={{
          cursor:'pointer',        
          }} 
          onClick = {()=>{}}
        >
          <Box
            component="img"
            onMouseEnter = {handleMouseEnter11}
            onMouseLeave = {handleMouseLeave11}
            sx={{
                height: 350,
                width: 350,
                transition:'opacity 0.5s ease-in-out'

            }}
            alt="The house from the offer."
            src={mouseHovered11 ? rings11h : rings11}
            style={{ opacity: mouseHovered11 ? 0.4 : 1 }}
            />
            <Stack direction = 'column' spacing={0}>
                <Button disableRipple sx={shopButtonStyle}>Jude Couple Rings</Button>
                <Button disableRipple sx={shopButtonStyle}>$140.40</Button>
            </Stack>                   
        </Stack>
        <Stack direction = 'column' spacing={2} sx={{
          cursor:'pointer',        
          }} 
          onClick = {()=>{}}
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
              src={mouseHovered12 ? rings12h : rings12}
              style={{ opacity: mouseHovered12 ? 0.4 : 1 }}
            />
            <Stack direction = 'column' spacing={0}>
                <Button disableRipple sx={shopButtonStyle}>Ben Bracelet</Button>
                <Button disableRipple sx={shopButtonStyle}>$120.40</Button>
            </Stack>                  
        </Stack>
        <Stack direction = 'column' spacing={2} sx={{
            cursor:'pointer',        
            }} 
            onClick = {()=>{}}
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
                src={mouseHovered13 ? rings1 : ringsAll}
                style={{ opacity: mouseHovered13 ? 0.4 : 1 }}
              />
              <Stack direction = 'column' spacing={0}>
                  <Button disableRipple sx={shopButtonStyle}>Katy Couple Rings</Button>
                  <Button disableRipple sx={shopButtonStyle}>$220.40</Button>
              </Stack>                  
        </Stack>
      </Stack>
      <Stack direction = 'row'   spacing={10}>
        <Stack direction = 'column' spacing={2} sx={{
            cursor:'pointer',        
            }} 
            onClick = {()=>{}}
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
                src={mouseHovered21 ? rings21h : rings21}
                style={{ opacity: mouseHovered21 ? 0.4 : 1 }}
              />
              <Stack direction = 'column' spacing={0}>
                  <Button disableRipple sx={shopButtonStyle}>Katy Ring</Button>
                  <Button disableRipple sx={shopButtonStyle}>$320.40</Button>
              </Stack>                  
        </Stack>
        <Stack direction = 'column' spacing={2} sx={{
              cursor:'pointer',        
              }} 
              onClick = {()=>{}}
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
                  src={mouseHovered22 ? ring31h : ring31}
                  style={{ opacity: mouseHovered22 ? 0.4 : 1 }}
                />
                <Stack direction = 'column' spacing={0}>
                    <Button disableRipple sx={shopButtonStyle}>Hardy Ring</Button>
                    <Button disableRipple sx={shopButtonStyle}>$200.70</Button>
                </Stack>                  
        </Stack>
      </Stack>
    </Stack>
    
  )
}

export default RingsPage
