import React from 'react'
import { renderElapsedStrin } from '../helpers.ts'

interface TimerProps   {
  title: string
  project: string
  elapsed: number
  runningSince: null | number
}

const Timer = (props: TimerProps) => {
  const elapsedString = renderElapsedStrin(props.elapsed, props.runningSince)
  return (
    <div className='grid gap-3 border-[1px] border-gray-300 w-[320px] rounded-md shadow-sm'>
      <div className='pl-3 pt-3'>
        <h3 className=' text-xl font-semibold'>
          {props.title}
        </h3>
        <h3 className='text-gray-400'>
          {props.project}
        </h3>
      </div>
      <div className='flex justify-center items-center text-2xl font-medium text-gray-600'>
        <h3>{elapsedString}</h3>
      </div>
      <div className='flex justify-end items-end pr-3 space-x-1'>
        <span>
          <button 
            type='button'
            className='text-sm text-gray-400'
          >
            Edit
          </button>
        </span>
        <span>
          <button 
            type='button'
            className='text-sm text-gray-400'
          >
            Trash
          </button>
        </span>
      </div>
      <div 
        className='flex justify-center items-center py-2 text-green-500 
        w-full border-[1px] border-green-500 rounded-b-sm'>
        Start
      </div>
    </div>
  )
}

export default Timer