import React, { useEffect, useState } from 'react'
import { renderElapsedString } from '../helpers.ts'
import TimerActionButton from './TimerActionButton.tsx'

interface Props {
  id: string
  title: string
  project: string
  elapsed: number
  runningSince: number | null
  onEditClick: () => void
  onTrashClick: (timerId: string) => void
  onStartClick: (timerId: string) => void
  onStopClick: (timerId: string) => void
}

const Timer = (props: Props) => {
  const [, setTick] = useState(0)

  const forceUpdate = (): void => {
    setTick(prev => prev + 1)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      forceUpdate()
    },50)
    return () => {
      clearInterval(interval)
    }
  },[])

  const elapsedString = renderElapsedString(props.elapsed, props.runningSince)

  const handleTrashClick = () => {
    props.onTrashClick(props.id)
  }

  const handleStartClick = () => {
    props.onStartClick(props.id)
  }

  const handleStopClick = () => {
    props.onStopClick(props.id)
  }
  return (
    <div className='grid gap-3 border-[1px] border-gray-300 w-[320px] rounded-md shadow-sm'>
      <div className='pl-3 pt-3'>
        <h3 
          className=' text-xl font-semibold'
        >
          {props.title}
        </h3>
        <h3 
          className='text-gray-400'
        >
          {props.project}
        </h3>
      </div>
      <div
        className='flex justify-center items-center text-2xl font-medium text-gray-600'
      >
        <h3>{elapsedString}</h3>
      </div>
      <div
         className='flex justify-end items-end pr-3 space-x-1'
      >
        <span>
          <button
            className='text-sm text-gray-400' 
            type='button'
            onClick={props.onEditClick}
          >
            Edit
          </button>
        </span>
        <span>
          <button 
            type='button'
            className='text-sm text-gray-400'
            onClick={handleTrashClick}
          >
            Trash
          </button>
        </span>
      </div>
      <div>
        <TimerActionButton 
          timerIsRunning={!!props.runningSince}
          onStartClick={handleStartClick}
          onStopClick={handleStopClick}
        />
      </div>
    </div>
  )
}

export default Timer