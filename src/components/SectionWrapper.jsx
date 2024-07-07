import React from 'react'

export default function SectionWrapper(props) {
    const  {header, title} = props
  return (
    <section className='min-h-3.5 flex flex-col gap-10'>
        <div className='bg-slate-950 py-10 flex flex-col gap-4 justify-center items-center'>
            <p className='text-lg md:text-lg sm:text-sm'>{header}</p> 
            <h2 className='text-xl sm:text-2xl md:text-3xl lg:text-5xl'>{title[0]} {title[1]} {title[2]} {title[3]} <span className='text-rose-700 font-extrabold'>{title[4]}</span></h2>
        </div>
        <div className='max-w-[800px] w-full flex flex-col mx-auto gap-10'></div>
    </section>
  )
}
