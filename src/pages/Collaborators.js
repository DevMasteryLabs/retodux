import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import CollaboratorCard from '../components/CollaboratorCard';

function Collaborators() {
  const collaborators = useSelector(state => state.collaborators)
  console.log({ collaborators });
  return (
    <>
      <div className='d-flex mt-5 justify-content-end'>
        <Link to="/new-collaborator">
          <Button variant="success" type="submit">
            Add collaborator
          </Button>
        </Link>
      </div>
      <Form>
        <div className='row mt-4'>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              Filter collaborators by email.
            </Form.Text>
          </Form.Group>
        </div>
      </Form>
      <div className='row mt-5'>
        {
          collaborators.map(collaborator => <CollaboratorCard key={collaborator.id} collaborator={collaborator} />)
        }
      </div>
    </>
  )
}

export default Collaborators