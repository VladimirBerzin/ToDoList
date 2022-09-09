import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Row, Col, Button, FormControl } from 'react-bootstrap';
import s from './AddTodoForm.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

function Addtodo({ todo, setTodo }) {
  const [value, setValue] = useState('');

  function saveTodo() {
    if (value) {
      setTodo([
        ...todo,
        {
          id: uuidv4(),
          title: value,
          status: true,
        },
      ]);
      setValue('');
    }
  }
  return (
    <Row>
      <Col className={s.addTodoForm}>
        <FormControl
          placeholder="new task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button onClick={saveTodo} className={s.btn}>
          <FontAwesomeIcon icon={faPlus} />
        </Button>
      </Col>
    </Row>
  );
}

export default Addtodo;
