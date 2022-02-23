import React from 'react'
import { ListGroup } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import DeleteTodoModal from '../components/DeleteTodoModal'
import { toggleTodoCompleted } from '../redux/actions/todosActionCreators'

export default function Todos(props) {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    return (
        <div className='mt-5'>
            <ListGroup>
                {todos.map(todo => (
                    <ListGroup.Item
                        variant="primary"
                        key={todo.id}
                        className="d-flex justify-content-between align-items-center"
                    >
                        <div>
                            {
                                todo.completed
                                    ? <i className="bi bi-check-square-fill fs-3 text-secondary btn" onClick={() => dispatch(toggleTodoCompleted(todo.id))}></i>
                                    : <i className="bi bi-square fs-3 text-secondary btn" onClick={() => dispatch(toggleTodoCompleted(todo.id))}></i>
                            }
                            <span>{todo.title}</span>
                        </div>
                        <div>
                            <Link to={`/todos/${todo.id}`}>
                                <i className="bi bi-eye-fill fs-3 text-primary btn"></i>
                            </Link>
                            <DeleteTodoModal todo={todo} />
                        </div>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </div>
    )
}
