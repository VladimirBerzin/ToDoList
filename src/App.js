import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Addtodo from './components/Addtodo/Addtodo';
import Todolist from './components/Todolist/Todolist';
import { Container } from 'react-bootstrap';
function App() {
  const [todo, setTodo] = useState([
    {
      id: 1,
      title: 'first todo',
      status: true,
    },
    {
      id: 2,
      title: 'second todo',
      status: true,
    },
    {
      id: 3,
      title: 'third todo',
      status: false,
    },
  ]);

  return (
    <Container className="App">
      <Header />
      <Addtodo todo={todo} setTodo={setTodo} />
      <Todolist todo={todo} setTodo={setTodo} />
    </Container>
  );
}

export default App;
