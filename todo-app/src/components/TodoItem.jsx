import React from 'react'

const TodoItem = ({element, deleteTask}) => {
  return (
    <>
      <div className="card">
        {element.text}
        <button onClick={()=> deleteTask(element.id)}>Delete</button>
      </div>
    </>
  )
}

export default TodoItem
