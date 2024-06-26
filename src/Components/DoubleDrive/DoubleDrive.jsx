import React from 'react';
import img1 from '../../assets/Rectangle 3124 (1).svg';
import img2 from '../../assets/Rectangle 3124.svg';
import img3 from '../../assets/Rectangle 3124 (3).svg';
import img4 from '../../assets/Rectangle 3124 (4).svg';
import img5 from '../../assets/Rectangle 3124 (5).svg';
import img6 from '../../assets/Rectangle 3124 (6).svg';
import img7 from '../../assets/Rectangle 3124 (8).svg';
import img8 from '../../assets/Rectangle 3124 (7).svg';
import img9 from '../../assets/Rectangle 3124 (9).svg';
import img10 from '../../assets/Rectangle 3124 (11).svg';
import img11 from '../../assets/Rectangle 3124 (12).svg';
import img12 from '../../assets/Rectangle 3124 (13).svg';
import img13 from '../../assets/Rectangle 3124 (14).svg';
import icon from '../../assets/location-04.svg';
import activity from '../../assets/football.svg';

export default function DoubleDrive() {
  const images = [
    img1, img2, img3, img4, img5, img6, img7,
    img8, img9, img10, img11, img12, img13
  ];

  const getImageClass = (index) => {
    if (index === 0 || index === 6 || index === 12) {
      return 'hidden 2xl:block'; // Hide by default, show on medium and larger screens
    }
    return ''; // Show on all screens
  };
  const getImages = (index) => {
    if (index === 0 || index === 6 ) {
      return 'right-0'; // Hide by default, show on medium and larger screens
    }
    return ''; // Show on all screens
  };

  return (
    <div className='mt-20   divAfter'>
      <h2 className=' m-auto max-w-3xl  text-4xl xl:text-5xl  text-center font-medium'>
        Double the Drive, Double the Dive, Duballup Now!
      </h2>
      <p className=' font-medium text-[#AFAFAF] text-center my-3 break-words'>Connect, Collaborate, and Conquer Your Fitness Goals Together!</p>
      <div className=' py-10 flex  flex-col md:flex-row flex-wrap  gap-7 2xl:gap-10 items-center  justify-center 2xl:justify-between'>
      {images.map((img, index) => (
        <div key={index} className={`relative ${getImageClass(index)}  overflow-hidden `}>
          <div className={`absolute   mx-[13.5px] bottom-0 ${getImages(index)} `}>
            <h2 className='text-white font-bold' >James Faith</h2>
            <div className='flex text-xs font-medium text-white'>
              <p className='border-r-2 border-[#AFAFAF] flex items-center pe-1'>
                <img src={icon} alt="icon" />3 miles from you
              </p>
              <p className='border-[#AFAFAF] flex items-center ps-1'>
                <img src={activity} alt="activity" />Football, etc.
              </p>
            </div>
            <div className='text-center'>
              <button className=' bg-[#FFCD29] my-4 px-[70px] text-center py-2 rounded-full font-semibold text-sm'>
                Dubbalup
              </button>
            </div>
          </div>
          <div className=''>
            <img src={img} alt={`Image ${index + 1}`}   />
          </div>
        </div>
      ))}
      </div>
    </div>
  );
}
