import React, { useState } from 'react'
import { TodoForms } from './TodoForms'
import TodoList from './TodoList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPenToSquare, faTrash, } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({todos, completed, removeTodo,  updateTodo, }) => {
   
    const [edit, setEdit] = useState({
        id: null,
        value: "",
    });

    const submitUpdate = value =>{
       updateTodo( edit.id, value) 
       setEdit({
        id: null,  
        value: "",
       })
    };

if (edit.id) {
    return <TodoForms edit ={edit}
    onSubmit ={submitUpdate}
    />
}

  return todos.map((todo, index) =>(
 
    
    <ul className="task-box" key={index}>
     <div>
        {/* FOR THE TOGGLE OF COMPLETED TASKS */}
       <li className={todo.completed ? "task-checked" : "task"}
            key={index}     
       >

        {/* CHECK BOX TO TOGGLE COMPLETED */}
         <label className='checkbox'>
           <input key={todo.id } type="checkbox" onClick={()=> completed(todo.id)}/> 
         </label>
         {/* <p className='to-do'>{todo.text}</p> */}
         <p className='to-do'>{todo.text}</p>
         <div className="settings">
           <ul className="task-menu">
             <li><FontAwesomeIcon  icon={faPenToSquare}
                onClick={() =>  setEdit({id: todo.id, value: todo.text})}
                className = "icons"
                />
             </li>
             <li>
             <FontAwesomeIcon  icon={faTrash}
                onClick={() => removeTodo(todo.id)}
                className = "icons"
                />
             </li>
           </ul>
         </div>
       </li>
     </div>
     </ul>
  ));
  
}
