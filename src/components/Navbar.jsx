import React , {useState} from 'react'
import { RxHamburgerMenu } from "react-icons/rx";


const Navbar = () => {
    const [showmblmenu , setShowmblmenu] = useState(false);
    const toggleMobileMenu = () => {
        setShowmblmenu(!showmblmenu)
    }

  return (
    <>
        <div className="navbar shadow-2xl flex bg-[#19376D] text-white h-[8vh] md:h-[12vh] justify-around items-center sticky top-0">
            <div className="logo text-xl md:text-3xl font-semibold cursor-pointer">Portfolio</div>
            <ul className="nav-item hidden md:flex space-x-8">
                <button className='text-xl'>About</button>
                <button className='text-xl'>Experience</button>
                <button className='text-xl'>Projects</button>
                <button className='text-xl'>Contact</button>
            </ul>
            <div className="hamburger block md:hidden">
                <RxHamburgerMenu onClick={toggleMobileMenu} className='text-white text-3xl font-bold'/>
            </div> 
        </div>
        <ul id='mblmenu' className={`mblmenu md:hidden ${showmblmenu === false ? 'hidden' : 'flex'}  h-[30vh] w-[50vw] custom-gradient  flex-col items-center justify-center space-y-8 absolute top-[8vh] right-[5vw]`}>
                <button className='text-xl text-white'>About</button>
                <button className='text-xl text-white'>Experience</button>
                <button className='text-xl text-white'>Projects</button>
                <button className='text-xl text-white'>Contact</button>
        </ul>
    </>
  )
}

export default Navbar