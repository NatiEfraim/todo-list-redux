import React,{useRef} from 'react'
import { useDispatch } from 'react-redux';
import { addNewItem,resetAll } from '../features/todoSlice';
export default function TodoInput() {
  const dispatch=useDispatch();
  const nameRef=useRef();
  const timeRef=useRef();
  const onAddClick=()=>{
    // create new todo
    let todoObj={
      name:nameRef.current.value,
      time:timeRef.current.value,
      id:Date.now()
    }
    console.log(todoObj);
    dispatch(addNewItem({todoItem:todoObj}))
  }
  return (
    <div className='col-md-6'>
      <label>Enter task name:</label>
      <input ref={nameRef} type="text" className='form-control'/>
      <label>Enter task time:</label>
      <input ref={timeRef} type="time" className='form-control'/>
      <div className='text-center my-3'>
        <button onClick={onAddClick} className='btn btn-success me-2'>Add new</button>
        <button onClick={()=>{
          if (window.confirm("Are you sure?")) {
            dispatch(resetAll())
          }
        }} className='btn btn-danger'>Reset</button>
      </div>
    </div>
  )
}
