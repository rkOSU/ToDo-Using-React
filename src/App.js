import React, { useState } from 'react';
import './App.css'
//Import Components
import Form from './components/Form.js'
import TodoList from './components/TodoList.js'


function App(){
  const [input, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  return(
    <div className='App'>
      <header>
        <h1>To Do List</h1>
      </header>  
      <Form 
        todos={todos} 
        input={input} 
        setTodos={setTodos} 
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList 
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  );
}

export default App;