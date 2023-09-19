import React from 'react'
import '../Allcss/PAge2.css'
import pic3 from '../Images/5.jpg'
import ArrowForwardIcon from '@mui/icons-material/ArrowCircleRight';
import pic4 from '../Images/7.png'
const Page2 = () => {
  return (
    <>
    <div className='w-100 mt-5 container'>
      <div className='container'>
     <h1 className='text-center container'>Our Services</h1>
     
     </div>
     <div className='ml-5'>
     <p className='text-center font-weight-light fs-2 lh-1 container ml-5'>Tailored packages to suit your brand's unique needs and budget, ensuring the right platform selection for maximum impact and results.</p>
    </div>
    <div className='container'>
      <div className='row'>
        <div className='col-3'>
        <img src={pic3} className="w-100 img-fluid" alt="..."/>
     
        </div>
        <div className='col-6 mt-5'>
         
          <button type='button' className='mt-5 btn w-100 buttonclasscss' style={{textAlign:'left',backgroundColor:'rgb(243, 243, 243)'}}><h4 className='fs-5' style={{marginLeft:'2rem'}}>1. SOCIAL MEDIA MANAGEMENT <ArrowForwardIcon className='arrowcss rounded-5' style={{width:'3rem',height:'3rem',marginLeft:'12rem'}}/></h4></button>
          <button type='button' className='mt-1 btn w-100 buttonclasscss' style={{textAlign:'left',backgroundColor:'rgb(243, 243, 243)'}}><h4 className='fs-5' style={{marginLeft:'2rem'}}>2. SOCIAL MEDIA MARKETING <ArrowForwardIcon className='arrowcss rounded-5' style={{width:'3rem',height:'3rem',marginLeft:'13.5rem'}}/></h4></button>
          <button type='button' className='mt-1 btn w-100 buttonclasscss font-weight-bold' style={{textAlign:'left',backgroundColor:'rgb(243, 243, 243)'}}><h4 className='fs-5' style={{marginLeft:'2rem'}}>3. ONLINE REPUTATION MANAGEMENT <ArrowForwardIcon className='arrowcss rounded-5' style={{width:'3rem',height:'3rem',marginLeft:'8.2rem'}}/></h4></button>
          <button type='button' className='mt-1 btn w-100 buttonclasscss' style={{textAlign:'left',backgroundColor:'rgb(243, 243, 243)'}}><h4 className='fs-5' style={{marginLeft:'2rem'}}>4.PRODUCT PHOTOSHOOT & REELS <ArrowForwardIcon className='arrowcss rounded-5' style={{width:'3rem',height:'3rem',marginLeft:'10.5rem'}}/></h4></button>
          <button type='button' className='mt-1 btn w-100 buttonclasscss' style={{textAlign:'left',backgroundColor:'rgb(243, 243, 243)'}}><h4 className='fs-5' style={{marginLeft:'2rem'}}>5. SOCIAL MEDIA ADUIT<ArrowForwardIcon className='arrowcss rounded-5' style={{width:'3rem',height:'3rem',marginLeft:'17.2rem'}}/></h4></button>
          <button type='button' className='mt-1 btn w-100 buttonclasscss' style={{textAlign:'left',backgroundColor:'rgb(243, 243, 243)'}}><h4 className='fs-5' style={{marginLeft:'2rem'}}>6. CONTENT & SEO  <ArrowForwardIcon className='arrowcss rounded-5' style={{width:'3rem',height:'3rem',marginLeft:'20rem'}}/></h4></button>
          <button type='button' className='mt-1 btn w-100 buttonclasscss' style={{textAlign:'left',backgroundColor:'rgb(243, 243, 243)'}}><h4 className='fs-5' style={{marginLeft:'2rem'}}>7. CAMPAIGN MANAGEMENT  <ArrowForwardIcon className='arrowcss rounded-5' style={{width:'3rem',height:'3rem',marginLeft:'14rem'}}/></h4></button>
       

          <img src={pic4} className="w-25  img-fluid" style={{marginLeft:'25rem'}} alt="..."/>
     
        </div>
      
     
     
     
      </div>
    </div>
    </div>
    </>
  )
}

export default Page2