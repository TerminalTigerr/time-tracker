import React from 'react'
import TimerForm from './TimerForm'
import Timer from './Timer'

const EditableTimer = props => {
  if(props.editFormOpen) {
    return (
      <div>
        <TimerForm
          title={props.title}
          project={props.project}
        />
      </div>
    )
  }else {
    return (
      <Timer 
        title={props.title}
        project={props.project}
        elapsed={props.elapsed}
        runningSince={props.runningSince}
      />
    )
  }

}

export default EditableTimer