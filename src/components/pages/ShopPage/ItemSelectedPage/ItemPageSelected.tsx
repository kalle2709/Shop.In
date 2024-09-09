import { Box, Button, FormControl, MenuItem, Select, SelectChangeEvent, Stack, Typography } from '@mui/material'
import Carousel from 'react-material-ui-carousel';

import React, { useState } from 'react'


import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setAddCartBtnClick, setCartItemList, setItemQuantity, setSelectedButton } from '../../../Store/websiteSlice';

const quantityValues = [1,2,3,4,5,6,7,8,9,10];

const ItemPageSelected = () => {

    const name:string = useSelector((state:any) => state.website.itemName);
    const cost = useSelector((state:any) => state.website.itemCost);
    const image1 = useSelector((state:any) => state.website.image1);
    const image2 = useSelector((state:any) => state.website.image2);
    const buttonClicked = useSelector((state:any) => state.website.addCartBtnClick);
    const [quantity,setQuantity] = useState<number>(1);

    const dispatch = useDispatch();
   
    const items = [image1,image2];
   

    const navigate = useNavigate();

    const handleChange = (event: SelectChangeEvent<number>) => {
        setQuantity(event.target.value as number)
        dispatch(setItemQuantity(event.target.value as number));
    };
    const cartPageHandler = (name:string,cost:string,image1:any,quantityL:number)=>
        {
            dispatch(setAddCartBtnClick(true));
            dispatch(setCartItemList({name,cost,image1,quantity}))
            setTimeout(() => {
                navigate('/Bagpage');
                dispatch(setSelectedButton('bag'));  
            }, 1000);        
              
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
                onClick={()=>{cartPageHandler(name,cost,image1,quantity)}}
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
