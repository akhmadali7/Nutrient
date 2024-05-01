import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const ServicesData = [
  {
    subtitle: "Sustainable Cocoa",
    title: "Creating lasting benefits for cocoa farmers.",
    desc: "Our ambition is to sustainably provide high quality cocoa and chocolate throughout the world. We are creating lasting benefits for cocoa farmers and their communities.",
    link: "/"
  },
  {
    subtitle: "Sustainable Cotton",
    title: "Improve sustainable cotton production.",
    desc: "Our goal is to enhance the environmental and socio-economic methods used in cotton farming, ensuring that production is both sustainable and beneficial for farmers.",
    link: "/"
  },
  {
    subtitle: "Sustainable Palm Oil",
    title: "Building transparent & traceable supply chain.",
    desc: "We are committed to fostering a transparent and traceable palm oil supply chain, prioritizing environmental sustainability and ethical practices to support producers and ecosystems.",
    link: "/"
  },
  {
    subtitle: "Sustainable Seaweed",
    title: "Promoting sustainable seaweed farming.",
    desc: "We aim to advance sustainable seaweed farming practices that protect marine biodiversity while supporting the livelihoods of coastal communities.",
    link: "/"
  }

]
const About_2 = () => {
  return (
    <section className='py-10'>

      <div className='flex flex-row items-start py-20 responsive-x-padding'>
        <p className='w-4/12 text-sm font-medium'>02 - Services</p>
        <div className='flex flex-col w-full gap-y-10'>
          <h4 className='text-3xl font-semibold'>We offer our solution as as service. <br />You don`t buy or maintain any hardware or software.</h4>
          <p>It`s noisy world out there. You need someone who can pierce through the confusion and identify new signals. As one of the largest participants in global supply chains.</p>
        </div>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:flex lg:flex-row bg-slate-50 '>
        {ServicesData.map((x, index) => (
          <div key={index} className='rounded-sm lg:w-1/4 hover:bg-white'>
            <div className='flex flex-col justify-around p-6 xl:p-16 gap-y-10  h-[calc(100%+32px)]' >
              <div>
                <p className='text-sm'>{x.subtitle}</p>
                <p className='py-3 text-xl font-medium'>{x.title}</p>
                <p >{x.desc}</p>
              </div>
              <div>
                <Link href={x.link} className='flex items-center pb-6 gap-x-2'>Learn more <span><Image src='/icons/arrow-top-right.svg' width={20} height={20} alt='' /></span></Link>
              </div>
            </div>
          </div>
        ))}
      </div>


      <div className='flex flex-col items-center justify-center py-32 responsive-x-padding'>
        <h4 className='text-3xl font-semibold text-center'>We work with amazing peoples from  <br />these companies</h4>
        <div className='grid grid-cols-4 grid-rows-2 pt-10 gap-y-16 gap-x-32'>
          <div className='text-2xl font-semibold text-slate-400'>brandLogo</div>
          <div className='text-2xl font-semibold text-slate-400'>brandLogo</div>
          <div className='text-2xl font-semibold text-slate-400'>brandLogo</div>
          <div className='text-2xl font-semibold text-slate-400'>brandLogo</div>
          <div className='text-2xl font-semibold text-slate-400'>brandLogo</div>
          <div className='text-2xl font-semibold text-slate-400'>brandLogo</div>
          <div className='text-2xl font-semibold text-slate-400'>brandLogo</div>
          <div className='text-2xl font-semibold text-slate-400'>brandLogo</div>
        </div>
      </div>

    </section>
  )
}

export default About_2