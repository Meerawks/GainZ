import React from 'react'

export default function ExcerciseCard(props) {
    const {excercise , i} = props
  return (
    <div className='flex flex-col m-2 p-3 self-center lg:self-stretch md:self-stretch rounded-md bg-slate-950 md:w-2/6 border-2 border-slate-800 w-4/6 gap-2 justify-between' >
        <div className='flex gap-10 justify-between'> 
            <h4 className='text-4xl lg:text-6xl font-bold text-rose-300'>
                0{i+1}
            </h4>
            <h2 className='capitalize text-xl underl'>{excercise.name.replaceAll("_", " ")}</h2>
            <p className='capitalize hidden lg:inline text-slate-600'>{excercise.type}</p>
        </div>
        <div className='flex gap-4'>
            <h3 className='text-slate-600'>Muscle Groups : </h3>
            <p className='capitalize'>{excercise.muscles.join(" & ")}</p>
        </div>
        <div>
            <p className='text-justify'>
                {
                    excercise.description.split('___').map((val)=>{
                        return(
                            <div>
                                {val}
                            </div>
                        )
                    })
                }
            </p>
        </div>
        <div className='flex justify-around mt-2'>
            {['reps','rest','tempo'].map(info =>{
                return (
                    <div key={info} className='border-2 border-slate-900 rounded-md p-2 px-5 sm:px-9 md:px-3 lg:px-8'>
                        <h3 className='capitalize  text-rose-400'>{info === 'reps' ? `${excercise.unit}` : info}</h3>
                        <p className='text-center'>{excercise[info]}</p>
                    </div>
                )
            })}
        
        </div>
    </div>
  )
}
