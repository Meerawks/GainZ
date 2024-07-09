import React from 'react'
import MainButton from './MainButton'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-2 items-center justify-center'>
        <img src='/weightlift.svg'  className='bgimage'/>
        <div>
        <p className='text-lg text-center'>GRIND FOR THE</p>
        <h1 className='font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl mt-0 text-rose-700 textShadow'>GAINZ</h1>
        </div>
        <p className='mt-10 font-light w-8/12 text-center sm:text-sm md:text-lg lg:text-lg'>Getting fit isn't just about exercise. It's about <span className='text-rose-700 font-extrabold'> feeling great </span> , <span className='text-rose-700 font-extrabold'>having fun</span>,
             and <span className='text-rose-700 font-extrabold'>challenging yourself</span>. At GainZ, we foster a supportive community that 
             motivates and inspires you along the way. We offer a variety of programs
             to keep your workouts exciting. Remember, fitness is a journey, not a destination. Let us help you make it enjoyable and rewarding! </p>
         <MainButton func={()=>{
          window.location.href='#generate'
         }} text={'Apply'} id={'apply'}/>
    </div>
  )
}
