import './App.css';
import TaskInput from './components/TaskInput';
import type { Task } from './types';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  return (
    <>
      <h1>To-Do List</h1>
      <TaskInput />
    </>
  )
}

export default App
