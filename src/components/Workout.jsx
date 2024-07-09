import React from 'react'
import SectionWrapper from './SectionWrapper'
import ExcerciseCard from './ExcerciseCard'

export default function Workout(props) {
    const {workout} = props
  return (
    <div className='my-10'>
      <SectionWrapper id={"workout"} header={'Custom Workout'} title={['Time', 'to', '', '', 'Grind']} />
      <div className='flex gap-4 flex-col items-center flex-wrap justify-center md:flex-row'>
        {workout.map((excercise, index)=>{
          return (
            <ExcerciseCard excercise={excercise} key={index} i={index}/>
          )
        })}
      </div>
    </div>
  )
}
