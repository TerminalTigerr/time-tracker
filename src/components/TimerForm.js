import React from 'react'

const TimerForm = ({ title, project}) => {
  const submitText = title ? 'Update': 'Create'
  return (
    <div>
      <div>
        <div className='field'>
          <label>Title</label>
          <input type="text" defaultValue={title}/>
        </div>
        <div>
          <label>Project</label>
          <input type="text" defaultValue={project} />
        </div>
        <div className='buttons'>
          <button>
            {submitText}
          </button>
          <button>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default TimerForm