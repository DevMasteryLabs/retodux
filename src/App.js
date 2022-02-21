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
      title: "Learn Node.js",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officia culpa ipsum qui minima atque dolor suscipit quis cum accusamus",
      completed: false
    },
    {
      id: "2",
      title: "Learn MongoDB",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos officia culpa ipsum qui minima atque dolor suscipit quis cum accusamus",
      completed: false
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
  const handleToggleCompleted = (id) => {
    setTodos(prevTodos => prevTodos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      } else {
        return todo
      }
    }))
  }
  return (
    <>
      <Router>
        <Navbar />
        <Container>
          <Switch>
            <Route exact path='/' component={() => <Todos todos={todos} onDelete={handleDelete} onToggleCompleted={handleToggleCompleted} />} />
            <Route path='/new-todo' component={(props) => <NewTodo {...props} onAddTodo={handleAddTodo} /> } />
            <Route path='/todos/:id' component={(props) => <TodoDetails {...props} todos={todos} />} />
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
