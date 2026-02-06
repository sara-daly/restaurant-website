import React, { useState } from 'react' 
import logo from '../assets/logo.png'
import { IoMenu, IoClose } from "react-icons/io5"; 
function NavBar() {
  const [isOpen, setIsOpen] = useState(false); 

  return (
    <>
      <div className='bg-light-blue relative'>
        <div className="container mx-auto py-2 px-4">
          <div className='flex justify-between items-center'>
            
           
            <div>
              <a href='#'>
                <img src={logo} alt='logo' className='w-34' />
              </a>
            </div>

            
            <div className='hidden lg:flex justify-between items-center gap-20'>
              <a href='#home' className='text-dark text-[20px] hover:text-primary transition'>Home</a>
              <a href='#about' className='text-dark text-[20px] hover:text-primary transition'>About</a>
              <a href='#menu' className='text-dark text-[20px] hover:text-primary transition'>Menu</a>
              <a href='#contact' className='text-dark text-[20px] hover:text-primary transition'>Contact</a>
            </div>

           
            <div className='lg:hidden'>
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <IoClose className='text-3xl' /> : <IoMenu className='text-3xl' />}
              </button>
            </div>
          </div>
        </div>

                        
        {isOpen && (
          <div className='lg:hidden bg-white w-full z-50 py-4 flex flex-col items-center gap-4'>
            <a href='#home' onClick={() => setIsOpen(false)} className='text-dark text-[18px] w-full text-center py-2 hover:bg-light-blue'>Home</a>
            <a href='#about' onClick={() => setIsOpen(false)} className='text-dark text-[18px] w-full text-center py-2 hover:bg-light-blue'>About</a>
            <a href='#menu' onClick={() => setIsOpen(false)} className='text-dark text-[18px] w-full text-center py-2 hover:bg-light-blue'>Menu</a>
            <a href='#contact' onClick={() => setIsOpen(false)} className='text-dark text-[18px] w-full text-center py-2 hover:bg-light-blue'>Contact</a>
          </div>
        )}
      </div>
    </>
  )
}

export default NavBar