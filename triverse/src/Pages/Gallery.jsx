// import * as React from 'react';
// import ImageList from '@mui/material/ImageList';
// import ImageListItem from '@mui/material/ImageListItem';

// function srcset(image, size, rows = 1, cols = 1) {
//   return {
//     src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
//     srcSet: `${image}?w=${size * cols}&h=${
//       size * rows
//     }&fit=crop&auto=format&dpr=2 2x`,
//   };
// }

// export default function Gallery() {
//   return (
//     <div className='flex justify-center items-center flex-col w-full h-screen bg-black'>
//     <h1 className=' font-bold bg-clip-text text-transparent text-white my-8' style={{fontSize:'2rem'}}>
//       Our previous events
//     </h1>
//     <ImageList className='mb-20'
//       sx={{ width: 1000, height: 600 }}
//       variant="quilted"
//       cols={4}
//       rowHeight={121}
//     >
//       {itemData.map((item) => (
//         <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
//           <img
//             {...srcset(item.img, 121, item.rows, item.cols)}
//             alt={item.title}
//             loading="lazy"
//           />
//         </ImageListItem>
//       ))}
//     </ImageList>
//     </div>
    
//   );
// }


import Footer from '../Components/Footer'
import GalleryCard from '../Components/GalleryCard'

import React from 'react'

const gallery = () => {
  return (
    <>
    <div className='text-center grid grid-cols-1 justify-items-center align-items-center'>
      <h1 className='mb-16 text-5xl text-white mt-10'>Our Previous <br/> Events</h1>
      <div className=" image-gallery grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 justify-items-center align-items-center gallery">
         {itemData.map((item) => (
          <GalleryCard imageSrc={item.img}/>

    
        

         ))
         };
         </div>
    </div>
    <Footer/>
    </>
  )
}

export default gallery


const itemData = [
  {
    img: '/teamphoto.jpg',
    
  },
  {
    img: '/teamphoto2.jpg',
    
  },
  {
    img: '',
    
  },
  {
    img: '/event7.jpg',
    
  },
  {
    img: '/event1.jpg',
    
  },
  {
    img: '/event2.jpg',
   
  },
  {
    img: '/event3.JPG',
  },
  {
    img: '/event4.JPG',
  },
  {
    img: '/event5.JPG',
  },
  {
    img: '/ieeewie.jpg',
    
  },
  {
    img: '/shradh.jpg',
    
  },
  {
    img: '/event6.JPG',
    
  },
];

