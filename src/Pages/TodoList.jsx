import React from "react";
import "./Todolist.css";
import { TodoListContainer } from "../Componets/TodoListContainer";
import { TodoForms } from "./TodoForms";
import { Todo } from "./Todo";
// import {Link} from 'react-router-dom'
// import AdminReportCrd from './Todo'
// import {ToastContainer} from 'React-toastify';
// import "react-toastify/dist/ReactToastify.css";
// import {toast} from "react-toastify";

const TodoList = () => {
  return (
    <React.Fragment>
      <div className="wrapper">
        <h1 id="Title">MY TODO LIST</h1>
        <TodoListContainer />
      </div>

      {/* <Todo/> */}
    </React.Fragment>
  );
};

export default TodoList;
