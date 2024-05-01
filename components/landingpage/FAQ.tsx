import React from 'react'

const FAQ = () => {
  return (
    <section className='py-20 responsive-x-padding bg-slate-50'>
      <div className=''>
        <p className='w-4/12 text-sm font-medium'>03 - FAQs</p>
        <h4 className='w-7/12 py-8 text-3xl font-semibold'>Still have questions? You will know us better below here.</h4>
        <div className='grid grid-cols-2 grid-rows-3 gap-5'>
          {Array.from({ length: 6 }, (_, index) => (
            <div key={index} className='border-[1px] border-solid rounded-lg border-slate-200'>
              <div className='flex flex-row items-center justify-between px-3 py-1 gap-x-2'>
                <div className='flex flex-row items-center p-3 gap-x-2'>
                  <p>#</p>
                  <p className='font-medium'>What is actually Nutrient do?</p>
                </div>
                <p>&gt;</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ