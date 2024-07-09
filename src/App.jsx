import { useState } from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Workout from './components/Workout'
import { generateWorkout } from './utils/functions'

function App() {
  const [workout,setWorkout]=useState(null)
  const [split, setSplit]=useState('individual')
    const [muscles, setMuscles] = useState([])
    const [goals, setGoals] = useState('strength_power')

    function updateWorkout(){
      if(muscles.length===0){
        return
      }
      let newWorkout= generateWorkout(split, muscles, goals)
      setWorkout(newWorkout)
    }
  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-br from-slate-900 to-zinc-950 text-white text-sm sm:text-base'>
      <Hero />
      <Generator 
      split={split}
      setSplit={setSplit}
      muscles={muscles}
      setMuscles={setMuscles}
      goals={goals}
      setGoals={setGoals}
      updateWorkout={updateWorkout}
      />
      {workout && (<Workout workout={workout} />)}
    </main>
  )
}

export default App
