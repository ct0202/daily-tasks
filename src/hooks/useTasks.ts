import { useState } from 'react';
import { Task, NewTask } from '../types';

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (newTask: NewTask) => {
    if (newTask.title.trim()) {
      const task: Task = {
        id: Date.now().toString(),
        ...newTask,
        completed: false
      };
      setTasks(prev => [...prev, task]);
    }
  };

  const updateTask = (updatedTask: Task) => {
    if (updatedTask.title.trim()) {
      setTasks(prev => prev.map(task => 
        task.id === updatedTask.id ? updatedTask : task
      ));
    }
  };

  const deleteTask = (id: string) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const toggleTask = (id: string) => {
    setTasks(prev => prev.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const getTasksForDay = (day: string) => {
    return tasks.filter(task => task.day === day);
  };

  return {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    toggleTask,
    getTasksForDay
  };
};
