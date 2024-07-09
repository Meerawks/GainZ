import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utils/excercises'
import MainButton from './MainButton'

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

export default function Generator( props) {

    const {split, setSplit, muscles, setMuscles, goals, setGoals, updateWorkout} = props
    const [showModal, setShowModal]=useState(false);
    

    function dropdown(){
       setShowModal(!showModal);
    }
    function updateMuscles(muscleGroup){
        if(muscles.includes(muscleGroup)){
           setMuscles( muscles.filter(val=> val!=muscleGroup))
            return
        }
        if(muscles.length === 3){
            return
        }

        if(split!=='individual'){
            setMuscles([muscleGroup])
            setShowModal(false)
            return
        }
     
            setMuscles([...muscles,muscleGroup])  
            console.log(muscles)

        if(muscles.length===2){
            setShowModal(false)
        }
    }

  return (
    <div className='flex flex-col gap-10'>
    <SectionWrapper header={'Generate your custom workout'} title={['It\'s', 'time', 'to', 'get', 'HUGE']} />
    <Header index={'01'} title={'Pick your poison'} description={"Select the workout you wish to enjoy"} />
    <div className='grid grid-cols-2 w-4/5 lg:grid-cols-4 lg:w-3/6 mx-auto gap-4'>
    {Object.keys(WORKOUTS).map((type, typeIndex )=>{
        return(
            <button key={typeIndex} onClick={()=>{
                setSplit(type)
                setMuscles([])
                console.log(split, type)
            }}  className=' px-5 py-3 rounded-md mt-5 boxShadow border-2 border-rose-700 capitalize' >
               <p className={(type===split ? 'text-rose-400' : 'text-white' )}>{type.replaceAll('_'," ")}</p>
                </button>
        )
    })}
    </div>
    <div className='mt-20'>
    <Header index={'02'} title={'Lock on targets'} description={"Select the muscles to annihilate"}/>
             <div className='border-2 border-rose-700 p-2 rounded-lg mx-20 sm:mx-20 md:mx-70 lg:mx-[35%] flex justify-center items-center relative mt-5 flex-col'>
                    <p className='capitalize cursor-pointer' onClick={dropdown}>{muscles.length===0 ? 'Select Muscle Groups' : muscles.join(', ')}</p>
                    <i className="fa-solid fa-caret-down absolute right-3 top-2 cursor-pointer" onClick={dropdown}></i>
                    {showModal &&  (
                    <div className='flex flex-col p-2 gap-2 w-full'>
                        {(split==='individual' ? WORKOUTS[split] : Object.keys(WORKOUTS[split])).map((muscleGroup, muscleGroupIndex)=>{
                            return (
                                <button key={muscleGroupIndex} onClick={()=>{
                                    updateMuscles(muscleGroup)
                                
                                }} className='hover:text-rose-400 duration-200 w-full'>
                                    <p className={muscles.includes(muscleGroup) ? 'capitalize text-red-400' : 'capitalize'}>{muscleGroup}</p>
                                </button>    
                            )
                        }) }
                        </div>
                 )}
                 </div>
                 
         </div>
         <div className='mt-20'>
    <Header index={'03'} title={'Become Juggernaut'} description={"Select your ultimate objective."}/>
    <div className='grid grid-cols-1 w-4/5 lg:grid-cols-3 lg:w-3/6 mx-auto gap-4'>
            {Object.keys(SCHEMES).map((scheme, schemeIndex )=>{
        return(
            <button key={schemeIndex} onClick={()=>{
                setGoals(scheme)
                console.log(goals, scheme)
            }}  className='px-5 py-3 rounded-md mt-5 boxShadow border-2 border-rose-700 capitalize'>
                <p className={(scheme===goals ? 'text-rose-400' : 'text-white' )}>{scheme.replaceAll('_'," ")}</p>
                </button>
              )
             })}
                </div>
                 
         </div>
        <MainButton text={'Generate Workout'}  func={updateWorkout}/>      
    </div>
    
  )
}
