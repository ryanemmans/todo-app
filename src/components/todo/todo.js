import React, { useEffect, useState } from 'react';
import useForm from '../../hooks/form.js';
// import Header from '../header/Header.js';
import './todo.scss';
import { Label, Button } from '@blueprintjs/core';

import { v4 as uuid } from 'uuid';

const ToDo = () => {

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const { handleChange, handleSubmit } = useForm(addItem);

  function addItem(item) {
    console.log(item);
    item.id = uuid();
    item.complete = false;
    setList([...list, item]);
  }

  function deleteItem(id) {
    const items = list.filter(item => item.id !== id);
    setList(items);
  }

  function toggleComplete(id) {

    const items = list.map(item => {
      if (item.id === id) {
        item.complete = !item.complete;
      }
      return item;
    });

    setList(items);
  }

  useEffect(() => {
    let incompleteCount = list.filter(item => !item.complete).length;
    setIncomplete(incompleteCount);
    document.title = `To Do List: ${incomplete}`;
  }, [list]);

  return (
    
    <>
      <header>
        <h1 id="title">To Do List: {incomplete} items pending</h1>
      </header>

      <section className="todo">
        <form className="form" onSubmit={handleSubmit}>
          <h2>Add To Do Item</h2>

          <Label>
            <span>To Do Item </span>
            <input onChange={handleChange} name="text" type="text" placeholder="Item Details" />
          </Label>

          <Label>
            <span>Assigned To </span>
            <input onChange={handleChange} name="assignee" type="text" placeholder="Assignee Name" />
          </Label>

          <Label>
            <span>Difficulty </span>
            <input onChange={handleChange} defaultValue={3} type="range" min={1} max={5} name="difficulty" />
          </Label>

          <Label>
            <Button icon="add" large="large" intent="primary" type="submit" text="Add Item" />
          </Label>
        </form>

        {list.map(item => (

          <div className="list" key={item.id}>
            <p>{item.text}</p>
            <p><small>Assigned to: {item.assignee}</small></p>
            <p><small>Difficulty: {item.difficulty}</small></p>
            <div onClick={() => toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
            <hr />
          </div>
        ))}

      </section>
    </>
  );
};

export default ToDo;
