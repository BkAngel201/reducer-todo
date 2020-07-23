import React, { useState, useReducer } from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'
import './components/Todo.css'

import {
  initialListState,
  listReducer,
  ADD_TODO,
  COMPLETE_TODO,
  CLEAR_COMPLETED_TODO
} from './reducers/index'

function App() {
  const [search, setSearch] = useState(false)
  const [state, dispatch] = useReducer(listReducer, initialListState);

  const addTask = (data) => {
    let payload =
        {
          task: data.task,
          id: Date.now(),
          completed: false,
          tags: data.tags
        }
    dispatch({ type: ADD_TODO, payload: payload });
  }

  const completeTask = id => {
    
    dispatch({ type: COMPLETE_TODO, payload: id });
  }

  const clearCompleted = () => {
    dispatch({ type: CLEAR_COMPLETED_TODO });
  }

  const searchTask = searchString => {
    if (searchString === '') {
      setSearch(false)
    } else {
      setSearch(searchString)
    }
  }

    return (
      <div className="app">
        <TodoForm addTask={addTask} clearCompleted={clearCompleted} searchTask={searchTask} search={search}/>
        <TodoList todoList={state} completeTask={completeTask} search={search}/>
      </div>
    );
}

export default App;
