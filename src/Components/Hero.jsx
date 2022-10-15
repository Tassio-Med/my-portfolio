import React from 'react';
import Hand from '../Images/3dhand.png'

function Hero(){
  return(
    <div className="w-full h-screen bg-[#001021] flex flex-col justify-between" id="hero">
      <div className="grid md:grid-cols-2 max-w-[77.5rem] m-auto">
        <div className='flex flex-col justify-center items-center md:items-start w-full px-2 py-24'>
          <h1 className='text-center text-[#5fadfc] text-6xl mb-10 font-bold md:text-start md:text-7xl'>Bem-vindo ao meu Portfólio</h1>
          <p className='text-center text-lg text-slate-50 md:text-start md:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis libero totam quas quasi cum, ut voluptates excepturi esse. Ut eum, minima similique cumque ea alias odio cupiditate dolorum illum! Iste.</p>
        </div>
        <div className="flex justify-center items-center relative z-10 bottom-44 md:z-10 md:bottom-0">
          <img src={Hand} alt="hand-shake" className="w-[600px] mt-10 md:w-[800px]"/>
        </div>
      </div>
    </div>
  )
}
export default Hero;