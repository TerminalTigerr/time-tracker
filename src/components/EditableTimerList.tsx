import React from 'react'
import EditableTimer from './EditableTimer.tsx'

const EditableTimerList = () => {
  return (
    <div className='grid gap-4 p-5 justify-items-center'>
      <EditableTimer 
        title='Learn React'
        project= 'Web Donination'
        elapsed='2342134'
        runningSince={null}
        editFormOpen={false}
      />
      <EditableTimer 
        title='Learn Typescript'
        project='Web Donination'
        elapsed='2315678'
        runningSince={null}
        editFormOpen={true}
      />
    </div>
  )
}

export default EditableTimerList