import React from 'react'
import SponsorCard from '../Components/SponsorCard'
import SponsorSlider from '../Components/SponsorSlider'
import { Button } from '@mui/material'
import Footer from '../Components/Footer'

const Sponsor = () => {
  return (
    <>
    
  <div className='h-full w-screen bg-black text-center '>

      <div className="md:text-5xl text-4xl mt-6 text-white">
        Call for Sponsors
      </div>
     

    <div className=' mt-4 md:my-14 bg-grey-900 flex justify-center items-center ms-4  md:ms-4' id='sponsorship-tiers'>
     
       <div className='flex my-10 gap-6 flex-wrap justify-center items-center '>
      <SponsorCard type ="Title" details = "Exclusing naming rights for the event" cost="Rs 45k"/>
      <SponsorCard type ="Gold" details = "Logo inclusion on pro mmotional materials" cost="Rs 30k"/>
      <SponsorCard type ="Silver" details = "Logo placement on event materials and signage" cost="Rs 20k"/>
     </div>

    </div>


    <div className="text-white text-3xl my-30 mt-8 mb-28">
      Our Previous Sponsors
      <div className="mt-12 bg-white">

      < SponsorSlider/>
      </div>

    </div>

   <h2 className='md:text-6xl text-4xl mb-8 text-white'>Whats in it for you?</h2>
   <h4 className='mb-8 text-white'>Tap on the link below to view our sponsorship deck</h4>
   <Button variant="outlined" ><a href="https://drive.google.com/file/d/1UBW84q0qKifZw-sLkpiWiUK3DjIhQrAe/view?usp=sharing">View sponsorship deck</a></Button>
   <div className='mb-28'></div>
    </div>
    
    <Footer/>
    </>
  )
}

export default Sponsor
