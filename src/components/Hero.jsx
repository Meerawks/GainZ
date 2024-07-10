import React from 'react'
import MainButton from './MainButton'

export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-2 items-center justify-center relative'>
       <div className='h-20 absolute bg-slate-950 top-0 left-0 w-screen flex items-center '>
        <a href='https://github.com/Meerawks' target='_blank'><p className='mx-5 text-xl hover-underline-animation'>Github</p></a>
        <a href='https://www.linkedin.com/in/meerawks/' target='_blank'><p className='mx-5 text-xl hover-underline-animation'>LinkedIn</p></a>
      </div>
        <img src='/weightlift.svg'  className='bgimage'/>
        <div>
        
        <p className='text-md lg:text-lg text-center'>GRIND FOR THE</p>
        <h1 className='font-bold text-6xl sm:text-6xl md:text-7xl lg:text-9xl mt-0 text-rose-700 textShadow '>GAINZ</h1>
        </div>
        <p className='hidden md:inline lg:inline mt-10 font-light w-8/12 text-center sm:text-sm md:text-lg lg:text-lg'>
        Ditch the Routine, Unleash the Results: Personalized Workouts at Your Fingertips.
        <span className='text-rose-500'>  Struggling to find the perfect workout plan?</span> Dreading another gym session full of the same old exercises? We get it. That's why we created GainZ, your one-stop shop for personalized workouts that keep you <span className='text-rose-500'>engaged</span> and<span className='text-rose-500'> on track.</span>  </p>
        <p className='inline md:hidden mt-5 font-light w-8/12 text-center'> Personalized Workouts that keep you <span className='text-rose-500'>engaged</span> and <span className='text-rose-500'>on track, </span>now at Your Fingertips.</p>
         <MainButton func={()=>{
          window.location.href='#generate'
         }} text={'Get Started'} id={'apply'}/>
    </div>
  )
}
