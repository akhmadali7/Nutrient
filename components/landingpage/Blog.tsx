'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
    <section className='py-32 responsive-x-padding'>
      <p className='w-4/12 text-sm font-medium'>04 - Blog</p>
      <h4 className='w-7/12 py-8 text-3xl font-semibold'>Latest Article</h4>
      <div className='flex flex-row gap-x-8'>
        {Array.from({ length: 2 }, (_, index) => (
          <div key={index}>
            <div className='w-full hover:bg-slate-100'>
              <div className='w-full h-64 bg-primary'></div>
              <div className='flex flex-col justify-between px-20 pt-6 pb-10'>
                <div>
                  <p>Agriculture</p>
                  <p className='text-lg font-medium'>USDA says it again: 2021 was a record year for farm exports</p>
                  <p>2021`s exports beat the previous by $22.5 billion, says Agriculture Secretary, Tom Visack.</p>
                </div>
                <div>
                  <Link href={'/'} className='flex items-center pt-6 pr-3 w-max gap-x-2'>Learn more <span><Image src='/icons/arrow-top-right.svg' width={20} height={20} alt='' /></span></Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Blog