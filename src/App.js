import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './components/Navbar';
import NewTodo from './pages/NewTodo';
import TodoDetails from './pages/TodoDetails';
import Todos from './pages/Todos';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Todos} />
          <Route path='/new-todo' component={NewTodo} />
          <Route path='/todos/:id' component={TodoDetails} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
