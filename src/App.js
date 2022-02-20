import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import NewTodo from './pages/NewTodo';
import TodoDetails from './pages/TodoDetails';
import Todos from './pages/Todos';

function App() {
  const todos = [
    {
      id: "1",
      title: "Todo 1",
      description: "Desc 1"
    },
    {
      id: "2",
      title: "Todo 2",
      description: "Desc 2"
    },
  ]
  return (
    <>
      <Router>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path='/' component={() => <Todos todos={todos} />} />
            <Route path='/new-todo' component={NewTodo} />
            <Route path='/todos/:id' component={TodoDetails} />
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
