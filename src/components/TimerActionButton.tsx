import React from 'react'

interface Props {
  timerIsRunning: boolean
  onStartClick: () => void
  onStopClick: () => void 
}

const TimerActionButton = (props: Props) => {
  if(props.timerIsRunning){
    return(
      <div
        className='flex justify-center items-center py-2 text-red-500
        w-full border-[1px] border-red-500 rounded-b-sm shadow-sm cursor-pointer'
        onClick={props.onStopClick}
      >
        Stop
      </div>
    )
  }else {
    return(
      <div
      className='flex justify-center items-center py-2 text-green-500 
      w-full border-[1px] border-green-500 rounded-b-sm shadow-sm cursor-pointer'
      onClick={props.onStartClick}
      >
        Start
      </div>
    )
  }
  
}

export default TimerActionButton