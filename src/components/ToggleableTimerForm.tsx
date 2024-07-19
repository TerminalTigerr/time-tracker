import React, { useState } from 'react'
import TimerForm from './TimerForm.tsx'



const ToggleableTimerForm = () => {
  const [isOpen, setOpen] = useState(false)

  const handleFormOpen = () => {
    setOpen(prev => !prev)
  }
  if(isOpen){
    return(
      <TimerForm
        title=''
        project=''
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