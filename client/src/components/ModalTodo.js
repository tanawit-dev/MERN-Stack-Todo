import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import axios from 'axios';

class ModalTodo extends Component {

    state = {
        show: false,
        todo: {}
    }

    show = todo => {
        this.setState({
            show: true,
            todo
        });
    }

    hide = () => {
        this.setState({
            show: false,
            todo: {}
        });
    }

    onChange = e => {
        let value = e.target.value;
        this.setState((prevState) => ({
            ...prevState,
            todo: {
                _id: prevState.todo._id,
                action: value
            }
        }));
    }

    saveChange = todo => {
        if (todo && todo._id && todo.action && todo.action.length > 0) {
            axios.put(`/api/todos/${todo._id}`, todo)
                .then(res => {
                    if (res.data) {
                        this.hide();
                        this.props.getTodos();
                    }
                })
                .catch(err => console.log(err));
        }
    }

    render() {
        let { todo, show } = this.state;
        return (
            <Modal show={show} onHide={this.hide}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <input type="text" value={todo.action} onChange={this.onChange} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.hide}>Close</Button>
                    <Button variant="primary" onClick={() => this.saveChange(todo)}>Save Change</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

export default ModalTodo;