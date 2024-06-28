import { Box, Grid, Modal, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'

import aboutus from '../../../images/aboutus1.png'
import Header from '../../Header/Header'
import Footer from '../../Footer/Footer'

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

const AboutPage = () => {

    const[opeModal, setOpenModal] = useState<boolean>(false);
    const[privacyModal, setPrivacyModal] = useState<boolean>(false);
    const[refundPolicy, setRefundPolicy] = useState<boolean>(false);
    const[shippingPolicy, setShippingPolicy] = useState<boolean>(false);
    const[terms, setTerms] = useState<boolean>(false);

    const openPrivacyModal = () =>
        {
            setOpenModal(true);
            setPrivacyModal(true);
        }
    const openRefundModal = () =>
        {
            setOpenModal(true);
            setRefundPolicy(true);

        }
    const openShippingModal = () =>
        {
            setOpenModal(true);
            setShippingPolicy(true);

        }
    const openTermsOfServices = () =>
        {
            setOpenModal(true);
            setTerms(true);

        }

    const handleClose = () =>
        {
            setOpenModal(false);
            setPrivacyModal(false);
            setRefundPolicy(false);
            setShippingPolicy(false);
            setTerms(false);

        }


  return (
    <Grid container direction='column'>
        <Grid item>
            <Header/>
        </Grid>
        <Grid item sx={{background:'peachpuff',marginTop:'1rem'}}>
            <Stack direction='row' spacing={4} justifyContent='center' >
                <Stack justifyContent='center' >
                    <Typography variant='h4' sx={{fontFamily:'cursive',textAlign:"center"}}>Hello, shopper!</Typography>
                    <Typography variant='h6' sx={{fontFamily:'cursive'}}> Ready to find your next favorite item?</Typography>
                    <Typography variant='h6'sx={{fontFamily:'cursive',textAlign:"center"}}>Let's get started </Typography>
                </Stack>
                <Box>
                   <img src={aboutus} alt='About'/>
                </Box>        
            </Stack>
        </Grid>
        <Grid item sx={{background:'#BDB2FF'}}>
            <Stack direction='row' >
                <Stack justifyContent='center'sx={{width:'25%'}} alignItems='center'>
                    <Typography variant='h4' sx={{fontFamily:'cursive'}}>A</Typography>
                    <Typography variant='h4' sx={{fontFamily:'cursive'}}>B</Typography>
                    <Typography variant='h4'sx={{fontFamily:'cursive'}}>O</Typography>
                    <Typography variant='h4'sx={{fontFamily:'cursive'}}>U</Typography>
                    <Typography variant='h4'sx={{fontFamily:'cursive'}}>T</Typography>
                    <Typography variant='h4'sx={{fontFamily:'cursive'}}>U</Typography>
                    <Typography variant='h4'sx={{fontFamily:'cursive'}}>S</Typography>
                </Stack>  
                <Box sx={{width:'50%',padding:'6rem',background:'white'}}>
                    <Typography sx={{fontFamily:'cursive',textAlign:'center'}}>
                        Welcome to Shop.In, your ultimate destination for quality and convenience. 
                        We are passionate about bringing you a curated selection of the finest products 
                        from around the globe, ensuring that every purchase you make is a step towards a 
                        more stylish, comfortable, and enjoyable life. Our commitment to exceptional customer 
                        service and affordable pricing means that you can shop with confidence and satisfaction 
                        every time. Join us on this journey of discovery and delight, and experience shopping 
                        like never before.
                    </Typography>
                </Box> 
                <Box sx={{background:'#FD8A8A',width:'25%'}}/>
            </Stack>       
        </Grid>
        <Grid item>
            <Stack direction='row' sx={{background:'#FAD1FA',}}>
                <Box sx={{borderRight:'1px solid black',padding:'2rem',cursor:'pointer'}} onClick = {() => {openPrivacyModal()}}>
                    <Stack >
                        <Typography variant='h5' sx={{fontFamily:'cursive',textAlign:"center"}}>Privacy Policy</Typography>
                        <Typography  sx={{fontFamily:'cursive',fontSize:'0.9rem',textAlign:"center"}}>
                            Your privacy is our priority. We are committed to protecting your personal information and ensuring your 
                            shopping experience is safe and secure.
                        </Typography>
                    </Stack>

                </Box>
                <Box sx={{borderRight:'1px solid black',padding:'2rem',cursor:'pointer'}} onClick = {() => {openRefundModal()}}>
                    <Stack >
                        <Typography variant='h5' sx={{fontFamily:'cursive',textAlign:"center"}}>Refund Policy</Typography>
                            <Typography sx={{fontFamily:'cursive',fontSize:'0.9rem',textAlign:"center"}}>
                            We strive to ensure your complete satisfaction with every purchase. 
                            If you are not entirely happy with your order, our refund policy is designed 
                            to make the return process as smooth as possible.
                            </Typography>

                    </Stack>
                </Box>
                <Box sx={{borderRight:'1px solid black',padding:'2rem',cursor:'pointer'}} onClick = {() => {openShippingModal()}}>
                    <Stack >
                        <Typography variant='h5' sx={{fontFamily:'cursive',textAlign:"center"}}>Shipping Policy</Typography>
                            <Typography  sx={{fontFamily:'cursive',fontSize:'0.9rem',textAlign:"center"}}>
                            We are committed to delivering your orders quickly and efficiently. 
                            Click me to find all the necessary information regarding our shipping procedures and policies.
                            </Typography>
                    </Stack>
                </Box>
                <Box sx={{padding:'2rem',cursor:'pointer'}} onClick = {() => {openTermsOfServices()}}>
                    <Stack>
                        <Typography variant='h5' sx={{fontFamily:'cursive',textAlign:"center"}}>Terms of Service</Typography>
                            <Typography  sx={{fontFamily:'cursive',fontSize:'0.9rem',textAlign:"center"}}>
                            By accessing and using our website, you agree to comply with and be bound by the following Terms of Service. 
                            Please read them carefully before making a purchase.
                            </Typography>
                    </Stack>
                </Box>
                
            </Stack>
        </Grid>
        <Modal
            open={opeModal}
            onClose={handleClose}
        >
            <Box sx={{ ...ModalStyle, width: 400 }}>
                {
                    privacyModal && 
                    <Box>
                        <Typography variant='h5' sx ={{fontFamily:'cursive',textAlign:"center"}}>Privacy Policy</Typography>
                        <Typography variant='h6' sx ={{fontFamily:'cursive',paddingTop:'0.5rem'}}>Information We Collect</Typography>
                        <Typography sx ={{fontFamily:'cursive',fontSize:'0.9rem',paddingTop:'0.5rem'}}>We collect information you provide directly to us, 
                            such as when you create an account, place an order, or contact customer service. 
                            This includes your name, email address, shipping address, payment information, 
                            and any other details you choose to provide.
                        </Typography>
                        <Typography variant='h6' sx ={{fontFamily:'cursive',paddingTop:'0.5rem'}}>How We Use Your Information</Typography>
                        <Typography sx ={{fontFamily:'cursive',fontSize:'0.9rem',paddingTop:'0.5rem'}}>We use your information to process your orders, 
                            provide customer support, improve our services, and communicate with you about promotions, 
                            new products, and updates. We may also use it to personalize your shopping experience and 
                            improve our website's functionality.
                        </Typography>
                    </Box>
                                       
                }
                {
                    refundPolicy && 
                    <Box>
                        <Typography variant='h5' sx ={{fontFamily:'cursive',textAlign:"center"}}>Refund Policy</Typography>
                        <Typography variant='h6' sx ={{fontFamily:'cursive',paddingTop:'0.5rem'}}>Return</Typography>
                        <Typography sx ={{fontFamily:'cursive',fontSize:'0.9rem',paddingTop:'0.5rem'}}>You have 30 days from the date of 
                            delivery to return any unused, unworn, and undamaged items in their original packaging 
                            for a full refund. Please ensure all tags and labels are intact.
                        </Typography>
                        <Typography variant='h6' sx ={{fontFamily:'cursive',paddingTop:'0.5rem'}}>How to Initiate a Return</Typography>
                        <Typography sx ={{fontFamily:'cursive',fontSize:'0.9rem',paddingTop:'0.5rem'}}>1. Contact our customer service team at Your Contact Information to request a return authorization.</Typography>
                        <Typography sx ={{fontFamily:'cursive',fontSize:'0.9rem',paddingTop:'0.5rem'}}>2. Pack the item securely in its original packaging and include the return authorization slip.</Typography>
                        <Typography sx ={{fontFamily:'cursive',fontSize:'0.9rem',paddingTop:'0.5rem'}}>3. Ship the item to the address provided by our customer service team.</Typography>
                        <Typography variant='h6' sx ={{fontFamily:'cursive',paddingTop:'0.5rem'}}>Refund Process</Typography>
                        <Typography sx ={{fontFamily:'cursive',fontSize:'0.9rem',paddingTop:'0.5rem'}}>Once we receive your returned item and it passes our inspection, 
                            we will process your refund. This may take up to 7 business days. 
                            Refunds will be issued to the original method of payment. You will receive an 
                            email confirmation once your refund has been processed.
                        </Typography>

                    </Box>
                                       
                }
                {
                    shippingPolicy && 
                    <Box>
                        <Typography variant='h5' sx ={{fontFamily:'cursive',textAlign:"center"}}>Shipping Policy</Typography>
                        <Typography variant='h6' sx ={{fontFamily:'cursive',paddingTop:'0.5rem'}}>Processing Time</Typography>
                        <Typography sx ={{fontFamily:'cursive',fontSize:'0.9rem',paddingTop:'0.5rem'}}>All orders are processed within 5 business days. 
                            Orders are not processed or shipped on weekends or holidays. If we experience a high volume of orders, 
                            processing may be delayed. We will notify you via email if there is a significant delay.
                        </Typography>
                        <Typography variant='h6' sx ={{fontFamily:'cursive',paddingTop:'0.5rem'}}>Shipment Confirmation and Order Tracking</Typography>
                        <Typography sx ={{fontFamily:'cursive',fontSize:'0.9rem',paddingTop:'0.5rem'}}>You will receive a shipment confirmation email once 
                            your order has shipped, containing your tracking number(s). 
                            The tracking number will be active within 24 hours.
                        </Typography>
                        <Typography variant='h6' sx ={{fontFamily:'cursive',paddingTop:'0.5rem'}}>Changes to This Policy</Typography>
                        <Typography sx ={{fontFamily:'cursive',fontSize:'0.9rem',paddingTop:'0.5rem'}}>We may update our shipping policy from time to time. 
                            Changes will be posted on this page and are effective immediately.
                        </Typography>

                    </Box>
                                       
                }
                {
                    terms && 
                    <Box>
                        <Typography variant='h5' sx ={{fontFamily:'cursive',textAlign:"center"}}>Terms of Service</Typography>
                        <Typography variant='h6' sx ={{fontFamily:'cursive',paddingTop:'0.5rem'}}> Acceptance of Terms</Typography>
                        <Typography sx ={{fontFamily:'cursive',fontSize:'0.9rem',paddingTop:'0.5rem'}}>By accessing our website and using our services, 
                            you agree to be bound by these Terms of Service and our Privacy Policy. 
                            If you do not agree with any part of these terms, you must not use our website.
                        </Typography>
                        <Typography variant='h6' sx ={{fontFamily:'cursive',paddingTop:'0.5rem'}}>Use of Our Website</Typography>
                        <Typography sx ={{fontFamily:'cursive',fontSize:'0.9rem',paddingTop:'0.5rem'}}>You agree to use our website only for 
                            lawful purposes and in a manner that does not infringe the rights of, restrict, or 
                            inhibit anyone else's use and enjoyment of the site. Harassment, causing distress 
                            or inconvenience to any other user, transmitting obscene or offensive content, or 
                            disrupting the normal flow of dialogue within our website is prohibited.
                        </Typography>
                        <Typography variant='h6' sx ={{fontFamily:'cursive',paddingTop:'0.5rem'}}>Orders and Payment</Typography>
                        <Typography sx ={{fontFamily:'cursive',fontSize:'0.9rem',paddingTop:'0.5rem'}}>All orders are subject to acceptance and availability. 
                            We reserve the right to refuse service to anyone for any reason at any time. You agree to provide current, 
                            complete, and accurate purchase and account information for all purchases made at our store. Our payment 
                            methods are described on our website.
                        </Typography>

                    </Box>
                                       
                }
                
            </Box>
        </Modal>
        <Grid item>
            <Footer/>
        </Grid>
      
    </Grid>
  )
}

export default AboutPage
