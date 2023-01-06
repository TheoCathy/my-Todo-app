import React, { useEffect, useState, useRef } from "react";
// import { useLoaderData } from 'react-router-dom';

export const TodoForms = (props) => {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
    
  const focus = useRef(null)
    useEffect(() =>{
         focus.current.focus()
    })




  const changler = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();


      props.onSubmit({
        id: Math.floor(Math.random() * 1000),
        text: input,
      });
      setInput("");

  };




  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <div className="task-input">
        {props.edit ? (
            <>
            <input
          type="text"
          placeholder="Today's TODO"
          id="newTaskInput"
          name="text"
          value={input}
          onChange={changler}
          ref={focus}
        />
        <button id="update_Tasklist"> Update </button>
        </>)
         :
         <> 
          <input
        type="text"
        placeholder="Today's TODO"
        id="newTaskInput"
        name="text"
        value={input}
        onChange={changler}
        ref={focus}
      />
      <button id="update_Tasklist"> Add task </button> 
        
      </>
      }
        
      </div>
    </form>
  );
};
