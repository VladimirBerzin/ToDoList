import React, { useEffect, useState } from 'react';
import { Row, Col, Button, ButtonGroup, FormControl } from 'react-bootstrap';
import s from './Todolist.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faEdit, faTrashCan, faLock, faLockOpen } from '@fortawesome/free-solid-svg-icons';

function Todolist({ todo, setTodo }) {
  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState('');
  const [filtered, setFiltered] = useState(todo);

  useEffect(() => {
    setFiltered(todo);
  }, [todo]);

  function todoFilter(status) {
    if (status === 'all') {
      setFiltered(todo);
    } else {
      let newTodo = [...todo].filter((item) => item.status === status);
      setFiltered(newTodo);
    }
  }

  function deleteTodo(id) {
    let newTodo = [...todo].filter((item) => item.id != id);
    setTodo(newTodo);
  }
  function statusTodo(id) {
    let newTodo = [...todo].filter((item) => {
      if (item.id == id) {
        item.status = !item.status;
      }
      return item;
    });
    setTodo(newTodo);
  }
  function editTodo(id, title) {
    setEdit(id);
    setValue(title);
  }
  function saveTodo(id) {
    let newTodo = [...todo].map((item) => {
      if (item.id == id) {
        item.title = value;
      }
      return item;
    });
    setTodo(newTodo);
    setEdit(null);
  }
  return (
    <div className={s.TodoListLayaut}>
      <row>
        <ButtonGroup className={s.filter} size=" sm " aria-label="Basic example">
          <Button variant="secondary" onClick={() => todoFilter('all')}>
            all
          </Button>
          <Button variant="secondary" onClick={() => todoFilter(true)}>
            open
          </Button>
          <Button variant="secondary" onClick={() => todoFilter(false)}>
            close
          </Button>
        </ButtonGroup>
      </row>
      {filtered.map((item) => (
        <div key={item.id} className={s.listItems}>
          {edit == item.id ? (
            <div className={s.newTask}>
              <FormControl value={value} onChange={(e) => setValue(e.target.value)} />
            </div>
          ) : (
            <div className={!item.status ? s.close : ''}>{item.title}</div>
          )}
          {edit == item.id ? (
            <div>
              <Button onClick={() => saveTodo(item.id)} className={s.btn}>
                <FontAwesomeIcon icon={faSave} />
              </Button>
            </div>
          ) : (
            <div>
              <Button onClick={() => deleteTodo(item.id)} size="sm">
                <FontAwesomeIcon icon={faTrashCan} />
              </Button>
              <Button onClick={() => editTodo(item.id, item.title)} className={s.btn} size="sm">
                <FontAwesomeIcon icon={faEdit} />
              </Button>
              <Button
                variant={item.status ? 'primary' : 'secondary'}
                onClick={() => statusTodo(item.id)}
                className={s.btn}
                size="sm">
                {item.status ? (
                  <FontAwesomeIcon icon={faLockOpen} />
                ) : (
                  <FontAwesomeIcon icon={faLock} />
                )}
              </Button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Todolist;
