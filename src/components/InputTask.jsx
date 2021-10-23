import React from 'react'

import 'remixicon/fonts/remixicon.css'

function InputTask(props){
  return (
    <div className="input-task">
      <button className='btn-add' onClick={props.get}><i className="ri-add-line"></i></button>
      <input className='text-input' type="text" placeholder='New task'/>
    </div>
  )
}

export default InputTask