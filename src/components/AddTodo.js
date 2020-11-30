import React, { useState } from 'react';
import { addTodo } from '../redux/actions';
import { connect } from 'react-redux';

function AddTodo({ addTodo }) {
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    addTodo(input);
    setInput('');
  };

  return (
    <div>
      <input onChange={(e) => setInput(e.target.value)} value={input} />
      <button className="add-todo" onClick={handleAddTodo}>
        Add Todo
      </button>
    </div>
  );
}

export default connect(null, { addTodo })(AddTodo);
