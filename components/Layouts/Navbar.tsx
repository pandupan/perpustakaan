import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
    <div className='flex flex-col bg-[#ffff] w-full h-max-[200px]'>
      <div className='p-2 flex flex-row border-b py-4 px-22'>
        <div>
          logo
        </div>
      </div>
      <div className='gap-4 flex flex-row text-[#1a1668] px-20 py-4'>
      <Link href='/' className=' font-bold rounded-xl p-2 hover:text-[#6DA4AA]'>
        Home
      </Link>
      <Link href='/daftarbuku' className=' font-bold rounded-xl p-2 hover:text-[#6DA4AA]'>
        Katalog
      </Link>
      <Link href='/profile' className=' font-bold rounded-xl p-2 hover:text-[#6DA4AA]'>
        Profile
      </Link>
      </div>
    </div>
    </>
  )
}

export default Navbar
