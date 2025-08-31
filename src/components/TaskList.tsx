import { List, Typography } from 'antd';
import type { Task } from '../types';
import TaskItem from './TaskItem';

interface Props {
  tasks: Task[];
  onToggle(id: string): void;
}

const TaskList = ({ tasks, onToggle }: Props) => {
  if (!tasks.length) return null;

  return (
    <>
      <List
        dataSource={tasks}
        renderItem={(task) => (
          <TaskItem key={task.id} task={task} onToggle={onToggle}></TaskItem>
        )}
      ></List>
    </>
  );
};

export default TaskList;
