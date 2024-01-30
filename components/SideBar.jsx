"use client"
import Image from 'next/image'

const NavBar = ["All Tasks", "Pending", "Completed", "Settings"]

const SideBar = () => {
  return (
    <div className="hidden md:flex w-1/5 h-screen bg-[#fff] rounded border-gray-400 border-2">
        <div>
            <div className="mt-6 mb-10 mx-2 flex flex-row items-center gap-2 h-10">
                <div>
                    <Image src="/assets/icons/logo.svg" width={60} height={30} alt="logo" />
                </div>
                <div>
                    <p className="text-xl font-semibold font-inter text-[#060f20]">
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
    </div>
  )
}

export default SideBar
