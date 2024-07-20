import React, { useState } from 'react'

interface Props {
  id: string
  title: string
  project: string
  onFormClose?: () => void
  onFormSubmit: (timer: {id?: string, title: string, project: string}) => void
}

interface InputFields {
  title: string
  project: string
}


const TimerForm = (props: Props) => {
  const [inputFields, setInputFields] = useState<InputFields>({
    title: props.title || '',
    project: props.project || ''
  })

  const onInputChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = evt.target
    setInputFields(prev => ({
      ...prev,
      [name]: value
    }))
  } 

  const handleFormSubmit = () => {
    props.onFormSubmit({
      id: props.id,
      title: inputFields.title,
      project: inputFields.project
    })
  }

  const submitText = props.title ? "Update" : 'Create'
  return (
    <div className='w-[320px] border-[1px] border-gray-300 rounded-md shadow-sm'>
      <div className='grid space-y-3 p-5'>
        <div className='grid space-y-1'>
          <label>Title</label>
          <input
            className='px-4 py-2 focus:outline-none border-[1px] border-gray-300 rounded-md' 
            type="text" 
            name='title'
            placeholder='Title'
            value={inputFields.title}
            onChange={onInputChange}
          />
        </div>
        <div className='grid space-y-1'>
          <label>Project</label>
          <input
            className='px-4 py-2 focus:outline-none border-[1px] border-gray-300 rounded-md' 
            type="text"
            name='project' 
            placeholder='Project'
            value={inputFields.project} 
            onChange={onInputChange}
          />
        </div>
        <div className=''>
          <button
            className='border-[1px] border-blue-500 border-r-red-500 w-[50%]' 
            type='button'
            onClick={handleFormSubmit}
          >
            {submitText}
          </button>
          <button 
            className='border-[1px] border-red-500 w-[50%]'
            type='button'
            onClick={props.onFormClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default TimerForm