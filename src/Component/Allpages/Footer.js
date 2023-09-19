import React from 'react'
import footerpic from '../Images/1.jpg'
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import MapsUgcSharpIcon from '@mui/icons-material/MapsUgcSharp';
import { Instagram } from '@mui/icons-material';
import { Facebook } from '@mui/icons-material';
import { LinkedIn } from '@mui/icons-material';
import { WhatsApp } from '@mui/icons-material';
const Footer = () => {
  return (
   <>
   <div className='container-fluid  h-100' style={{backgroundColor:'rgb(54, 54, 54)'}}>
    <div className='row'>
      <div className='col-4 mb-5'>
       <img src={footerpic} className='m-5 ' style={{width:'25%',height:'25%'}}></img>
       <h4 className='m-5 lh-1 fs-5 ' style={{color:'white'}}>Welcome to Socio Curry - Where your brand meets a blend of 360 Degree Design, Branding & Digital Marketing Approach</h4>
       <div className='m-5 '>
        <h4 style={{color:'rgb(255, 110, 20)'}}>CONTACT INFO</h4>
        <h6 style={{color:'white',lineHeight:'1rem'}}>SocioCurry Studio,</h6>
        <h6 style={{color:'white',lineHeight:'1rem'}}>Q Block, DLF Phase 2,</h6>
        <h6 style={{color:'white',lineHeight:'1rem'}}>Gurgaon, Haryana</h6>
       </div>
    
      </div>
      <div className='col-3'></div>
      <div className='col-4 m-5 mb-5'>
<h3 className='text-center' style={{color:'rgb(255, 110, 20)'}}>SOCIOCURRY SUPORT</h3>
<h5 className='text-center ' style={{color:'white'}}>Available 7 days a week </h5>
<button className='btn mt-5 fs-4' style={{backgroundColor:'white',marginLeft:'15%'}}><EmailIcon style={{width:'2.5rem',height:'2.5rem'}}/> sociocurry@gmail.com</button>
<button className='btn mt-3  fs-4' style={{ textAlign:'left',backgroundColor:'white',marginLeft:'15%',width:'70%'}}><CallIcon style={{width:'2.5rem',height:'2.5rem'}}/> +91 9818777620</button>
<button className='btn mt-3  fs-4' style={{ textAlign:'left',backgroundColor:'white',marginLeft:'15%',width:'70%'}}><MapsUgcSharpIcon style={{width:'2.5rem',height:'2.5rem'}}/> Chat with Us</button>
   
    <h3 className='mt-5 text-center'style={{color:'rgb(255, 110, 20)'}} >CONNECT WITH US</h3>
     <Instagram  style={{color:'white' ,marginLeft:'5rem',width:'3.5rem',height:'3.5rem'}}/>
     <Facebook   style={{color:'white' ,marginLeft:'1rem',width:'3.5rem',height:'3.5rem'}}/>
     <LinkedIn   style={{color:'white' ,marginLeft:'1rem',width:'3.5rem',height:'3.5rem'}}/>
     <WhatsApp   style={{color:'white' ,marginLeft:'1rem',width:'3.5rem',height:'3.5rem'}}/>

      </div>
     
    </div>
   </div>
   </>
  )
}

export default Footer