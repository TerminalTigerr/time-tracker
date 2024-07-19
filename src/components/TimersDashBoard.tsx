import React from 'react'
import EditableTimerList from './EditableTimerList.tsx'
import ToggleableTimerForm from './ToggleableTimerForm.tsx'


const TimersDashBoard = () => {
  return (
    <main className='main '>
      <div className='flex flex-col justify-center items-center space-y-2 mt-10'>
        <EditableTimerList />
        <ToggleableTimerForm 
          isOpen={false}
        />
      </div>
    </main>
  )
}

export default TimersDashBoard