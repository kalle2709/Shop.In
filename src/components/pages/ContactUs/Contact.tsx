import { Box, Button, Divider, Grid, Modal, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

const TextFieldStyle = () => ({
    paddingTop:'0.7rem',
    width:'20rem',
    '& .MuiFormLabel-root':
    {
        color:'white',
        fontFamily:'cursive',
    },
    '& .MuiInputBase-input': {
        color: 'white', 
    },
    '& .MuiFormLabel-root::after':
    {
        color:'white',
        fontFamily:'cursive',
    },
    '& .MuiInputBase-root::before':{
        borderBottom:'2px solid white'
    },
    '& .MuiInputBase-root::after':{
        borderBottom:'2px solid white'
    },
    '& .MuiInputBase-root:hover':{
        borderBottom:'2px solid white'
    },
    '& :-webkit-autofill': {
        WebkitBoxShadow: '0 0 0 1000px black inset',
        WebkitTextFillColor: 'white',
        transition: 'background-color 5000s ease-in-out 0s',
    },
    
})
const ButtonStyle={
    color:'black',
    textTransform:'none',
    padding:'1rem',
    background:'rgb(235, 211, 211)',
    fontSize:'1rem',
    fontFamily:'cursive',
    '&:hover':{
        background:'rgb(235, 211, 211)',
    }
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

const Contact = () => {
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [remarks, setRemarks] = useState('');
    const[opeModal, setOpenModal] = useState<boolean>(false);
    const[submitDisabled, setSubmitDisabled] = useState(true);

    const handleClose = ()=>
        {
            setOpenModal(false);
        }
    const modelHandler = () =>
        {
            setOpenModal(true);
        }

    
  return (
    <Grid container direction='column'>
        <Grid item>
            <Header/>
        </Grid>
        <Grid sx={{padding:'1rem',background:'black',marginTop:'1rem',height:'100vh',display:'flex', alignItems:'center', justifyContent:'center'}}>
            <Stack direction='row'  spacing={15} >
                <Stack direction='column' spacing={5}>
                <TextField
                            variant="standard"
                            label='Full Name'
                            value={fullName}
                            onChange={(e) =>{ 
                                 setFullName(e.target.value)
                                 setSubmitDisabled(false)
                                }}
                            sx={TextFieldStyle}
                        />
                        <TextField
                            variant="standard"
                            label='Email'
                            value={email}
                            onChange={(e) => {
                                setEmail(e.target.value) 
                                setSubmitDisabled(false)
                            }}
                            sx={TextFieldStyle}
                        />
                        <TextField
                            variant="standard"
                            label='Remarks'
                            value={remarks}
                            onChange={(e) => {
                                setRemarks(e.target.value)
                                setSubmitDisabled(false)
                            }}
                            sx={TextFieldStyle}
                        />
                    <Button sx={ButtonStyle} disabled={submitDisabled} onClick = {()=> modelHandler()}>Submit</Button>

                </Stack>
                <Stack direction='column' spacing={2} justifyContent='center'>
                    <Typography variant='h3' sx={{color:'white',fontFamily:'cursive'}}>Contact</Typography>
                    <Stack direction='row' sx={{alignItems:'center',display:'flex'}} spacing={2}>
                        <Box>
                            <Divider orientation="horizontal" sx={{borderColor:'white',width:'13rem'}}/>

                        </Box>
                        
                        <Typography variant='h3' sx={{color:'white',fontFamily:'cursive'}}>Us</Typography>
                    </Stack>
                    <Typography sx={{color:'white',fontFamily:'cursive',fontSize:'0.8rem',width:'20rem'}}>It is very important for us to 
                        keep in touch with you. So we are always ready to answer any question that interests you. Shoot!</Typography>
                </Stack>
            </Stack>

        </Grid>
        <Grid item>
            <Footer/>
        </Grid>
        <Modal
            open={opeModal}
            onClose={handleClose}
        >
            <Box sx={{ ...ModalStyle, width: 400 }}>
                <Typography variant='h6' sx={{color:'black',fontFamily:'cursive'}}>Request received! We will respond to you as soon as possible.</Typography>

                
            </Box>
        </Modal>
        
    </Grid>
  )
}

export default Contact
