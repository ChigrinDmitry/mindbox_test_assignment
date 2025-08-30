import './App.css';
import { Task } from './types';
import { use, useState } from 'react';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <>
      <h1>To-Do List</h1>
    </>
  )
}

export default App
