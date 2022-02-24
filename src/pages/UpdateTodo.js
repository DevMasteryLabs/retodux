import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { updateTodo } from '../redux/actions/todosActionCreators'

export default function UpdateTodo(props) {
    const params = useParams()
    const { id } = params
    const todos = useSelector(state => state.todos)
    const todo = todos.find(todo => todo.id === id)
    const dispatch = useDispatch()
    const [title, setTitle] = useState(todo ? todo.title : '')
    const [description, setDescription] = useState(todo ? todo.description : '')
    const handleSubmit = e => {
        e.preventDefault()
        if (title.trim()) {
            dispatch(updateTodo(id, { title, description }))
            props.history.push('/')
        }
    }
    return (
        <Form className='mt-5' onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Todo Title</Form.Label>
                <Form.Control value={title} onChange={e => setTitle(e.target.value)} type="text" placeholder="What is your new todo title ?" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>Todo Description</Form.Label>
                <Form.Control value={description} onChange={e => setDescription(e.target.value)} as="textarea" rows={3} />
            </Form.Group>
            <div className='d-flex justify-content-center'>
                <Button variant='outline-primary' type='submit'>
                    <span>Modify</span>
                </Button>
            </div>
        </Form>
    )
}
