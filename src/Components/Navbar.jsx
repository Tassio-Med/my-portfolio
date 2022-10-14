import React,{ useState } from "react";
import { Link } from 'react-scroll'


import { HiMenu } from 'react-icons/hi';
import { GrClose } from 'react-icons/gr';

function Nav(){
  const [navbar, setNavbar] = useState(false);
  const handleClick = () => setNavbar(!navbar);

  // const handleClose = () => setNavbar(!navbar);

  return(
    <nav className="z-20 fixed flex w-screen h-28 bg-blue-900 drop-shadow-xl">

      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center">
          <h1 className="p-4 relative list-none font-bold text-5xl tm tm:hover"><Link href="#hero" className="tracking-wider">tm.</Link></h1>
          <ul className="hidden md:flex">
            <li className="p-2 flex justify-center rounded-3xl list-none transition- hover:bg-blue-700 duration-700">
              <Link to="home" smooth={true} duration={500}>Meus projetos</Link>
            </li>
            <li className="p-2 rounded-3xl list-none hover:bg-blue-700 duration-700">
              <Link to="sobre" smooth={true} offset={-200} duration={500}>Quem sou eu?</Link>
            </li>
            <li className="p-2 rounded-3xl list-none hover:bg-blue-700 duration-700">
              <Link to="trabalhos" smooth={true} offset={-100} duration={500}>Fale comigo</Link>
            </li>
          </ul>
        </div>

        <div className="md:hidden mr-4" onClick={handleClick}>
          {!navbar ? <HiMenu className="w-5" /> : <GrClose className="w-5" />}
        </div>
      </div>

      <ul className={!navbar ? "hidden" : "absolute bg-blue-900 w-full px-8"}>
        <li className="p-2 flex justify-center rounded-3xl list-none transition- hover:bg-blue-700 duration-700">
          <Link to="home" smooth={true} duration={500}>Meus projetos</Link>
        </li>
        <li className="p-2 rounded-3xl list-none hover:bg-blue-700 duration-700">
          <Link to="sobre" smooth={true} offset={-200} duration={500}>Quem sou eu?</Link>
        </li>
        <li className="p-2 rounded-3xl list-none hover:bg-blue-700 duration-700">
          <Link to="trabalhos" smooth={true} offset={-100} duration={500}>Fale comigo</Link>
        </li>
      </ul>
    </nav>

  )
}

export default Nav;