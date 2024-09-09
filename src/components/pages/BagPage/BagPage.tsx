import { Box, Button, Checkbox, Divider, FormControl, FormControlLabel, Grid, MenuItem, Modal, Select, SelectChangeEvent, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { setAddCartBtnClick, setItemQuantity, setRemoveCartItem, setSelectedButton } from '../../Store/websiteSlice'

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

const quantityValues = [1,2,3,4,5,6,7,8,9,10];


const BagPage = () => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const buttonClicked = useSelector((state:any) => state.website.addCartBtnClick);  
    const name:string = useSelector((state:any) => state.website.itemName);
    const cost = useSelector((state:any) => state.website.itemCost);
    const image1 = useSelector((state:any) => state.website.image1);
    const items = useSelector((state:any) => state.website.items);
    const quantity = useSelector((state:any) => state.website.itemQuantity);

    const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
    const[openModal,setOpenModal] = useState<boolean>(false);
    const[noItemSelected,setNoItemSelected] = useState<boolean>(false);


    const handleChange = (event: SelectChangeEvent<number>) => {
        dispatch(setItemQuantity(event.target.value as number));
    };
    const handleShopNavigation = () =>
        {
            navigate('/Shopnowpage');
            dispatch(setSelectedButton('shopnow'));
            
        }

    const removeHandler = (index:number) =>
        {
            dispatch(setRemoveCartItem(index));

        }

    const handleCheckboxChange = (index:any) => {
      setCheckedItems(prev => ({
        ...prev,
        [index]: !prev[index]
        }));
        
    };

    const buyHandler = (checkedItems:{ [key: number]: boolean }) =>
        {
            for (const key in checkedItems) {
                if(checkedItems[key])
                {
                    setOpenModal(true);
                    setNoItemSelected(false);
                }
                else if(!checkedItems[key])
                {
                    setOpenModal(true);
                    setNoItemSelected(true);
                }

            }

        }
        
        const handleOpenModal = () =>
            {
                setOpenModal(false);
            }

  return (
    <Grid container direction='column'>
        <Grid item sx = {{marginBottom:'1rem'}}>
            <Header/>
        </Grid>
        {!buttonClicked || items.length ==0 ? 
        <Grid sx={{background:'whitesmoke',height:'66vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
            <Stack direction = 'column' alignItems='center' spacing = {5} >
                <Stack direction='row' spacing={3}>
                    <Typography variant='h4' sx={{fontFamily:'cursive',paddingTop:'0.5rem'}}>Shopping Cart</Typography>
                </Stack>
                <Typography sx={{fontFamily:'cursive'}}>You have nothing in your shopping bag</Typography>  
                <Button sx={buttonStyle} onClick={()=>handleShopNavigation()}>Continue Shopping</Button>

            </Stack>
        </Grid>
        :
        <Grid sx={{padding:'2rem',marginBottom:'1rem', background:'whitesmoke',height:'70vh', display:'flex',  justifyContent:'center',
            overflowY:'scroll',
            '&::-webkit-scrollbar': { width: '8px' }, 
            '&::-webkit-scrollbar-track': { backgroundColor: '#f1f1f1' }, 
            '&::-webkit-scrollbar-thumb': { backgroundColor: '#888', borderRadius: '4px' }, 
            '&::-webkit-scrollbar-thumb:hover': { backgroundColor: '#555' } 
        }}>
            <Stack  direction = 'column'  spacing={10}>
                {items.map((item:any, index:number) => (
                    <Stack key={index} direction='row' spacing={10} sx={{paddingBottom:'1rem'}}>
                       <Checkbox
                       disableRipple
                        size="small"
                        checked={checkedItems[index] || false}
                        onChange={() => handleCheckboxChange(index)}
                        sx={{
                            height: 200,
                            transition: 'opacity 0.5s ease-in-out',
                            padding:'0',
                            '&.Mui-checked': {
                            color: 'black',
        },
                        }}
                        />
                        <Box
                            component="img"
                            sx={{
                                height: 200,
                                width: 200,
                                transition: 'opacity 0.5s ease-in-out'
                                }}
                            alt={item.name}
                            src={item.image1}
                        />
                        <Box>
                            <Stack direction='column' spacing={0.8} alignItems='center' sx={{ paddingTop: '1rem' }}>
                                <Typography sx={{ textAlign: 'center', fontFamily: 'cursive' }}>{item.name}</Typography>
                                    <Typography sx={{ textAlign: 'center', fontFamily: 'cursive', fontSize: '1rem' }}>{item.cost}</Typography>
                                    <Typography sx={{ textAlign: 'center', fontFamily: 'cursive' }}>Quantity</Typography>
                                    <FormControl sx={{ display: 'flex', alignItems: 'center' }}>
                                        <Select
                                            value={quantity}
                                            sx={{ width: '5rem', height: '2rem', textAlign: 'center' }}
                                            onChange={(e) => handleChange(e)}
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
                                                },},},}}
                                        >
                                            {quantityValues.map((val, i) => (
                                                <MenuItem value={val} key={i}>{val}</MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    <Button fullWidth 
                                    onClick = {()=>{removeHandler(index)}}
                                    sx={{
                                    textTransform:'none',
                                    background:'black',
                                    color:'pink',
                                    fontFamily:'cursive',
                                    '&: hover':{
                                        background:'black',
                                    }
                                    }}>
                                    Remove</Button>
                            </Stack>
                        </Box>
            </Stack>))}
                <Button fullWidth 
                    onClick = {()=>{buyHandler(checkedItems)}}
                    sx={{
                    textTransform:'none',
                    background:'black',
                    color:'pink',
                    fontFamily:'cursive',
                    '&: hover':{
                    background:'black',
                    }
                    }}>
                        Proceed
                </Button>
            </Stack>
           
        </Grid>
        }
        <Grid item>
            <Footer/>
        </Grid>

        <Modal
            open={openModal}
            onClose={handleOpenModal}
        >
            <Box sx={{ ...ModalStyle, width: 400 }}>                
                    <Box>
                        <Typography sx ={{fontFamily:'cursive',fontSize:'0.9rem',paddingTop:'0.5rem'}}>
                            {noItemSelected ? 'Please Select an Item' :'Thank you for the purchase'}
                        </Typography>
                        
                    </Box>             
            </Box>
        </Modal>
    </Grid>
  )
}

export default BagPage
