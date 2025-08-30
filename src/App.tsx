import './App.css';
import type { Task } from './types';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <>
      <h1>To-Do List</h1>
    </>
  )
}

export default App
