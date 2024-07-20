import React, { useState } from 'react'
import { v4 as uuidv4} from 'uuid'
import TimerForm from './TimerForm.tsx'

interface Props {
  onFormSubmit: (timer: {id?: string, title: string, project: string}) => void
}

const ToggleableTimerForm = (props: Props) => {
  const [isOpen, setOpen] = useState(false)

  const handleFormOpen = (): void => {
    setOpen(true)
  }

  const handleFormClose = (): void => {
    setOpen(false)
  }

  const handleFormSubmit = (timer: {id?: string, title: string, project: string}) => {
    props.onFormSubmit(timer)
    setOpen(false)
  }

  if(isOpen){
    return (
      <TimerForm 
        id={uuidv4()}
        title=''
        project=''
        onFormClose={handleFormClose}
        onFormSubmit={handleFormSubmit}
      />  
    )
  }else {
    return(
      <div>
        <button
          className='text-lg text-gray-600 font-semibold border-[1px] border-gray-300 px-3 py-2' 
          type='button'
          onClick={handleFormOpen}
        >
          +
        </button>
      </div>
    )
  }
}

export default ToggleableTimerForm