import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { delSingleItem } from '../features/todoSlice'
import {sortBy} from "lodash";
export default function TodoList() {
  const dispatch=useDispatch();
  // collect the data from the store
  const arr_todoList=useSelector(state=> state.todoSlice.arr_todoList)
  let  sort_Arr=sortBy(arr_todoList,"time");//sort by time
  return (
   
    <div className='col-md-7'>
      {sort_Arr.map(item=>{
        return(
          <div key={item.id} className='border shadow-sm my-2 p-2'>
            <button onClick={()=>{
              dispatch(delSingleItem({delId:item.id}))
            }} className='btn btn-danger float-end'>Del</button>
            <h3>{item.name} - {item.time}</h3>
          </div>
        )
      })}

    </div>
  )
}
