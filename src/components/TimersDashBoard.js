import React from 'react'
import EditableTimerList from './EditableTimerList'
import ToggleableTimerForm from './ToggleableTimerForm'

const TimersDashBoard = () => {
  return (
    <main>
      <EditableTimerList />
      <ToggleableTimerForm 
        isOpen={false}
      />
    </main>
  )
}

export default TimersDashBoard