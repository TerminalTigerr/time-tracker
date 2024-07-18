import React from 'react'
import EditableTimer from './EditableTimer'

const EditableTimerList = () => {
  return (
    <div id='timers'>
      <EditableTimer
        title='Learn React'
        project='Web domination'
        elapsed='21311133'
        runningSince={null}
        editFormOpen={false}
      />
      <EditableTimer
        title='Learn Python'
        project='Machine Learning'
        elapsed='32133222'
        runningSince={null}
        editFormOpen={true}
      />
    </div>
  )
}

export default EditableTimerList