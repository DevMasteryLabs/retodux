import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'

export default function NewTodo(props) {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const handleSubmit = e => {
        e.preventDefault()
        if (title.trim()) {
            props.onAddTodo({
                title,
                description
            })
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
                    <i class="bi bi-plus-circle-fill"></i>
                    <span className="ms-2">Add Todo</span>
                </Button>
            </div>
        </Form>
    )
}
