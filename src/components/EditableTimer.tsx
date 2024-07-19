import React, { useState } from 'react'
import TimerForm from './TimerForm.tsx'
import Timer from './Timer.tsx'

interface Props {
  id: string
  title: string
  project: string
  elapsed: number
  runningSince: null | number
}

const EditableTimer = (props: Props) => {
  const [editFormOpen, setFormOpen] = useState(false)
  if(editFormOpen){
    return (
      <div className=''>
        <TimerForm 
          title={props.title}
          project={props.project}
          
        />
      </div>
    )
  }else {
    return(
      <div 
        className=''>
        <Timer 
          title={props.title}
          project={props.project}
          elapsed={props.elapsed}
          runningSince={props.runningSince}
        />
      </div>
    )
  }
}
export default EditableTimer