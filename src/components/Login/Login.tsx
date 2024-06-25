import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import { Box,
         Button, 
         Checkbox, 
         FormControlLabel, 
         InputAdornment, 
         Stack, 
         TextField, 
         Typography 
        } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import "./Login.css"

const textFieldStyle = {
    background:"transparent",
    '& :-webkit-autofill': {
        WebkitBoxShadow: '0 0 0 1000px transparent inset',
        WebkitTextFillColor: 'white',
        transition: 'background-color 5000s ease-in-out 0s',
    },
}

const checkBoxStyle = {
    color: 'none',
    fontFamily:'cursive',
          '&.Mui-checked': {
            color: '#f384bb',
        },
}

const buttonStyle={
    background:'#f384bb',
    width:'inherit',
    textTransform:'none',
    marginTop:'1.5rem',
    color:'black',
    '&: hover':{
        background:'#f384bb',
    },
    fontFamily:'cursive'
}

const Login = () => {

    const[userName, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[showPassword, setShowPassword] = useState<boolean>(false);
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

    const isLoginDisabled = !(userName === 'meghana' && password === '123');

  return (
    <div className = "loginpage">
            <Box className = "loginbox">
                <Stack spacing={3}>
                    <Typography className="title" sx={{fontFamily:'cursive'}}>Shop.In</Typography>
                    <TextField  placeholder="User Name" variant="filled" sx = {textFieldStyle} 
                        onChange={handleUsernameChange}
                        value={userName}
                        InputProps={{ 
                            startAdornment: (
                            <InputAdornment position="start">
                                    <PersonIcon sx={{cursor:'default',color:'white',paddingBottom:'0.2rem'}} fontSize='medium'/>
                                
                            </InputAdornment>
                            ),
                            
                        }}
                    />
                    <TextField placeholder="Password" variant="filled" sx = {textFieldStyle}
                        onChange={handlePasswordChange}
                        value = {password}
                        type={showPassword ? 'text' : 'password'}
                        InputProps={{ 
                            startAdornment: (
                            <InputAdornment position="start">
                                    <LockIcon sx={{cursor:'default',color:'white',paddingBottom:'0.2rem'}} fontSize='medium'/>
                                
                            </InputAdornment>
                            ),
                            endAdornment: password && (
                                <InputAdornment position="end">
                                    {
                                        showPassword?
                                        <VisibilityIcon sx={{cursor:'pointer',color:'white',paddingTop:'0.7rem',}} fontSize='medium'
                                        onClick = {showPasswordHandler}
                                        />
                                        :
                                        <VisibilityOffIcon sx={{cursor:'pointer',color:'white',paddingTop:'0.7rem'}} fontSize='medium'
                                        onClick = {showPasswordHandler}
                                        />                                        
                                    }
                                                
                            </InputAdornment>
                            )            
                        }}
                    />                 
                </Stack>
                <Stack direction='row' justifyContent='space-between' alignItems="center" className="remember">
                        <FormControlLabel
                            control={<Checkbox  size="small" sx={checkBoxStyle}/>}
                            label="Remember Me"
                            
                            />
                        <Typography className='forget' sx={{fontFamily:'cursive'}}>Forget?</Typography>
                    </Stack>
                    <Button sx={buttonStyle} disabled={isLoginDisabled} onClick = {()=>homepageHandler()}>Login</Button>
            </Box>
    </div>
  )
}

export default Login
