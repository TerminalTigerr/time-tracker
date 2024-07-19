import React from 'react'
import EditableTimer from './EditableTimer.tsx'

type Timerrs = {
  title: string
  project: string
  id: string
  elapsed: number 
  runningSince: number | null
}
interface Props {
  timers: Timerrs[]
}

const EditableTimerList = (props: Props) => {
  const timers = props.timers.map((timer) => (
    <EditableTimer
      key={timer.id}
      id={timer.id}
      title={timer.title}
      project={timer.project}
      elapsed={timer.elapsed}
      runningSince={timer.runningSince}
    />
  ))
  return (
    <div className='grid gap-4 p-5 justify-items-center'>
      {timers}
    </div>
  )
}

export default EditableTimerList