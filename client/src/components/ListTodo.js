import React from 'react';

const ListTodo = ({ todos, deleteTodo, editTodo }) => {

    return (
        <ul>
            {
                todos && todos.length > 0 ?
                    (
                        todos.map(todo => {
                            return (
                                <li key={todo._id}>
                                    {todo.action}
                                    <div className="li-todo">
                                        <button className="btn btn-remove" onClick={() => deleteTodo(todo._id)}>Remove</button>
                                        <button className="btn btn-edit" onClick={() => editTodo(todo)}>Edit</button>
                                    </div>
                                </li>
                            )
                        })
                    )
                :
                    (
                        <li>No todo(s) left</li>
                    )
            }
        </ul>
    )
}

export default ListTodo;