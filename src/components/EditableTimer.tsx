import React, { useState } from 'react'
import TimerForm from './TimerForm.tsx'
import Timer from './Timer.tsx'

interface Props {
  id: string
  title: string
  project: string
  elapsed: number
  runningSince: number | null
  onFormSubmit: (attr: {id?: string, title: string, project: string}) => void
  onTrashClick: (timerId: string) => void
  onStartClick: (timerId: string) => void
  onStopClick: (timerId: string) => void
}

const EditableTimer = (props: Props) => {
  const openForm = (): void => {
    setFormOpen(true)
  }
  const closeForm = (): void => {
    setFormOpen(false)
  }
  const handleEditClick = (): void => {
    openForm()
  }
  const handleFormClose = (): void => {
    closeForm()
  }
  const handleSubmit = (timer: {id?: string, title: string, project: string}): void => {
    props.onFormSubmit(timer)
    closeForm()
  }
  const [editFormOpen, setFormOpen] = useState(false)
  if(editFormOpen){
    return(
      <TimerForm 
        id={props.id}
        title={props.title}
        project={props.project}
        onFormClose={handleFormClose}
        onFormSubmit={handleSubmit}
      />
    )
  }else{
    return(
      <Timer
        id={props.id}
        title={props.title}
        project={props.project}
        elapsed={props.elapsed}
        runningSince={props.runningSince}
        onEditClick={handleEditClick}
        onTrashClick={props.onTrashClick}
        onStartClick={props.onStartClick}
        onStopClick={props.onStopClick}
      />
    )
  }
}

export default EditableTimer