"use client";
import Contents from '@/components/Contents'
import SideBar from '@/components/SideBar';
import { useState, useEffect } from'react'
import Image from 'next/image'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false); 

    const handleToggle = () => setIsOpen((prevOpen) => !prevOpen);

    useEffect(() => {
        
      }, [isOpen]);

  return (
    <div className='flex space-between gap-8'>
        {
          isOpen ? (
            <div className="hidden md:flex w-1/5 h-screen bg-[#fff] rounded border-gray-400 border-2">
                <SideBar />
                <div>
                  <button
                      className='p-2'
                      onClick={handleToggle}
                  >
                      <Image src="/assets/icons/menu.png" width={30} height={30} alt="logo" />
                  </button>
                </div>
            </div>  
          ): (
            <button
                className='p-2 absolute right-4 top-6'
                onClick={handleToggle}
            >
                <Image src="/assets/icons/menu.png" width={30} height={30} alt="logo" />
            </button>
          )
        }
      <div className={isOpen ? 'md:w-full w-4/5 h-screen bg-[#fff] rounded border-gray-400 border-2 flex' : 'md:4/5 w-full h-screen bg-[#fff] rounded border-gray-400 border-2'}>
        <Contents />
        {
          isOpen ? (
            <div className="absolute top-4 right-4 md:hidden h-screen bg-[#fff] rounded border-gray-400 border-2">
                <SideBar />
              <button
                  className='p-2 absolute md:hidden  right-1 top-0'
                  onClick={handleToggle}
              >
                  <Image src="/assets/icons/menu.png" width={30} height={30} alt="logo" />
              </button>
            </div>
          ) : (
            <button
                className='p-2 absolute right-4 top-6'
                onClick={handleToggle}
            >
                <Image src="/assets/icons/menu.png" width={30} height={30} alt="logo" />
            </button>
          )
        }
      </div>
    </div>
  )
}

export default Home

