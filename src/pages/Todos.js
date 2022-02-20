import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import DeleteTodoModal from '../components/DeleteTodoModal'

export default function Todos(props) {
    const handleConfirmDelete = (id) => {
        props.onDelete(id)
    }
    return (
        <div className='mt-5'>
            <ListGroup>
                {props.todos.map(todo => (
                    <ListGroup.Item 
                        variant="primary" 
                        key={todo.id} 
                        className="d-flex justify-content-between align-items-center"
                    >
                        <span>{todo.title}</span>
                        <div>
                            <Link to={`/todos/${todo.id}`}>
                                <i class="bi bi-eye-fill fs-3 text-primary btn"></i>                            
                            </Link>
                            <DeleteTodoModal todo={todo} onConfirmDelete={handleConfirmDelete} />    
                        </div> 
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    )
}
