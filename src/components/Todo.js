import React from 'react';

const Todo = (props) => {
    //Events
    const deleteHandler = () => {
        props.setTodos(props.todos.filter((el) => el.id !== props.todo.id));
        //console.log(props.todo.text)
    }

    const completeHandler = () => {
        props.setTodos(
                props.todos.map(ele => {
                if(ele.id === props.todo.id){
                    return{
                        ...ele,
                        completed: !ele.completed,
                    };
                }
                return ele;
            })
        );
    };
    return(
        <div className="todo">
            <li className={`todo-item ${props.todo.completed ? "completed" : ""}`}>{props.todo.text}</li>
            <button onClick={completeHandler} className="complete-btn">
                <i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

export default Todo;