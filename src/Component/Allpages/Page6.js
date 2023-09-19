import React from 'react'
import '../Allcss/Page6.css'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

const Page6 = () => {
  return (
    <>
      <div className='container-fluid w-100 mb-5' style={{ backgroundColor: ' rgb(207, 184, 158)',height:'23rem' }}>
        <div className='w-100 mt-5 '>
          <div className='row w-100'>
            <div className='col mt-5 w-100'>
              <h1 style={{ float: 'left', marginRight: '1%', marginLeft: '20%' }}>Take your Brand to new heights with </h1>
              <h1 style={{  color: "rgb(255, 110, 20)" }}>customised </h1>
            </div>
          </div>
          <div className='w-100'>
          <h1 className='text-center ' style={{ color: "rgb(255, 110, 20)" }}>Social Media Packages</h1>
          <h4 className='text-center'>Starting with Rs 32,000/-

            25,000/-</h4>
            </div>
        </div>
        <div className='mt-5'>
          <button type='button' className='btn custom-button mb-3 rounded-5' style={{ backgroundColor: 'rgb(255, 110, 20)', color: 'white', marginLeft: '45%' }}>Get a Quote  <ArrowCircleRightIcon style={{ width: '2rem', height: '2rem' }} /></button>
          <h4 className='text-center mb-5  '>Offer valid for next 3 days only. Hurry up!</h4>
        </div>
      </div>
    </>
  )
}

export default Page6