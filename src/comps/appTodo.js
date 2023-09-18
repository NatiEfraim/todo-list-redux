import React from 'react'
import TodoInput from './todoInput'
import TodoList from './todoList'

export default function AppTodo() {
  return (
    <div className='container'>
      <h1 className='display-4'>Todo list app</h1>
      <TodoInput />
      <TodoList />
    </div>
  )
}
