import React from 'react'
import { renderElapsedStrin } from '../helpers.ts'

interface TimerProps   {
  title: string
  project: string
  elapsed: string
  runningSince: null
}

const Timer = (props: TimerProps) => {
  const elapsedString = renderElapsedStrin(props.elapsed, props.runningSince)
  return (
    <div className='flex flex-col space-y-2'>
      <div className=' justify-self-start pl-3 space-y-[1px] pt-3'>
        <h3 className='text-lg font-semibold'>
          {props.title}
        </h3>
        <h3 className='text-gray-500 '>
          {props.project}
        </h3>
      </div>
      <div className='flex justify-center items-center text-xl font-semibold text-gray-700'>
        <h3>{elapsedString}</h3>
      </div>
      <div className='flex justify-end items-end space-x-1 pr-3'>
        <span>
          <button 
            type='button'
            className='text-sm text-gray-500'
          >
            Edit
          </button>
        </span>
        <span>
          <button 
            type='button'
            className='text-sm text-gray-500'
          >
            Trash
          </button>
        </span>
      </div>
      <div className='flex justify-center items-center w-full border-[1px] border-green-500 rounded-b-lg'>
        Start
      </div>
    </div>
  )
}

export default Timer