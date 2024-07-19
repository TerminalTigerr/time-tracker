import React, { useState } from 'react'
import TimerForm from './TimerForm.tsx'

const ToggleableTimerForm = () => {
  const [isOpen, setOpen] = useState(false)

  const handleFormOpen = () => {
    setOpen(prev => !prev)
  }

  const handleFormClose = () => {
    setOpen(false)
  }

  if(isOpen){
    return(
      <TimerForm
        id='00011'
        title=''
        project=''
        onClose={handleFormClose}
      />
    )
  }else{
    return(
      <div className=' '>
        <button
          onClick={handleFormOpen}
          className='text-lg text-gray-600 font-semibold border-[1px] border-gray-300 px-3 py-2' 
          type='submit'
        >
          +
        </button>
      </div>
    )
  }
}

export default ToggleableTimerForm