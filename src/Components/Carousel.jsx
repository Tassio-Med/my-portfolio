import React from 'react';

import { projectsData } from '../data';

import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { SiGithub } from 'react-icons/si'

function Carousel() {
  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 480;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 480;
  };

  return (
    <div className='flex h-screen justify-center items-center'>
      <div className="w-full h-screen bg-[#001021] flex flex-col justify-center items-center" id="carousel">
        <div className='relative flex items-center'>
          <BsFillArrowLeftCircleFill className='text-slate-50 cursor-pointer hover:text-slate-300 hover:scale-110 ease-in-out duration-300' onClick={slideLeft} size={40} />
          <div
            id='slider'
            className='w-[250px] h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide md:w-[1100px]'
          >
            {projectsData.map((item) => (
              <div key={item.id} className='w-[220px] h-[40] bg-slate-50 rounded-2xl inline-block m-3 cursor-pointer hover:scale-105 ease-in-out duration-300 md:w-[339px] md:h-[390px]'>
                <img key={item.id} className='object-cover w-full rounded-t-2xl h-[57%]' src={item.img} alt={item.title}/>
                <div className="flex justify-between h-28 p-4 leading-normal">
                  <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900">{item.title}</h5>
                  <div className="hover:scale-105 ease-in-out duration-300">
                    <SiGithub className="text-3xl"/>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <BsFillArrowRightCircleFill className='text-slate-50 cursor-pointer hover:text-slate-300 hover:scale-110 ease-in-out duration-300' onClick={slideRight} size={40} />
        </div>
      </div>
    </div>
  );
}

export default Carousel;