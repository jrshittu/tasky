import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const NavBar = () => {
  return (
    <header className='w-full'>
      <nav className='nav'>
        <Link href="/" className="flex items-center gap-1">
            <Image 
                src="/assets/icons/logo.svg"
                width={65}
                height={30}
                alt='logo'
            />
            <p className='text-2xl font-semibold font-inter text-[#14213D]'>
                TeachMateAI
            </p>
        </Link>

        <div className='flex items-center gap-5'>
            <Image 
                src="/assets/icons/user.svg"
                alt="User"
                width={28}
                height={28}
                className='object-fit'
            />
        </div>
      </nav>
    </header>
  )
}

export default NavBar