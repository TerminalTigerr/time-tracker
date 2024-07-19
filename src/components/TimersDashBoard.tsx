import React, { useState } from 'react'
import EditableTimerList from './EditableTimerList.tsx'
import ToggleableTimerForm from './ToggleableTimerForm.tsx'

interface Timers {
  title: string
  project: string
  id: string
  elapsed: number 
  runningSince: number | null
}

const TimersDashBoard = () => {
  const [timers, setTimers] = useState<Timers[]>([
    {
      title: "Practice React",
      project: "Web Domination",
      id: '23hshaueiqo1nuuboska24',
      elapsed: 3628121,
      runningSince: Date.now()
    },
    {
      title: "Practice Python",
      project: "Machine Learning",
      id: '23hshaueiqo1nuuboska24',
      elapsed: 5675432,
      runningSince: null
    }
  ])
  return (
    <main className='main '>
      <div className='flex flex-col justify-center items-center space-y-2 mt-10'>
        <EditableTimerList 
          timers={timers}
        />
        <ToggleableTimerForm/>
      </div>
    </main>
  )
}

export default TimersDashBoard