import React from 'react'
import TeamCard from '../Components/TeamCard'
import Footer from '../Components/Footer'




const Teams = () => {
  return (
    <><div className=' text-white bg-black text-center h-full '>
      <h1 className='text-5xl mt-10  mb-12'>Meet the team</h1>
<div class="flex items-center py-4 mb-10 mt-14">
 
  <div class="flex-grow h-px bg-gray-400"></div>
  <span class="flex-shrink text-2xl text-gray-500 px-4 italic font-light">Office Bearers</span>
 <div class="flex-grow h-px bg-gray-400 "></div> 
</div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 gap-y-8 justify-items-center align-items-center px-8">


      <TeamCard imgSrc="\office\me3.jpg" name="Nischal Gautam" position="Webmaster"  className='rounded-lg'/>
      <TeamCard imgSrc="\office\Chairperson.jpg" name="Sidharth Mall" position="Chairperson"/>
      <TeamCard imgSrc="techTeam\hardik.png" name="Yash Goyal" position="vice chairperson"/>
      <TeamCard imgSrc="techTeam\manan.jpg" name="Sanika" position="Secratory"/>
      <TeamCard imgSrc="techTeam\sanya.png" name="Sanya" position="Membership chair"/>
        
      

      </div>

     
<div class="flex items-center py-4 mb-10 mt-14">
 
  <div class="flex-grow h-px bg-gray-400"></div>
  <span class="flex-shrink text-2xl text-gray-500 px-4 italic font-light">Technical Team</span>
 <div class="flex-grow h-px bg-gray-400"></div>
</div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center align-items-center px-8 gap-y-8">
      <TeamCard imgSrc="techTeam\rachit.jpg" name="Rachit gurjar" position="Technical Head"  className='rounded-lg'/>

      <TeamCard imgSrc="techTeam\utkarsh.png" name="Utkarsh" position="Technical Co head"  className='rounded-lg'/>

      <TeamCard imgSrc="techTeam\ayush.png" name="Ayush" position="Team Member"  className='rounded-lg'/>
      <TeamCard imgSrc="techTeam\devansh.jpeg" name="Devansh" position="Team Member"/>
      <TeamCard imgSrc="techTeam\hardik.png" name="Hardik" position="Team Member"/>
      <TeamCard imgSrc="techTeam\manan.jpg" name="Manan" position="Team Member"/>
      <TeamCard imgSrc="techTeam\sanya.png" name="Sanya" position="Team Member"/>

      </div>

     
<div class="flex items-center py-4 mb-10 mt-14">
 
  <div class="flex-grow h-px bg-gray-400"></div>
  <span class="flex-shrink text-2xl text-gray-500 px-4 italic font-light">Social Media Team</span>
 <div class="flex-grow h-px bg-gray-400"></div>
</div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center align-items-center px-8 gap-y-8">
      <TeamCard imgSrc="socialmedia/jatin.png" name="Jatin" position="Co head"  className='rounded-lg'/>
      <TeamCard imgSrc="socialmedia/aarchi.jpg" name="Aarchi" position="Team Member"/>
      <TeamCard imgSrc="socialmedia/aditi.png" name="Aditi" position="Team Member"/>
      <TeamCard imgSrc="socialmedia/ananya.png" name="Ananya" position="Team Member"/>
      <TeamCard imgSrc="socialmedia/random.jpg" name="nischal" position="Team Member"/>
      <TeamCard imgSrc="socialmedia/random2.JPG" name="nischal" position="Team Member"/>

      </div>

     
<div class="flex items-center py-4 mb-10 mt-14">
 
  <div class="flex-grow h-px bg-gray-400"></div>
  <span class="flex-shrink text-2xl text-gray-500 px-4 italic font-light">Management Team</span>
 <div class="flex-grow h-px bg-gray-400"></div>
</div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center align-items-center px-8 gap-y-8">
      <TeamCard imgSrc="management/m4.png" name="kartikey" position="management head"  className='rounded-lg'/>
      <TeamCard imgSrc="management/m1.png" name="adeetya dubey" position="management co-head"/>
      <TeamCard imgSrc="management/m3.png" name="nischal" position="webmaster"/>
      <TeamCard imgSrc="management/m2.png" name="nischal" position="webmaster"/>
      <TeamCard imgSrc="management/m5.jpg" name="nischal" position="webmaster"/>
      <TeamCard imgSrc="management/m6.png" name="nischal" position="webmaster"/>
      <TeamCard imgSrc="management/m7.png" name="nischal" position="webmaster"/>
      <TeamCard imgSrc="management/m8.png" name="nischal" position="webmaster"/>
      <TeamCard imgSrc="management/m9.png" name="nischal" position="webmaster"/>
      <TeamCard imgSrc="management/m10.png" name="nischal" position="webmaster"/>
      <TeamCard imgSrc="management/m11.png" name="nischal" position="webmaster"/>

      </div>

      <div class="flex items-center py-4 mb-10 mt-14">
 
  <div class="flex-grow h-px bg-gray-400"></div>
  <span class="flex-shrink text-2xl text-gray-500 px-4 italic font-light">Multimedia Team</span>
 <div class="flex-grow h-px bg-gray-400"></div>
</div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center align-items-center px-8 gap-y-8">
      <TeamCard imgSrc="\multimedia\multimedia\Akshat Kulshrestha.png" name="Akshat Kulshreshta" position="Team Member"  className='rounded-lg'/>
      <TeamCard imgSrc="\multimedia\multimedia\Pranav Gupta.png" name="Pranav Gupta" position="Team Member"/>
      <TeamCard imgSrc="\multimedia\multimedia\Riddhi Chaplot.png" name="Ridhi Chaplot" position="Team Member"/>
      <TeamCard imgSrc="\multimedia\multimedia\Saumyakumari.PNG" name="Saumya Kumari" position="Team Member"/>
      

      </div>


      <div class="flex items-center py-4 mb-10 mt-14">
 
  <div class="flex-grow h-px bg-gray-400"></div>
  <span class="flex-shrink text-2xl text-gray-500 px-4 italic font-light">PR  Team</span>
 <div class="flex-grow h-px bg-gray-400"></div>
</div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center align-items-center px-8 gap-y-8">
     <TeamCard imgSrc="\pr\ananya.png" name="Ananya" position="PR head"  className='rounded-lg'/>

      <TeamCard imgSrc="\pr\AditiSingh_PR.png" name="Aditi Singh" position="Team Memeber"  className='rounded-lg'/>
     

      </div>

      <div class="flex items-center py-4 mb-10 mt-14">
 
  <div class="flex-grow h-px bg-gray-400"></div>
  <span class="flex-shrink text-2xl text-gray-500 px-4 italic font-light">Content Team</span>
 <div class="flex-grow h-px bg-gray-400"></div>
</div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center align-items-center px-8 gap-y-8">
      <TeamCard imgSrc="content\content\ishita.png" name="Ishita Prabhakar" position="Head"  className='rounded-lg'/>
      <TeamCard imgSrc="content\content\Aditya.png" name="Aditya" position="Team Member"/>
      <TeamCard imgSrc="content\content\akshit.jpg" name="akshit" position="Team Member"/>
      <TeamCard imgSrc="content\content\ayush.png" name="ayush" position="Team Member"/>
      <TeamCard imgSrc="content\content\Muskan.png" name="Muskan" position="Team Member"/>
      <TeamCard imgSrc="content\content\Pragya.jpg" name="Pragya" position="Team Member"/>
      <TeamCard imgSrc="content\content\Prayansh.png" name="Prayansh" position="Team Member"/>
      <TeamCard imgSrc="content\content\c1.jpg" name=" mohit" position="Team Member"/>

      </div>

      <div class="flex items-center py-4 mb-10 mt-14">
 
  <div class="flex-grow h-px bg-gray-400"></div>
  <span class="flex-shrink text-2xl text-gray-500 px-4 italic font-light">Design  Team</span>
 <div class="flex-grow h-px bg-gray-400"></div>
</div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-items-center align-items-center px-8 gap-y-8">
        <TeamCard imgSrc="\design\design team\Rachit Katyal.png" name="Ananya" position="Co head"/>
      <TeamCard imgSrc="\design\design team\Abhinav.png" name="Abhinav" position="Team Member"  className='rounded-lg'/>
      <TeamCard imgSrc="\design\design team\IMG-20240101-WA0033(1).jpg" name="mohit" position="Team Member"/>
      <TeamCard imgSrc="\design\design team\IMG-20240325-WA0058.jpg" name="purohi" position="Team Member"/>
      
      <TeamCard imgSrc="\design\design team\Siya.jpg" name="Siya" position="Team Member"/>

      </div>

      
    </div>
    
  <Footer/>
  </>)
}

export default Teams

