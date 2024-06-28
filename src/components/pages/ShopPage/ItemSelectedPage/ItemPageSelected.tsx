import { Box, Button, FormControl, MenuItem, Select, SelectChangeEvent, Stack, Typography } from '@mui/material'
import Carousel from 'react-material-ui-carousel';

import React, { useState } from 'react'


import { useSelector } from 'react-redux';

const quantityValues = [0,1,2,3,4,5,6,7,8,9,10];

const ItemPageSelected = () => {

    const name:string = useSelector((state:any) => state.website.itemName);
    const cost = useSelector((state:any) => state.website.itemCost);
    const image1 = useSelector((state:any) => state.website.image1);
    const image2 = useSelector((state:any) => state.website.image2);
    console.log(name);
    console.log(cost);
    console.log(image1);
    console.log(image2);

const items = [image1,image2];
const[quantity,setQuantity] = useState<number>(0);
const[buttonClicked, setButtonClicked] = useState<boolean>(false);

const handleChange = (event: SelectChangeEvent<number>) => {
    setQuantity(event.target.value as number);
  };
  const cartPageHandler = ()=>
    {
        setButtonClicked(true);
    }

  return (
    <Stack  direction = 'row' justifyContent='center' sx={{paddingLeft:'5rem',paddingRight:'5rem'}}>
            <Box sx={{
                '& div:first-child':
                {
                    overflow:'visible',
                    paddingRight:'14rem'
                },
                width:'50vw'
                
            }}>
                <Carousel sx={{
                    '& button[aria-label="Previous"]': {
                                visibility: 'hidden !important',
                                opacity: 1,
                                '&: hover':{
                                    opacity: 1,
                                    visibility:'hidden'

                                }
                        },
                    '& button[aria-label="Next"]': {
                                visibility: 'hidden !important',
                                opacity: 1,
                                '&: hover':{
                                    opacity: 1,
                                    visibility:'hidden'

                                }
                        }
                    }}>
                    {
                        items.map( (item, i) => 
                            <Box
                                key = {i}
                                component="img"
                                sx={{
                                    height: 450,
                                    width: 450,
                                    transition:'opacity 0.5s ease-in-out'
                    
                                }}
                                alt="The house from the offer."
                                src={item}
                        />
                        )
                    }
                </Carousel>
        </Box>
         <Box sx={{width:'25rem',display:'flex',alignItems:'center',justifyItems:'flex-start'}} >
            <Stack direction = 'column' spacing={2}>
                <Typography variant='h5'sx={{textAlign:'center',fontFamily:'cursive'}}>{name}</Typography>
                <Typography sx={{textAlign:'center',fontFamily:'cursive',fontSize:'1.3rem'}}>{cost}</Typography>
                <Typography sx={{textAlign:'center',fontFamily:'cursive',paddingTop:'1rem'}}>This is a piece of jewelry. 
                    Handcrafted from precious metals by 
                    artisans in a small town. 
                    The perfect piece to complement any outfit.
                </Typography>
                <Typography sx={{textAlign:'center',fontFamily:'cursive',paddingTop:'1rem'}}>Quantity</Typography>
                <FormControl sx={{display:'flex',alignItems:'center'}}>
                    <Select
                        value={quantity}  
                        sx={{width:'7rem',textAlign:'center'}}
                        onChange={handleChange}
                        MenuProps={{
                            PaperProps: {
                                sx: {
                                    maxHeight: '20vh',
                                    '&::-webkit-scrollbar': {
                                        width: '8px',
                                    },
                                    '&::-webkit-scrollbar-track': {
                                        backgroundColor: '#f1f1f1',
                                    },
                                    '&::-webkit-scrollbar-thumb': {
                                        backgroundColor: '#888',
                                        borderRadius: '4px',
                                    },
                                    '&::-webkit-scrollbar-thumb:hover': {
                                        backgroundColor: '#555',
                                    },
                                },
                            },
                        }}
                    >
                        {
                            quantityValues.map((val, i) => 
                                
                                <MenuItem value={val} key={i}>{val}
                                </MenuItem>
                                
                            )
                        }
                         
                    </Select>
                </FormControl>
                <Button 
                onClick={()=>{cartPageHandler()}}
                sx={{
                    textTransform:'none',
                    background:'black',
                    color:'pink',
                    fontFamily:'cursive',
                    '&: hover':{
                        background:'black',
                    }

                }}>
                    {!buttonClicked ?'Add To Cart':'Adding to Cart'}
                    </Button>
            </Stack>
         </Box>
        
    </Stack>
  )
}

export default ItemPageSelected
