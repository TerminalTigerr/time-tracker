import React from 'react'
import EditableTimer from './EditableTimer.tsx'

interface Timers {
  id: string
  title: string
  project: string
  elapsed: number
  runningSince: number | null
}

interface Props {
  timers: Timers[]
  onFormSubmit: (attr: {id?: string, title: string, project: string}) => void
  onTrashClick: (timerId: string) => void
  onStartClick: (timerId: string) => void
  onStopClick: (timerId: string) => void
}

const EditableTimerList = (props: Props) => {
  const timers = props.timers.map(timer => (
    <EditableTimer 
      key={timer.id}
      id={timer.id}
      title={timer.title}
      project={timer.project}
      elapsed={timer.elapsed}
      runningSince={timer.runningSince}
      onFormSubmit={props.onFormSubmit}
      onTrashClick={props.onTrashClick}
      onStartClick={props.onStartClick}
      onStopClick={props.onStopClick}
    />
  ))
  return (
    <div className='grid gap-3'>
      {timers}
    </div>
  )
}

export default EditableTimerList