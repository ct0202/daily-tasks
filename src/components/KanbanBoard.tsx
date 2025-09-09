import { Task } from '../types';
import { daysOfWeek } from '../utils/dateUtils';
import KanbanColumn from './KanbanColumn';

interface KanbanBoardProps {
  weekDates: Date[];
  onAddTask: (day: string) => void;
  onToggleTask: (id: string) => void;
  onEditTask: (task: Task) => void;
  onDeleteTask: (id: string) => void;
  getTasksForDay: (day: string) => Task[];
}

export default function KanbanBoard({ 
  weekDates, 
  onAddTask, 
  onToggleTask, 
  onEditTask, 
  onDeleteTask, 
  getTasksForDay 
}: KanbanBoardProps) {
  return (
    <div className="kanban-board">
      {daysOfWeek.map((day, index) => (
        <KanbanColumn
          key={day}
          day={day}
          date={weekDates[index]}
          tasks={getTasksForDay(day)}
          onAddTask={onAddTask}
          onToggleTask={onToggleTask}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
}
