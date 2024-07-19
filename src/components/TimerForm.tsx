import React from 'react'

interface Props {
  title: string
  project: string
}

const TimerForm = (props: Props) => {
  const submitText = props.title ? 'Update' : 'Create'
  return (
    <div className=''>
      <div className='gird space-y-3 p-3'>
        <div className='grid space-y-1'>
          <label>Title</label>
          <input 
            className='px-3 py-1 focus:outline-none border-[1px] border-gray-300 rounded-md' 
            placeholder='Title' 
            type="text" 
            defaultValue={props.title} 
          />
        </div>
        <div className='grid space-y-1'>
          <label >Project</label>
          <input
            className='px-4 py-2 focus:outline-none border-[1px] border-gray-300 rounded-md' 
            type="text" 
            placeholder='Project' 
            defaultValue={props.project}
          />
        </div>
        <div className='justify-center tw-full'>
          <button
            className='border-[1px] border-blue-500 border-r-red-500 w-[50%]' 
            type='submit'
          >
            {submitText}
          </button>
          <button 
            className='border-[1px] border-red-500 w-[50%]'
            type='submit'
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default TimerForm