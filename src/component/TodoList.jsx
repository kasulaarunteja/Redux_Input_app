

import React from 'react';
import { useSelector } from 'react-redux';

const TodoList = () => {
    
    const todos = useSelector((state) => state.todos);
    console.log(todos)


    return (
        // <div>{'list of items'}</div>
        <div>
            {todos.map((el) => {
                return (
                    <div key={el.id}>{el.title}</div>
                )
            })}
        </div>
    );
}

export default TodoList;
