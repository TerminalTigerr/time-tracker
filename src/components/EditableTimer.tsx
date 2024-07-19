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
      <div className='justify-self-center items-center border-[1px] border-gray-300 rounded-lg w-full'>
        <TimerForm 
          title={props.title}
          project={props.project}
        />
      </div>
    )
  }else {
    return(
      <div 
        className='items-center border-[1px] border-gray-300 rounded-lg w-full'>
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