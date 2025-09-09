'use client';

import { useState } from 'react';
import { Task, NewTask } from '../types';
import { useTasks } from '../hooks/useTasks';
import { useWeekNavigation } from '../hooks/useWeekNavigation';
import Header from '../components/Header';
import KanbanBoard from '../components/KanbanBoard';
import TaskModal from '../components/TaskModal';
import '../styles/index.css';
import '../styles/header.css';
import '../styles/kanban.css';
import '../styles/task.css';
import '../styles/modal.css';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [editingTask, setEditingTask] = useState<Task | null>(null);
  const [selectedDay, setSelectedDay] = useState('Понедельник');

  const { 
    addTask, 
    updateTask, 
    deleteTask, 
    toggleTask, 
    getTasksForDay 
  } = useTasks();

  const { 
    weekDates, 
    goToPreviousWeek, 
    goToNextWeek, 
    goToCurrentWeek 
  } = useWeekNavigation();

  const handleAddTask = (day: string) => {
    setSelectedDay(day);
    setEditingTask(null);
    setShowModal(true);
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
    setShowModal(true);
  };

  const handleSaveTask = (newTask: NewTask) => {
    const taskToSave = { ...newTask, day: selectedDay };
    addTask(taskToSave);
    setShowModal(false);
  };

  const handleUpdateTask = (updatedTask: Task) => {
    updateTask(updatedTask);
    setShowModal(false);
    setEditingTask(null);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingTask(null);
  };

  return (
    <div className="app">
      <Header
        weekDates={weekDates}
        onPreviousWeek={goToPreviousWeek}
        onNextWeek={goToNextWeek}
        onCurrentWeek={goToCurrentWeek}
      />

      <main className="main-content">
        <KanbanBoard
          weekDates={weekDates}
          onAddTask={handleAddTask}
          onToggleTask={toggleTask}
          onEditTask={handleEditTask}
          onDeleteTask={deleteTask}
          getTasksForDay={getTasksForDay}
        />
      </main>

      <TaskModal
        isOpen={showModal}
        editingTask={editingTask}
        onClose={handleCloseModal}
        onSave={handleSaveTask}
        onUpdate={handleUpdateTask}
      />
    </div>
  );
}