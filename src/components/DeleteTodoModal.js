import React, { useState } from 'react'
import { Button, Modal, Table } from 'react-bootstrap';

export default function DeleteTodoModal({todo, onConfirmDelete}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <i className="bi bi-trash fs-3 text-danger btn" onClick={handleShow}></i>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Delete ToDo</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Are you sure that you wanna delete this todo?</p>
                    <Table  bordered>
                        <tbody>
                            <tr>
                                <td>Title</td>
                                <td> {todo.title} </td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td> {todo.description} </td>
                            </tr>
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={() => onConfirmDelete(todo.id)}>
                        Yes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

