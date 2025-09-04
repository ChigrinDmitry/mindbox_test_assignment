import './App.css';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { Tabs } from 'antd';
import Footer from './components/Footer';
import useTasks from './hooks/useTasks';

const { TabPane } = Tabs;

const App = () => {
  const { tasks, remaining, completed, addTask, toggleTask, clearCompleted } =
    useTasks();

  return (
    <>
      <h1>To-Do List</h1>
      <TaskInput onAdd={addTask} />

      <Tabs defaultActiveKey="all">
        <TabPane tab={`All (${tasks.length})`} key="all">
          <TaskList tasks={tasks} onToggle={toggleTask}></TaskList>
        </TabPane>
        <TabPane tab={`Active (${remaining.length})`} key="remaining">
          <TaskList tasks={remaining} onToggle={toggleTask}></TaskList>
        </TabPane>
        <TabPane tab={`Completed (${completed.length})`} key="completed">
          <TaskList tasks={completed} onToggle={toggleTask}></TaskList>
        </TabPane>
      </Tabs>

      <Footer
        remainingCount={remaining.length}
        completedCount={completed.length}
        onClearCompleted={clearCompleted}
      />
    </>
  );
};

export default App;
