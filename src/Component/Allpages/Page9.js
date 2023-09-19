import React from 'react'
import '../Allcss/Page9.css'
import pic9 from '../Images/page9pic.jpg'
import handpic from '../Images/7.png'
import pic001 from '../Images/5.jpg'

import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const Page9 = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='container-fluid mt-5 w-100 mb-5' style={{ backgroundColor: 'rgb(207, 184, 158)' }}>
          <div className='row'  >
            <div className='col mt-5'>
              <h1 style={{ float: 'left', marginRight: '1%', marginLeft: '18%' }}>Request Your</h1>
              <h1 style={{ color: 'rgb(255, 110, 20)' }}>Free 1-Month Custom Social Media</h1>
              <h1 style={{ float: 'left', marginRight: '1%', color: 'rgb(255, 110, 20)', marginLeft: '35%' }}>Roadmap</h1>
              <h1>for you Brand</h1>
            </div>
            <h4 className='text-center'>Offer valid for next 3 days only. Hurry up!</h4>
            <button type='button' className='mt-4 btn custom-button mb-3 rounded-5' style={{ backgroundColor: 'rgb(255, 110, 20)', width: '12%', color: 'white', marginLeft: '42%' }}>Get a Quote  <ArrowCircleRightIcon style={{ width: '2rem', height: '2rem' }} /></button>

          </div>
          <img style={{ width: '7%', marginLeft: '55%' }} src={handpic}></img>

        </div>
        <div className='mt-5'>
          <h1 className='text-center mt-5'>Innovative AI- Software Solutions We Leverage</h1>
          <img className='mt-5 w-100' src={pic9}></img>
        </div>

        <div className='row '>
          <div className='col-1'></div>
          <div className='col-4 m-5'>
            <div className='mt-3 w-100 rounded-5' style={{backgroundColor:'rgb(207, 184, 158)'}}>
              <form className='m-4 '>
                <div className='mt-5'>
                  <h1 className='mt-5 ml-3 coloredivh1 ' style={{color:"rgb(207, 184, 158)"}}>.</h1>
                  <h4 className=' text-center fs-4'>Get a FREE Consultation</h4>
                </div>

                <div className='mt-3 mb-1 '>
                  <label className='form-label fs-5'>Your Name</label>
                  <input type='text' style={{backgroundColor:"rgb(207, 184, 158)"}} placeholder='Enter your name' className=' border-0 border-bottom w-100 form-control' />
                </div>
                <div className=' mb-3'>
                  <label className='form-label fs-5'>Your Email</label>
                  <input type='text' style={{backgroundColor:"rgb(207, 184, 158)"}} placeholder='Enter your Email Id' className=' border-0 border-bottom w-100 form-control' />
                </div>
                <div className=' mb-3'>
                  <label className='form-label fs-5'>Your Mobile Number</label>
                  <input type='text'style={{backgroundColor:"rgb(207, 184, 158)"}} placeholder='Enter your Mobile Number' className=' border-0 border-bottom w-100 form-control' />
                </div>
                <div className=' mb-4'>
                  <label className='form-label fs-5'>Your Service Required</label>
                  <input type='text'style={{backgroundColor:"rgb(207, 184, 158)"}} placeholder='Enter the service you are looking for' className=' border-0 border-bottom w-100 form-control' />
                </div>

                <button type='button' className='btn custom-button mb-3 rounded-5' style={{ backgroundColor: 'rgb(255, 110, 20)', color: 'white', marginLeft: '7rem' }}>Book a Call  <ArrowCircleRightIcon style={{ width: '2rem', height: '2rem' }} /></button>

              </form>
            </div>
          </div>

        {/* <div className='col-0 mt-5'></div> */}
<div className='col-4 m-5' >
  <div className='mt-4' >
  <h1 className='text-center mt-5'>Ready to create a </h1>
  <h1 className='text-center'>Social Media Buzz?</h1>

  <h4 className='text-center fw-light'>Let's craft inspiring Brand Stories, stunning Creatives, and engaging Campaigns for your brand's Social Media success.     </h4>
  <img src={pic001} className='w-50 mt-5' style={{marginLeft:'20%'}} ></img>
  <button type='button' className='btn mt-5 custom-button  rounded-5' style={{ backgroundColor: 'rgb(255, 110, 20)', color: 'white', marginLeft: '50%' }}>LET'S TALK  <ArrowCircleRightIcon style={{ width: '2rem', height: '2rem' }} /></button>

  </div>
</div>


        </div>
      </div>
    </>
  )
}

export default Page9