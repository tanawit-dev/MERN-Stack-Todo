import React, { Component } from 'react';
import axios from 'axios';

import Input from './Input';
import ListTodo from './ListTodo';
import ModalTodo from './ModalTodo';

class Todo extends Component {
    state = {
        todos: []
    }

    componentDidMount() {
        this.getTodos();
    }

    getTodos = () => {
        axios.get('/api/todos')
            .then(res => {
                if (res.data) {
                    this.setState({
                        todos: res.data
                    });
                }
            })
            .catch(err => console.log(err));
    }

    deleteTodo = id => {
        axios.delete(`/api/todos/${id}`)
            .then(res => {
                if (res.data) {
                    this.getTodos();
                }
            })
            .catch(err => console.log(err));
    }

    handleClose = () => {
        this.setState({
            show: false,
            todo: {}
        });
    }

    editTodo = (todo) => {
        this.refs.ModalTodo.show(todo);
    }

    render() {
        let { todos } = this.state;

        return (
            <div>
                <h1>My Todo(s)</h1>
                <Input getTodos={this.getTodos}/>
                <ListTodo todos={todos} deleteTodo={this.deleteTodo} editTodo={this.editTodo} />
                <ModalTodo ref="ModalTodo" getTodos={this.getTodos}></ModalTodo>
            </div>
        )
    }
}

export default Todo;