import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import './App.css';
import AppRoutes from './appRoutes';
import todoSlice from './features/todoSlice';

// diffine my store 
const myStore=configureStore({
  reducer:{
    todoSlice:todoSlice
  }
})


function App() {
  return (
    <Provider store={myStore} >
      <AppRoutes />
    </Provider>
  );
}

export default App;
