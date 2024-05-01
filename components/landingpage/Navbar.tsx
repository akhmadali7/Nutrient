import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const Navlinks = [
  { name: "Home", link: "/" },
  { name: "About Us ", link: "/" },
  { name: "Services", link: "/" },
  { name: "FAQ", link: "/" },
  { name: "Blog", link: "/" },
]
const Navbar = () => {
  return (
    <nav className='relative text-white bg-primary'>
      <div className='flex flex-row items-center justify-between py-3 bg-transparent responsive-x-padding'>
        <div className='flex flex-row items-center gap-x-5'>
          <Link href={'/'} className='text-xl font-bold'>Nutrient</Link>
          <div className='px-4 py-2 rounded-lg bg-rose-500'>
            <p className=' text-[11px] font-extrabold text-white text-center'>Under  Construction</p>
          </div>
        </div>

        <ul className='flex-row hidden md:flex gap-x-2'>
          {Navlinks.map((link, index) => (
            <Link key={index} href={'/'} className='px-4 py-1 rounded-md hover:text-black hover:bg-slate-100'><li>{link.name}</li></Link>
          ))}
        </ul>
        <div className='flex flex-row items-center gap-x-2'>
          <Link href={'/'} className='flex flex-row items-center px-4 py-1 rounded-md gap-x-1 hover:bg-slate-100 hover:text-black'>Enterprise Solution <span><Image src='/icons/arrow-top-right.svg' width={15} height={15} alt='' /></span></Link>
          {/* <Image src={ } alt='' /> */}
          <p className='flex flex-row md:hidden'>XX</p>
        </div>
      </div>
    </nav>
  )
}

export default Navbar