import React, { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './index.scss';


function App() {

  const [todos, setTodos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  
  const addTodo = (todo) => {
    setTodos([
      ...todos,
      todo
    ])
  }

  const removeTodo = id => {
    const newTodo = [...todos].filter(todo => todo.id !== id)
    setTodos(newTodo)
  }

  const handleEditTodo = a => {
    setIsEdit(a);
  }

  const editTodo = e => {
    const newEditedTodo = [...todos].map(todo => {
      if (todo.id === e.id) {
        todo.title = e.title;
        return todo;
      } else {
        return todo;
      }
    })
    setTodos(newEditedTodo);
    setIsEdit(false)
  }

  return ( 
      <div className='todo-app'>
        <h1 className='todo-title'>Todo List</h1>
        <TodoForm onSubmit={addTodo} edit={isEdit} editedTodo={editTodo} />
        <TodoList lists={todos} removeTodo={removeTodo} editTodo={handleEditTodo} />
      </div>
  );
}

export default App;
