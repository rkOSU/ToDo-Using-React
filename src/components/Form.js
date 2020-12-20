import React from "react";
import TodoList from "./TodoList";

const Form = (props) => {
    const inputTextHandler = (eve) => {
        console.log(eve.target.value);
        props.setInputText(eve.target.value);
    };

    const submitTodoHandler = (e) => {
        //Prevent page from being refreshed when button is clicked
        e.preventDefault();
        props.setTodos([
            ...props.todos, {text: props.input, completed: false, id: Math.random() * 1000},
        ]);
        props.setInputText("");
    };

    const statusHandler = (e) => {
        props.setStatus(e.target.value);

    }
    return (
        <form>
            <input value={props.input} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTodoHandler} className='todo-button' type='submit'>
                <i className='fas fa-plus-square'></i>
            </button>
            <div className='select'>
                <select name='todos' className='filter-todo'>
                    <option value='all'>All</option>
                    <option value='completed'>Complelted</option>
                    <option value='uncomple ted'>Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;