import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import Collaborators from './pages/Collaborators';
import NewCollaborator from './pages/NewCollaborator';
import NewTodo from './pages/NewTodo';
import TodoDetails from './pages/TodoDetails';
import Todos from './pages/Todos';
import UpdateTodo from './pages/UpdateTodo';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path='/' component={(props) => <Todos {...props} />} />
            <Route path='/new-todo' component={(props) => <NewTodo {...props} /> } />
            <Route path='/update-todo/:id' component={UpdateTodo} />
            <Route path='/todos/:id' component={(props) => <TodoDetails {...props} />} />
            <Route path='/collaborators' component={Collaborators} />
            <Route path='/new-collaborator' component={NewCollaborator} />
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
