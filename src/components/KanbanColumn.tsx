import { Task } from '../types';
import TaskCard from './TaskCard';

interface KanbanColumnProps {
  day: string;
  date: Date;
  tasks: Task[];
  onAddTask: (day: string) => void;
  onToggleTask: (id: string) => void;
  onEditTask: (task: Task) => void;
  onDeleteTask: (id: string) => void;
}

export default function KanbanColumn({ 
  day, 
  date, 
  tasks, 
  onAddTask, 
  onToggleTask, 
  onEditTask, 
  onDeleteTask 
}: KanbanColumnProps) {
  return (
    <div className="kanban-column">
      <div className="column-header">
        <h3 className="day-name">{day}</h3>
        <span className="day-date">
          {date.toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit' })}
        </span>
        <button 
          className="add-task-btn"
          onClick={() => onAddTask(day)}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 5V19M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>
      <div className="tasks-container">
        {tasks.map(task => (
          <TaskCard
            key={task.id}
            task={task}
            onToggle={onToggleTask}
            onEdit={onEditTask}
            onDelete={onDeleteTask}
          />
        ))}
      </div>
    </div>
  );
}
