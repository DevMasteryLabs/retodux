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
                        <div>
                            {
                                todo.completed
                                    ? <i className="bi bi-check-square-fill fs-3 text-secondary btn" onClick={() => props.onToggleCompleted(todo.id)}></i>
                                    : <i className="bi bi-square fs-3 text-secondary btn" onClick={() => props.onToggleCompleted(todo.id)}></i>
                            }
                            <span>{todo.title}</span>
                        </div>
                        <div>
                            <Link to={`/todos/${todo.id}`}>
                                <i className="bi bi-eye-fill fs-3 text-primary btn"></i>
                            </Link>
                            <DeleteTodoModal todo={todo} onConfirmDelete={handleConfirmDelete} />
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    )
}
