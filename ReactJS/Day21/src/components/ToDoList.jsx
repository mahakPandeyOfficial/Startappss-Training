import React, { useReducer, useState } from 'react';

// Step 1: Reducer function
function todoReducer(state, action) {   //Here Reducer fucntion has two parameters State and Action
  // The reducer function takes the current state and an action, and returns the new state
  switch (action.type) {   //Here switch case is used to check the action type
    case 'ADD':  //Add is action type here
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false }    //here we are adding new todo and setting  the completed toggle to false.
      ];

    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }  //Here we are toggling the completed state of the todo
          : todo
      );

    case 'DELETE':
      return state.filter(todo => todo.id !== action.payload);   //Here we are deleting the todo by filtering it out from the state



    default:
      return state;
  }
}

// Step 2: Component
function ToDoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);   //Here we are using useReducer hook to manage the state of the todos and passing the reducer function and initial state as an empty array.
  const [input, setInput] = useState('');   //Here we are using useState hook to manage the state of the input field.

  const handleAdd = () => {
    if (input.trim() === '') return;
    dispatch({ type: 'ADD', payload: input });  //in this line we are dispatching the action to add the todo
    setInput('');
  };

  return (
    <div style={{ padding: '1rem' }}>
      <h1>📝 To-Do List</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAdd}>Add</button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ marginTop: '0.5rem' }}>
            <span
              onClick={() => dispatch({ type: 'TOGGLE', payload: todo.id })}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                cursor: 'pointer'
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => dispatch({ type: 'DELETE', payload: todo.id })}
              style={{ marginLeft: '1rem' }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
