import { createSlice } from "@reduxjs/toolkit";
const KEY_LOCAL= "todo_local";
// divide if exsist somting in memeory
const initState= localStorage[KEY_LOCAL] ? JSON.parse(localStorage[KEY_LOCAL]): {
    arr_todoList: []
}
const todoSlice=createSlice({
    name:"todos",
    initialState:{...initState,user:"monkeys"},
    reducers:{
        addNewItem:(state,action)=>{
            state.arr_todoList.push(action.payload.todoItem);
            saveToLocal(state);
        },
        resetAll:(state,action)=>{
            state.arr_todoList=[];
            saveToLocal(state);

        },
        delSingleItem:(state,action)=>{
            // return what is diffrent
            state.arr_todoList=state.arr_todoList.filter((item)=>item.id!=action.payload.delId);
            saveToLocal(state);

        }
    }
})
// save in the localstorge the data
const saveToLocal=(state)=>{
localStorage.setItem(KEY_LOCAL,JSON.stringify(state))
}
export const {addNewItem,resetAll,delSingleItem}=todoSlice.actions;
export default todoSlice.reducer;