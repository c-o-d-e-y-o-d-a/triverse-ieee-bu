import React from 'react'
import TeamCard from '../Components/TeamCard'
import Footer from '../Components/Footer'




const Teams = () => {
  return (
    <><div className=' text-white bg-black text-center h-full '>
      <h1 className='text-5xl mt-10  mb-12'>Meet the team</h1>
<div class="flex items-center py-4">
 
  <div class="flex-grow h-px bg-gray-400"></div>
  <span class="flex-shrink text-2xl text-gray-500 px-4 italic font-light">Office Bearers</span>
 <div class="flex-grow h-px bg-gray-400 "></div> 
</div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center align-items-center px-8">
      <TeamCard imgSrc="" name="nischal" position="webmaster"  className='rounded-lg'/>
      <TeamCard/>
      <TeamCard/>
      <TeamCard/>
      <TeamCard/>

      </div>

     
<div class="flex items-center py-4">
 
  <div class="flex-grow h-px bg-gray-400"></div>
  <span class="flex-shrink text-2xl text-gray-500 px-4 italic font-light">Design Team</span>
 <div class="flex-grow h-px bg-gray-400"></div>
</div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center align-items-center px-8">
      <TeamCard imgSrc="" name="nischal" position="webmaster"  className='rounded-lg'/>
      <TeamCard/>
      <TeamCard/>
      <TeamCard/>
      <TeamCard/>

      </div>

     
<div class="flex items-center py-4">
 
  <div class="flex-grow h-px bg-gray-400"></div>
  <span class="flex-shrink text-2xl text-gray-500 px-4 italic font-light">Tech Team</span>
 <div class="flex-grow h-px bg-gray-400"></div>
</div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center align-items-center px-8">
      <TeamCard imgSrc="techTeam/ayush.png" name="ayush" position="team member"  className='rounded-lg'/>
      <TeamCard/>
      <TeamCard/>
      <TeamCard/>
      <TeamCard/>

      </div>

     
<div class="flex items-center py-4">
 
  <div class="flex-grow h-px bg-gray-400"></div>
  <span class="flex-shrink text-2xl text-gray-500 px-4 italic font-light">Multimedia Team</span>
 <div class="flex-grow h-px bg-gray-400"></div>
</div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center align-items-center px-8">
      <TeamCard imgSrc="" name="nischal" position="webmaster"  className='rounded-lg'/>
      <TeamCard/>
      <TeamCard/>
      <TeamCard/>
      <TeamCard/>

      </div>

      
    </div>
  <Footer/>
  </>)
}

export default Teams

