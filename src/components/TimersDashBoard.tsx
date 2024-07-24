import React, { useState } from 'react'
import { v4 as uuidv4} from 'uuid'
import EditableTimerList from './EditableTimerList.tsx'
import ToggleableTimerForm from './ToggleableTimerForm.tsx'
import { newTimer } from '../helpers.ts'

interface Timers {
  id: string
  title: string
  project: string
  elapsed: number
  runningSince: number | null
}

type TimerSubmit = {
  id?: string
  title: string
  project: string
}

const TimersDashBoard = () => {
  const [timers, setTimers] = useState<Timers[]>([
    {
      id: uuidv4(),
      title: 'Practice React',
      project: 'Web Domination',
      elapsed: 28392102,
      runningSince: Date.now()
    },
    {
      id: uuidv4(),
      title: 'Practice Python',
      project: 'Machine Learning',
      elapsed: 36281923,
      runningSince: null
    }
  ])

  const handleStartClick = (timerId: string): void => {
    startTimer(timerId)
  }


  const startTimer = (timerId: string): void => {
    setTimers(prevTimers => 
      prevTimers.map(timer => 
        timer.id === timerId ? {...timer, runningSince: Date.now()} : timer
      )
    )
  }

  const handleEditFormSubmit = (attr: TimerSubmit) => {
    updateTimer(attr)
  }

  const updateTimer = (attrs: TimerSubmit) => {
    setTimers(
      timers.map(timer => {
        if(timer.id === attrs.id){
          return Object.assign({}, timer, {
            title: attrs.title,
            project: attrs.project
          })
        }else {
          return timer
        }
      })
    )
  }

  const handleCreateFormSubmit = (timer: TimerSubmit) => {
    createTimer(timer)
  }

  const createTimer = (timer: TimerSubmit) => {
    const t = newTimer(timer)
    setTimers(prev => [...prev, t])
  }

  const handleTrashClick = (timerId: string) => {
    deleteTimer(timerId)
  }

  const deleteTimer = (timerId: string) => {
    setTimers(timers.filter(timer => timer.id !== timerId))
  }
  return (
    <main
      className='flex flex-col justify-center items-center gap-3 py-10'
    >
      <EditableTimerList 
        timers={timers}
        onFormSubmit={handleEditFormSubmit}
        onTrashClick={handleTrashClick}
        onStartClick={handleStartClick}
      />
      <ToggleableTimerForm 
        onFormSubmit={handleCreateFormSubmit}
      />
    </main>
  )
}

export default TimersDashBoard