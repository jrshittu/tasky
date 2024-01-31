"use client"
import Image from 'next/image'
import { useEffect, useState } from'react'

const NavBar = ["All Tasks", "Pending", "Completed", "Settings"]

const SideBar = () => {
    

  return (
    <>
                    <div>
                        <div className="mt-6 mb-10 mx-2 flex flex-row items-center h-10 gap-5">
                            <div className='flex items-center'>
                                <Image src="/assets/icons/logo.svg" width={40} height={30} alt="logo" />
                                <p className="lg:text-xl font-semibold text-[14px] font-inter text-[#060f20]">
                                    TeachMateAI
                                </p>
                            </div>
                            
                        </div>
                        
                        <div className='mt-20 mx-4 flex gap-2 bg-[#FCA311] text-white items-center rounded-lg p-2'>
                            <div>
                                <Image src="/assets/icons/user.svg" alt="User" width={28} height={28} className="object-fit" />
                            </div>
                            <div>
                                <p className='logo-text font-inter font-bold'>
                                    John Dalton
                                </p>
                            </div>
                        </div>  
        
                        <div className='mt-[5em] mx-4 flex flex-col gap-2'>
                            {NavBar.map((item) => 
                                <button className='flex flex-row gap-2 items-center p-2 rounded-lg bg-[#A79DEB] hover:bg-[#705bf8] text-white font-bold'>
                                    {item}
                                </button>
                            )}
                        </div>
        
                    </div>
    </>
  )
}

export default SideBar
