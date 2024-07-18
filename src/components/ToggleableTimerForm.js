import React from 'react'
import TimerForm from './TimerForm'

const ToggleableTimerForm = ({ isOpen }) => {
  if(isOpen) {
    return(
      <TimerForm />
    )
  }else{
    return(
      <div>
        <button>
          +
        </button>
      </div>
    )
  }
  
}

export default ToggleableTimerForm