import React from 'react';
import Item from "./Item";
import './App.css'
//Import Components
import Form from './components/Form.js'
function App(){
  const insertItem = () =>{
    return (<Item />);
  }
  return(
    <div className='App'>
      <header>
        <h1>To Do List</h1>
      </header>  
      <Form />
    </div>
  );
}

export default App;