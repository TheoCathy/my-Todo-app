import React from 'react'
import { useState } from 'react'
import { Todo } from '../Pages/Todo';
import { TodoForms } from '../Pages/TodoForms';


export const TodoListContainer = () => {

  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState("");
  const [input, setInput] = useState("");
  const [editMode, setEditMode] = useState(false)

  const addTodo = todo =>{
    if (!todo.text || /^\s*$/.test(todo.text)){
      return;
    }

    const newTodo = [todo,...todos];

    setTodos(newTodo);
  };

  console.log(todos)

  // FUNCTION TO EDIT AND UPDATE TODOS

    const updateTodo =(id, newValue) =>{
      if (!newValue.text || /^\s*$/.test(newValue.text)){
        return;
      }
      setTodos(prev => prev.map(item => (item.id === id ? newValue : item))
      ); 
    }


// DELETE FUNCTION HERE
  const removeTodo= id =>{
    const removeArr = [... todos].filter(todo => todo.id !== id )
    setTodos(removeArr)

  };

  // TOGGLE COMPLETE FUNCTION
const completed = id =>{
  let updatedTodos = todos.map(todo =>{
    if (todo.id === id){
      todo.completed =!todo.completed;
    }
    return todo;
  });
  setTodos(updatedTodos);
}

  return (  
    <>
        <TodoForms onSubmit={addTodo}
       updateTodo ={updateTodo}
       setTodos ={setTodos}
       edit ={edit}
       setEdit ={setEdit}
       input={input}
  
      />

      
    {/* }  */}
  
      <Todo todos ={todos} 
      completed={completed} 
      removeTodo ={removeTodo}
      updateTodo ={updateTodo}
      setEditMode ={setEditMode}
      input={input}
      />

      </>
  )
}
