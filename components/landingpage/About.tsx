import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutData = {

  DataNumber: [
    { value: "20+", desc: "We`ll managed and operated areas around the world" },
    { value: "90K+", desc: "We`ll managed and operated areas around the world" },
  ]
}
const About = () => {
  return (
    <section className='py-16 responsive-x-padding'>
      <p className='text-sm font-medium'>01 - About us</p>
      <h4 className='w-7/12 py-8 text-3xl font-semibold'>We connect innovative opportunities to build aggriculture sustainability and your business</h4>

      <div className='flex flex-col pt-10 gap-y-10'>

        <div className='flex flex-row items-start gap-x-10'>
          <div className='flex flex-row w-1/2 gap-x-6'>
            {AboutData.DataNumber.map((data, index) => (
              <div key={index} className='flex flex-col gap-y-3'>
                <p className='text-3xl font-semibold'>{data.value}</p>
                <p className=''>{data.desc}</p>
              </div>
            ))}
          </div>
          <div className='w-1/2'>
            <p>Nutrient is commited Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae ipsam mollitia quasi neque necessitatibus exercitationem maiores, perspiciatis quod dignissimos vitae? Distinctio eum quas libero laudantium non hic minus illo! Magni ab quod, nulla facilis provident voluptate fugit fuga nam nostrum.</p>
            <p className='pt-6'>In the fiscal year Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, voluptates quis. Nostrum ducimus, quae vero ab eius voluptates mollitia alias nemo molestiae exercitationem. Omnis natus at iste quisquam tempore. Impedit.{AboutData.DataNumber[0].value}</p>
          </div>
        </div>

        <div className='flex flex-row items-end gap-x-10'>
          <div className='flex flex-row w-1/2 gap-x-7'>
            <Link href={'/'} className='flex flex-row items-center gap-x-1'>Sustainability Priorities <span><Image src='/icons/arrow-top-right.svg' width={15} height={15} alt='' /></span></Link>
            <Link href={'/'} className='flex flex-row items-center gap-x-1'>Sustainability Supply Chains <span><Image src='/icons/arrow-top-right.svg' width={15} height={15} alt='' /></span></Link>

          </div>

          <div className='w-1/2'>
            <p>We are committed to feeding the Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae iusto distinctio laudantium eum explicabo! Numquam illo facilis reprehenderit impedit necessitatibus ea odit velit eligendi expedita dolore recusandae sed, cupiditate veniam.</p>
          </div>
        </div>
      </div>
      <div className='flex flex-row pt-20 gap-x-6'>
        <div className='flex items-center justify-center w-3/12 h-80 bg-slate-200'>Image 1</div>
        <div className='flex items-center justify-center w-full h-80 bg-slate-300'>Image 2</div>
      </div>
    </section>
  )
}

export default About