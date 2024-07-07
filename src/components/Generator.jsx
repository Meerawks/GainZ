import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/excercises'

    function Header(props){
        const {index, title, description} = props
        return (
            <div className='flex flex-col gap-4'>
                <div className='flex items-center justify-center gap-4'>
                <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-rose-400'>{index}</p>  
                <h4 className='text-xl sm:text-xl md:text-2xl lg:text-3xl'>{title}</h4>
                </div>
                <p className='mx-auto text-base sm:text-base md:text-lg lg:text-xl'>{description}</p>
            </div>
        )
    }

export default function Generator() {
    const [showModal, setShowModal]=useState(false);
    const [split, setSplit]=useState('individual')
    const [muscles, setMuscles] = useState([])
    const [goals, setGoals] = useState('strength_power')

    function dropdown(){
       setShowModal(!showModal);
    }

  return (
    <div>
    <SectionWrapper header={'Generate your custom workout'} title={['It\'s', 'time', 'to', 'get', 'HUGE']} />
    <Header index={'01'} title={'Pick your poison'} description={"Select the workout you wish to enjoy"} />
    <div className='flex gap-10 justify-center mt-5 flex-wrap'>
    {Object.keys(WORKOUTS).map((type, typeIndex )=>{
        return(
            <button key={typeIndex} onClick={()=>{
                setSplit(type)
            }} className='px-5 py-3 rounded-md mt-5 boxShadow border-2 border-rose-700 capitalize'>
               {type.replaceAll('_'," ")}
                </button>
        )
    })}
    </div>
    <div className='mt-20'>
    <Header index={'02'} title={'Lock on targets'} description={"Select the muscles to annihilate"}/>
             <div className='border-2 border-rose-700 p-2 rounded-lg mx-20 sm:mx-20 md:mx-70 lg:mx-[35%] flex justify-center items-center relative mt-5 flex flex-col'>
                    <p>Select muscle groups</p>
                    <i className="fa-solid fa-caret-down absolute right-3" onClick={dropdown}></i>
                    {showModal &&  (
                    <div>Modal </div>
                 )}
                 </div>
                 
         </div>
         <div className='mt-20'>
    <Header index={'03'} title={'Become Juggernaut'} description={"Select your ultimate objective."}/>
    <div className='flex gap-10 justify-center mt-5 flex-wrap'>
            {Object.keys(SCHEMES).map((scheme, schemeIndex )=>{
        return(
            <button key={schemeIndex} className='px-5 py-3 rounded-md mt-5 boxShadow border-2 border-rose-700 capitalize'>
               {scheme.replaceAll('_'," ")}
                </button>
              )
             })}
                </div>
                 
         </div>
    </div>
    
  )
}
