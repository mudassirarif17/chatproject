import React , {useState} from 'react'
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {
    const [showmblmenu , setShowmblmenu] = useState(false);
    const toggleMobileMenu = () => {
        setShowmblmenu(!showmblmenu)
    }

  return (
    <>
        <div className="navbar flex bg-[#19376D] text-white h-[8vh] md:h-[12vh] justify-around items-center">
            <div className="logo text-xl md:text-3xl font-semibold cursor-pointer">Portfolio</div>
            <ul className="nav-item hidden md:flex space-x-8">
                <li className='cursor-pointer text-xl'>About</li>
                <li className='cursor-pointer text-xl'>Experience</li>
                <li className='cursor-pointer text-xl'>Projects</li>
                <li className='cursor-pointer text-xl'>Contact</li>
            </ul>
            <div className="hamburger block md:hidden">
                <RxHamburgerMenu onClick={toggleMobileMenu} className='text-white text-3xl font-bold'/>
            </div> 
        </div>
        <ul id='mblmenu' className={`mblmenu md:hidden ${showmblmenu === false ? 'hidden' : 'flex'}  h-[30vh] w-[50vw] custom-gradient  flex-col items-center justify-center space-y-8 absolute top-[8vh] right-[5vw]`}>
                <li className='cursor-pointer text-xl text-white'>About</li>
                <li className='cursor-pointer text-xl text-white'>Experience</li>
                <li className='cursor-pointer text-xl text-white'>Projects</li>
                <li className='cursor-pointer text-xl text-white'>Contact</li>
        </ul>
    </>
  )
}

export default Navbar