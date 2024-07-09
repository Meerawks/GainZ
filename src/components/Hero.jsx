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
        <p className='mt-10 font-light w-8/12 text-center sm:text-sm md:text-lg lg:text-lg'>
        Ditch the Routine, Unleash the Results: Personalized Workouts at Your Fingertips.
        <span className='text-rose-500'>  Struggling to find the perfect workout plan?</span> Dreading another gym session full of the same old exercises? We get it. That's why we created GainZ, your one-stop shop for personalized workouts that keep you <span className='text-rose-500'>engaged</span> and<span className='text-rose-500'>on track.</span>  </p>
         <MainButton func={()=>{
          window.location.href='#generate'
         }} text={'Apply'} id={'apply'}/>
    </div>
  )
}
