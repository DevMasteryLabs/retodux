import React from 'react'
import { ListGroup } from 'react-bootstrap'

export default function Todos(props) {
    return (
        <div className='mt-5'>
            <ListGroup>
                {props.todos.map(todo => (
                    <ListGroup.Item variant="primary" key={todo.id}> {todo.title} </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    )
}
