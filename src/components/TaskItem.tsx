import { List, Checkbox } from 'antd';
import type { Task } from '../types/index.ts';

interface Props {
  task: Task;
  onToggle(id: string): void;
}

const TaskItem = ({ task, onToggle }: Props) => {
  return (
    <List.Item>
      <Checkbox checked={task.done} onChange={() => onToggle(task.id)}>
        <span style={{ textDecoration: task.done ? 'line-through' : 'none' }}>
          {task.title}
        </span>
      </Checkbox>
    </List.Item>
  );
};

export default TaskItem;
