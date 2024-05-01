import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const FooterData = [
  {
    header: "Company",
    subheader: [
      { name: "Global Addresses", link: "/" },
      { name: "Management", link: "/" },
      { name: "History", link: "/" },
      { name: "Our Impact", link: "/" },
      { name: "Contact Us", link: "/" },
    ]
  },
  {
    header: "Useful Links",
    subheader: [
      { name: "Ask Help (FAQs)", link: "/" },
      { name: "Sign up for news", link: "/" },
      { name: "Search for jobs", link: "/" },
      { name: "Speak up", link: "/" },
      { name: "Blog", link: "/" },
    ]
  },
  {
    header: "Download",
    subheader: [
      { name: "Annual Review (pdf, 15Mb)", link: "/" },
      { name: "CSV and Sustainability Report (pdf, 15Mb)", link: "/" },
      { name: "Responsible Sourcing Standard (pdf, 2Mb)", link: "/" },

    ]
  },
  {
    header: "Investor",
    subheader: [
      { name: "Corporate governance", link: "/" },
      { name: "Shares, ADRs, & Bonds", link: "/" },
      { name: "Publication", link: "/" },

    ]
  }
]



const Footer = () => {
  return (
    <section className='flex flex-col pt-16 pb-6 text-white bg-primary responsive-x-padding gap-y-10'>

      <div className='flex flex-row flex-wrap items-start justify-between pb-10 gap-x-2 gap-y-10'>
        <p className='text-xl font-bold'>Nutrient</p>

        {FooterData.map((footer, index) => (
          <div key={index} className='flex flex-col flex-wrap gap-y-5'>
            <p className='font-medium'>{footer.header}</p>
            <div className='flex flex-col gap-y-3 text-slate-300 '>
              {footer.subheader.map((x, index) => (
                <div key={index} className='hover:text-slate-50'>
                  <Link href={x.link}>{x.name}</Link>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className='border-white border-opacity-10 border-y-[1px]'></div>
      <div className='flex flex-row items-center justify-between text-sm'>
        <p>&copy; Nutrient 2012. All right reserved</p>
        <div className='flex flex-row items-center gap-x-3'>
          <Link href={'/'}>FB</Link>
          <Link href={'/'}>Twitters</Link>
          <Link href={'/'}>LinkedIin</Link>
        </div>
        <div className='flex flex-row items-center gap-x-2'>
          <Link href={'/'} className='px-2 py-1'>Fraud Policy</Link>
          <Link href={'/'} className='px-2 py-1'>Privacy Policy</Link>
          <Link href='https://github.com/akhmadali7/Nutrient' target='_blank' className='flex flex-row items-center px-2 py-1 rounded-md gap-x-1 bg-primary hover:invert active:bg-slate-100'>
            <p>Github </p>
            <Image src='/icons/atr_white.svg' alt='stat' width={12} height={12} />
          </Link>
          <Link href='https://id.pinterest.com/pin/750060512968272440/' target='_blank' className='flex flex-row items-center px-2 py-1 rounded-md bg-primary gap-x-1 hover:invert active:bg-slate-100'>
            <p>Design Reference</p>
            <Image src='/icons/atr_white.svg' alt='stat' width={12} height={12} />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Footer