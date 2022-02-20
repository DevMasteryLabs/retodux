import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import NewTodo from './pages/NewTodo';
import TodoDetails from './pages/TodoDetails';
import Todos from './pages/Todos';

function App() {
  const [todos, setTodos] = useState([
    {
      id: "1",
      title: "Todo 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officia culpa ipsum qui minima atque dolor suscipit quis cum accusamus"
    },
    {
      id: "2",
      title: "Todo 2",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officia culpa ipsum qui minima atque dolor suscipit quis cum accusamus"
    },
  ])
  const handleAddTodo = todo => {
    const newTodoId = Math.floor(Math.random()*10000).toString()
    const newTodo = {
      ...todo,
      id: newTodoId
    }
    console.log(newTodo);
    setTodos(prevTodos => [...prevTodos, newTodo])
  }
  const handleDelete = (id) => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }
  return (
    <>
      <Router>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path='/' component={() => <Todos todos={todos} onDelete={handleDelete} />} />
            <Route path='/new-todo' component={(props) => <NewTodo {...props} onAddTodo={handleAddTodo} /> } />
            <Route path='/todos/:id' component={TodoDetails} />
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
