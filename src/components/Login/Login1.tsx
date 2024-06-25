import React, { useState } from 'react'

import { Box, Button, Checkbox, Divider, FormControlLabel, Grid, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import { useNavigate } from 'react-router-dom';

const textFieldStyle = {
    background:"transparent",
    '& :-webkit-autofill': {
        WebkitBoxShadow: '0 0 0 1000px transparent inset',
        WebkitTextFillColor: 'black',
        transition: 'background-color 5000s ease-in-out 0s',
    },
    '& .MuiInputBase-root::before':{
        borderBottom:'1px solid black'
    },
    '& .MuiInputBase-root::after':{
        borderBottom:'1px solid black'
    },
    '& .MuiInputBase-root:hover':{
        borderBottom:'1px solid black'
    },
}
const checkBoxStyle = {
    color: 'none',
    
          '&.Mui-checked': {
            color: '#f35ba7',
        },
}
const formLabel = {
    '& .MuiFormControlLabel-label':{
        fontFamily:'cursive',
    }
}

const buttonStyle={
    background:'#f35ba7',
    width:'inherit',
    textTransform:'none',
    marginTop:'1.5rem',
    color:'black',
    '&: hover':{
        background:'#f384bb',
    },
    fontFamily:'cursive',
    fontWeight:'600'
}

const Login1 = () => {

    const[userName, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[showPassword, setShowPassword] = useState<boolean>(false);
    const isLoginDisabled = !(userName === 'meghana' && password === '123');
    const navigate = useNavigate();


    const handleUsernameChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setUsername(event.target.value);
    }
    const handlePasswordChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setPassword(event.target.value);

    }
    const showPasswordHandler = ()=>
    {
         setShowPassword(!showPassword);
    }
    const homepageHandler = () =>
        {
            navigate("/Homepage");
        }

  return (
    <Grid container>
        <Grid item>
            <Stack direction='row'>
                <Stack direction='column'>
                    <Box sx={{height:'50vh',width:'50vw',display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <Stack direction='row' spacing={3}>
                                <Divider orientation='vertical' sx={{borderColor:'#f384bb',borderWidth: 5,height:'5.5rem'}}/>
                                <Stack direction='column'>
                                    <Typography variant='h4' sx={{color:'#f35ba7',fontWeight:'700'}}>LOG</Typography>
                                    <Typography variant='h4' sx={{color:'#f35ba7',fontWeight:'700'}}>IN</Typography>
                                </Stack>
                        </Stack>
                    </Box>
                    <Box sx={{height:'50vh',width:'50vw',background:'#f35ba7',display:'flex',alignItems:'center',justifyContent:'center'}}>
                        <Stack direction='row' spacing={3}>
                                    <Divider orientation='vertical' sx={{borderColor:'white',borderWidth: 5,height:'5.5rem'}}/>
                                    <Stack direction='column'>
                                        <Typography variant='h4' sx={{color:'white',fontWeight:'700'}}>SIGN</Typography>
                                        <Typography variant='h4' sx={{color:'white',fontWeight:'700'}}>UP</Typography>
                                    </Stack>

                                </Stack>
                    </Box>      
                </Stack>
                <Stack>
                    <Box sx={{height:'100vh',width:'50vw',display:'flex',alignItems:'center',justifyContent:'center',background:'whitesmoke'}}>
                        <Stack direction='column' spacing={4} sx={{width:'35vw'}}>
                            <Typography variant='h4' sx={{textAlign:'center',fontFamily:'cursive'}}>SHOP.IN</Typography>
                            <TextField  placeholder="User Name" variant="standard" sx = {textFieldStyle} 
                                onChange={handleUsernameChange}
                                value={userName}
                                InputProps={{ 
                                    endAdornment: (
                                    <InputAdornment position="end">
                                            <PersonIcon sx={{cursor:'default',color:'grey',paddingBottom:'0.2rem'}} fontSize='medium'/>
                                        
                                    </InputAdornment>
                                    ),
                                    
                                }}
                            />
                            <TextField  placeholder="Password" variant="standard" sx = {textFieldStyle} 
                                onChange={handlePasswordChange}
                                value={password}
                                type={showPassword ? 'text':'password'}
                                InputProps={{ 
                                endAdornment:  (
                                    <InputAdornment position="end">
                                        {
                                            showPassword ?
                                            <LockOpenIcon sx={{cursor:'pointer',color:'gray',paddingBottom:'0.2rem'}} fontSize='medium'
                                            onClick = {showPasswordHandler}
                                            />
                                            :
                                            <LockIcon sx={{cursor:'pointer',color:'gray',paddingBottom:'0.2rem'}} fontSize='medium'
                                            onClick = {showPasswordHandler}
                                            />                                        
                                        }
                                                    
                                </InputAdornment>
                                )            
                                }}
                            />     
                            <Stack direction='row' justifyContent='space-between' alignItems="center" className="remember">
                                <FormControlLabel
                                    control={<Checkbox  size="small" sx={checkBoxStyle}/>}
                                    label="Remember Me"
                                    sx={formLabel}
                                    
                                />
                                <Typography className='forget' sx={{fontFamily:'cursive'}}>Forget?</Typography>
                            </Stack>
                            <Button sx={buttonStyle} disabled={isLoginDisabled} onClick = {()=>homepageHandler()}>Login</Button>
                            <Typography sx={{textAlign:'center',fontFamily:'cursive',fontSize:'1rem'}}>New user?
                                <Button disableRipple 
                                    sx={{textTransform:'none',
                                        paddingBottom:'0.6rem',
                                        color:'black',
                                        fontWeight:'600',
                                        fontFamily:'cursive',
                                        fontSize:'0.8rem',
                                        textDecoration:'underline',
                                        background:'none','&: hover':{
                                        color:'red',
                                        textDecoration:'underline',
                                        background:'none'
                                    }}}>
                                    Sign Up</Button>
                            </Typography>
                        </Stack>    
                    </Box>
                </Stack>
            </Stack>
        </Grid>


    </Grid>
   
  )
}

export default Login1
