import React from 'react';

import { projectsData } from '../data';

import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { SiGithub } from 'react-icons/si';
import { CgEnter } from 'react-icons/cg';

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
      <div className="w-full h-screen  bg-[#001021] flex flex-col justify-center items-center" id="carousel">
        <div className='relative flex items-center'>
          <BsFillArrowLeftCircleFill className='text-slate-50 cursor-pointer hover:text-slate-300 hover:scale-110 ease-in-out duration-300' onClick={slideLeft} size={40} />
          <div
            id='slider'
            className='w-[250px] h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide md:w-[1100px]'
          >
            {projectsData.map((item) => (
              <div key={item.id} className='w-[220px] h-[40]  bg-slate-50 rounded-2xl inline-block m-3 cursor-pointer hover:scale-105 ease-in-out duration-300 md:w-[339px] md:h-[390px] '>
                <img key={item.id} className='object-cover w-full rounded-t-2xl h-[57%]' src={item.img} alt={item.title}/>
                <div className='m-1 w-full p-3 flex flex-col justify-between'>
                  <div className="flex justify-between p-2 leading-normal">
                    <div className='hover:underline underline-offset-2'>
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className='flex justify-between'>
                        <h5 className="mr-1 text-xl font-bold tracking-tight text-gray-900">{item.title} </h5>
                        <CgEnter className="text-slate-700 text-lg"/>
                      </a>
                    </div>
                  </div>
                  <div className='flex flex-col'>
                    <div className='flex flex-wrap mb-5'>
                      <p className='m-2 text-md'>{item.skills}</p>
                    </div>
                    <button className='rounded-lg list-none flex justify-center bg-blue-500 hover:bg-blue-700 duration-700 text-slate-50'>
                      <a href={item.github} target="_blank" rel="noopener noreferrer" className='flex justify-between items-center'>
                        <p className='m-2 font-medium'>VER REPOSITÓRIO</p>
                        <SiGithub className="text-xl"/>
                      </a>
                    </button>
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
// <!--
//   This component uses @tailwindcss/line-clamp

//   yarn add @tailwindcss/line-clamp
//   npm install @tailwindcss/line-clamp

//   plugins: [require('@tailwindcss/line-clamp')]
// -->

// <article class="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
//   <img
//     alt="Office"
//     src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
//     class="h-56 w-full object-cover"
//   />

//   <div class="bg-white p-4 sm:p-6">
//     <time datetime="2022-10-10" class="block text-xs text-gray-500">
//       10th Oct 2022
//     </time>

//     <a href="#">
//       <h3 class="mt-0.5 text-lg text-gray-900">
//         How to position your furniture for positivity
//       </h3>
//     </a>

//     <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
//       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
//       dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
//       sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
//       voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
//       Molestias explicabo corporis voluptatem?
//     </p>
//   </div>
// </article>
