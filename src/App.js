import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddTodoAction, RemoveTodoAction } from './actions/TodoActions';
import './App.css';

function App() {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();
  const Todo = useSelector((state) => state.Todo);
  const { todos } = Todo;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(AddTodoAction(todo))
  }

  const handleDelete = (todo) => {
    dispatch(RemoveTodoAction(todo))
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo List App in Redux</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder='Enter a Todo'
            style={{
              width: 350,
              border: "none",
              borderRadius: 20,
              padding: 12,
              fontSize: 18
            }}
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
          />
          <button
            type="submit"
            style={{
              padding: 12,
              borderRadius: 25,
              fontSize: 15,
              marginLeft: 20,
              cursor: "pointer"
            }}
          >Go</button>
        </form>
        <ul className='allTodos'>
          {
            todos && todos.map(item => (
              <li key={item.id} className='singleTodo'>
                <span className='todoText'>{item.todo}</span>
                <button
                  style={{
                    borderRadius: 25,
                    padding: 10,
                    color: "white",
                    backgroundColor: "blueviolet",
                    cursor: "pointer",
                    border: "1px solid white"
                  }}
                  onClick={() => handleDelete(item)}>Delete</button>
              </li>
            ))
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
