import React from 'react'
import { renderElapsedString } from './helpers'

const Timer = ({title, project, elapsed, runningSince}) => {
  const elapsedString = renderElapsedString(elapsed, runningSince)
  return (
    <div>
      <div>
        <h1>{title}</h1>
      </div>
      <div>
        <h1>{project}</h1>
      </div>
      <div>
        <h2>
          {elapsedString}
        </h2>
      </div>

    </div>
  )
}

export default Timer