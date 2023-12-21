import React, { useState , useEffect} from 'react'
import "./App.css"
import {useDispatch} from  'react-redux'
import { useSelector } from 'react-redux'
import { addTodo } from './redux/slice'
import { deleteTodo } from './redux/slice'

const App = () => {
  const[task, setTask] = useState("")
  const dispatch = useDispatch();
  const todos = useSelector((state)=>state.todos);

   useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      dispatch(addTodo(JSON.parse(storedTodos)));
    }
  }, []);

   const renderList=(todo,index)=>{
     return (
     
      <div className='your_list' key={index} >   {/*//////////////*/}
        <p>{todo}</p>
        <i class="fa-sharp fa-solid fa-trash" onClick={()=>dispatch(deleteTodo(index))}></i>
      </div>
      
     )
   }

  return (
    <>
      <div className='container'>

        <div className='wrapper_1'>
        <h1>TO-DO</h1>
        <textarea placeholder='write your note' value={task} onChange={(e)=>setTask(e.target.value)}></textarea>
        <button className='add' onClick={() => { dispatch(addTodo(task)); setTask(""); }}>ADD</button>    {/********************* */}
      </div>

      <div className='wrapper_2'>
         <div className='task_list'>
          {todos && todos.map(renderList)}
          </div> 
      </div>
      </div>
    </>
  )
}

export default App