import React, { useState } from 'react'
import { Box, Button, Stack } from '@mui/material'


import braceletAll from '../../../../images/braceletAll.jpg'
import bracelet1 from '../../../../images/bracelet1.jpg'
import earringsAll from '../../../../images/earringAll.jpg'
import earrings1 from '../../../../images/earrings1.avif'
import ringsAll from '../../../../images/ringsAll.avif'
import necklesAll from '../../../../images/necklesAll.avif'
import neckles1 from '../../../../images/neckles1.avif'
import rings1 from '../../../../images/rings1.avif'
import ring31 from '../../../../images/ring31.avif'
import ring31h from '../../../../images/ring31h.webp'
import braceletSet from '../../../../images/braceletSet.avif'
import braceletSet1 from '../../../../images/braceletSet1.avif'
import earrings from '../../../../images/earrings.avif'
import earrings12 from '../../../../images/earrings12.avif'
import neckles32 from '../../../../images/neckles32.avif'
import neckles32h from '../../../../images/neckles32h.avif'
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

const AllPage = () => {

  const[mouseHovered11, setMouseHovered11] = useState<boolean>(false);
  const[mouseHovered12, setMouseHovered12] = useState<boolean>(false);
  const[mouseHovered13, setMouseHovered13] = useState<boolean>(false);
  const[mouseHovered21, setMouseHovered21] = useState<boolean>(false);
  const[mouseHovered22, setMouseHovered22] = useState<boolean>(false);
  const[mouseHovered23, setMouseHovered23] = useState<boolean>(false);
  const[mouseHovered31, setMouseHovered31] = useState<boolean>(false);
  const[mouseHovered32, setMouseHovered32] = useState<boolean>(false);

  const dispatch = useDispatch();

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
  const handleMouseEnter23 = () =>
    {
        setMouseHovered23(true);
    }
  const handleMouseEnter31 = () =>
    {
        setMouseHovered31(true);
    }
  const handleMouseEnter32 = () =>
    {
        setMouseHovered32(true);
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
   const handleMouseLeave23 = () =>
    {
        setMouseHovered23(false);
    }
   const handleMouseLeave31 = () =>
    {
        setMouseHovered31(false);
    }
   const handleMouseLeave32 = () =>
    {
        setMouseHovered32(false);
    }

    const handleAllPage11 = (value:string,name:string,cost:string,image1:any,image2:any) =>
      {
        dispatch(setPageItemSelected(value));    
        dispatch(setItemDetails({name,cost,image1,image2}));

      }
    const handleAllPage12 = (value:string,name:string,cost:string,image1:any,image2:any) =>
      {
        dispatch(setPageItemSelected(value));    
        dispatch(setItemDetails({name,cost,image1,image2}));

      }
    const handleAllPage13 = (value:string,name:string,cost:string,image1:any,image2:any) =>
      {
        dispatch(setPageItemSelected(value));    
        dispatch(setItemDetails({name,cost,image1,image2}));

      }
    const handleAllPage21 = (value:string,name:string,cost:string,image1:any,image2:any) =>
      {
        dispatch(setPageItemSelected(value));    
        dispatch(setItemDetails({name,cost,image1,image2}));

      }
    const handleAllPage22 = (value:string,name:string,cost:string,image1:any,image2:any) =>
      {
        dispatch(setPageItemSelected(value));    
        dispatch(setItemDetails({name,cost,image1,image2}));

      }
    const handleAllPage23 = (value:string,name:string,cost:string,image1:any,image2:any) =>
      {
        dispatch(setPageItemSelected(value));    
        dispatch(setItemDetails({name,cost,image1,image2}));

      }
    const handleAllPage31 = (value:string,name:string,cost:string,image1:any,image2:any) =>
      {
        dispatch(setPageItemSelected(value));    
        dispatch(setItemDetails({name,cost,image1,image2}));

      }
    const handleAllPage32 = (value:string,name:string,cost:string,image1:any,image2:any) =>
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
            onClick = {()=>{handleAllPage11('item','Ben Bracelet','$140.40',braceletAll,bracelet1)}}
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
            onClick = {()=>{handleAllPage12('item','Gasparid Earrings','120.40',earringsAll,earrings1)}}

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
              onClick = {()=>{handleAllPage13('item','Katy Couple Rings','$220.40',ringsAll,rings1)}}

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
              onClick = {()=>{handleAllPage21('item','Katy Necklace','$220.40',necklesAll,neckles1)}}

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
              onClick = {()=>{handleAllPage22('item','Jared Bracelet Set','$280.00',braceletSet,braceletSet1)}}

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
                  src={mouseHovered22 ? braceletSet1 : braceletSet}
                  style={{ opacity: mouseHovered22 ? 0.4 : 1 }}
                />
                <Stack direction = 'column' spacing={0}>
                    <Button disableRipple sx={shopButtonStyle}>Jared Bracelet Set</Button>
                    <Button disableRipple sx={shopButtonStyle}>$280.00</Button>
                </Stack>                  
          </Stack>
          <Stack direction = 'column' spacing={2} sx={{
              cursor:'pointer',        
              }} 
              onClick = {()=>{handleAllPage23('item','Dev Earrings','$50.00',earrings,earrings12)}}

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
        </Stack>
        <Stack direction = 'row'   spacing={10}>
          <Stack direction = 'column' spacing={2} sx={{
                cursor:'pointer',        
                }} 
                onClick = {()=>{handleAllPage31('item','Hardy Ring','$200.70',ring31,ring31h)}}

                >
                  <Box
                    component="img"
                    onMouseEnter = {handleMouseEnter31}
                    onMouseLeave = {handleMouseLeave31}
                    sx={{
                        height: 350,
                        width: 350,
                        transition:'opacity 0.5s ease-in-out'

                    }}
                    alt="The house from the offer."
                    src={mouseHovered31 ? ring31h : ring31}
                    style={{ opacity: mouseHovered31 ? 0.4 : 1 }}
                  />
                  <Stack direction = 'column' spacing={0}>
                      <Button disableRipple sx={shopButtonStyle}>Hardy Ring</Button>
                      <Button disableRipple sx={shopButtonStyle}>$200.70</Button>
                  </Stack>                  
          </Stack>
          <Stack direction = 'column' spacing={2} sx={{
              cursor:'pointer',        
              }} 
              onClick = {()=>{handleAllPage32('item','Sam Necklace','$150.00',neckles32,neckles32h)}}
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
        </Stack>
    </Stack>
    
  )
}

export default AllPage
