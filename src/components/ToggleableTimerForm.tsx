import React from 'react'
import TimerForm from './TimerForm.tsx'

interface Props {
  isOpen: boolean
}

const ToggleableTimerForm: React.FC<Props> = ({isOpen}) => {
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