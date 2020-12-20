import React, { useState, useEffect } from 'react';
import './App.css'
//Import Components
import Form from './components/Form.js'
import TodoList from './components/TodoList.js'


function App(){
  
  const [input, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  
  //Run once: Get local todos
  useEffect(() => {
    getLocalTodos();
  }, []);

  //Use Effect: Can be used to call a function each time a state changes
  //The second argument (inside the brackets) takes in states which are monitored for change
  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const getLocalTodos = () => {
    //Check if there are todos
    if(localStorage.getItem('todos') === null){
      //If empty, make an empty array
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      setTodos(JSON.parse(localStorage.getItem('todos', JSON.stringify(todos))));
    }
  }
  const saveLocalTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  }

  return(
    <div className='App'>
      <header>
        <h1>To Do List</h1>
      </header>  
      <Form 
        todos={todos} 
        //filteredTodos={filteredTodos}
        input={input} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        todos={todos}  
        filteredTodos={filteredTodos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;