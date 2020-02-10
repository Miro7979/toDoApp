import React from 'react';


const Todos = ({ todos, deleteTodo }) => {

  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span onClick={() => {deleteTodo(todo.id)}}>{todo.content} 
          <button className="right red-text deleteButton">Delete</button>
          </span>
        </div>
      )
    })
  ) : (
    <p className="center"> You have no more to do left </p>
  );
  return (
<div className="todos collection">
  {todoList}
</div>

  )
}

export default Todos;