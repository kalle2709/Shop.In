import React, { useState } from 'react'
import { Box, Button, Stack } from '@mui/material'


import braceletAll from '../../../../images/braceletAll.jpg'
import bracelet1 from '../../../../images/bracelet1.jpg'
import bracelet13 from '../../../../images/bracelet13.avif'
import bracelet13h from '../../../../images/bracelet13h.avif'
import bracelet21 from '../../../../images/bracelet21.avif'
import bracelet21h from '../../../../images/bracelet21h.avif'
import bracelet22 from '../../../../images/bracelet22.avif'
import bracelet22h from '../../../../images/bracelet22h.avif'
import braceletSet from '../../../../images/braceletSet.avif'
import braceletSet1 from '../../../../images/braceletSet1.avif'


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

const BraceletPage = () => {

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
            src={mouseHovered11 ? bracelet1 : braceletAll}
            style={{ opacity: mouseHovered11 ? 0.4 : 1 }}
            />
            <Stack direction = 'column' spacing={0}>
                <Button disableRipple sx={shopButtonStyle}>Ben Bracelet</Button>
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
              src={mouseHovered12 ? braceletSet1 : braceletSet}
              style={{ opacity: mouseHovered12 ? 0.4 : 1 }}
            />
            <Stack direction = 'column' spacing={0}>
                <Button disableRipple sx={shopButtonStyle}>Jared Bracelet Set</Button>
                <Button disableRipple sx={shopButtonStyle}>$520.40</Button>
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
                src={mouseHovered13 ? bracelet13h : bracelet13 }
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
                src={mouseHovered21 ? bracelet21h : bracelet21}
                style={{ opacity: mouseHovered21 ? 0.4 : 1 }}
              />
              <Stack direction = 'column' spacing={0}>
                  <Button disableRipple sx={shopButtonStyle}>Katy Bracelet</Button>
                  <Button disableRipple sx={shopButtonStyle}>$220.40</Button>
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
                src={mouseHovered22 ? bracelet22h : bracelet22}
                style={{ opacity: mouseHovered22 ? 0.4 : 1 }}
              />
              <Stack direction = 'column' spacing={0}>
                  <Button disableRipple sx={shopButtonStyle}>Jared Bracelet Set</Button>
                  <Button disableRipple sx={shopButtonStyle}>$280.00</Button>
              </Stack>                  
        </Stack>
      </Stack>
     
    </Stack>
    
  )
}

export default BraceletPage

