import React, { useState } from 'react'
import { Box, Button, Checkbox, FormControlLabel, Grid, InputAdornment, Stack, TextField, Typography } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockIcon from '@mui/icons-material/Lock';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import "./Login.css"

const textFieldStyle = {
    background:"transparent",
}

const checkBoxStyle = {
    color: 'none',
          '&.Mui-checked': {
            color: '#f384bb',
        },
}

const buttonStyle={
    background:'white',
    width:'inherit',
    textTransform:'none',
    marginTop:'1.5rem',
    color:'black',
    '&: hover':{
        background:'white',
    }
}

const Login = () => {

    const[userName, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[showPassword, setShowPassword] = useState<boolean>(false);

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

    const isLoginDisabled = !(userName === 'meghana' && password === '123');

  return (
    <div className = "loginpage">
            <Box className = "loginbox">
                <Stack spacing={3}>
                    <h2>Login</h2>
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
                            endAdornment:  (
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
                        <Typography className='forget'>Forget?</Typography>
                    </Stack>
                    <Button sx={buttonStyle} disabled={isLoginDisabled}>Login</Button>
            </Box>
    </div>
  )
}

export default Login
