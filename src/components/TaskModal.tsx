import { useState, useEffect } from 'react';
import { Task, NewTask } from '../types';
import { daysOfWeek } from '../utils/dateUtils';

interface TaskModalProps {
  isOpen: boolean;
  editingTask: Task | null;
  onClose: () => void;
  onSave: (task: NewTask) => void;
  onUpdate: (task: Task) => void;
}

export default function TaskModal({ isOpen, editingTask, onClose, onSave, onUpdate }: TaskModalProps) {
  const [formData, setFormData] = useState<NewTask>({
    title: '',
    description: '',
    day: 'Понедельник',
    priority: 'medium'
  });

  useEffect(() => {
    if (editingTask) {
      setFormData({
        title: editingTask.title,
        description: editingTask.description,
        day: editingTask.day,
        priority: editingTask.priority
      });
    } else {
      setFormData({
        title: '',
        description: '',
        day: 'Понедельник',
        priority: 'medium'
      });
    }
  }, [editingTask, isOpen]);

  const handleSubmit = () => {
    if (editingTask) {
      onUpdate({ ...editingTask, ...formData });
    } else {
      onSave(formData);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h2>{editingTask ? 'Редактировать задачу' : 'Новая задача'}</h2>
          <button className="close-btn" onClick={onClose}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <div className="modal-content">
          <div className="form-group">
            <label>Название</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Введите название задачи"
            />
          </div>
          <div className="form-group">
            <label>Описание</label>
            <textarea
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Введите описание задачи"
              rows={3}
            />
          </div>
          <div className="form-group">
            <label>День недели</label>
            <select
              value={formData.day}
              onChange={(e) => setFormData({ ...formData, day: e.target.value })}
            >
              {daysOfWeek.map(day => (
                <option key={day} value={day}>{day}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label>Приоритет</label>
            <select
              value={formData.priority}
              onChange={(e) => setFormData({ ...formData, priority: e.target.value as 'low' | 'medium' | 'high' })}
            >
              <option value="low">Низкий</option>
              <option value="medium">Средний</option>
              <option value="high">Высокий</option>
            </select>
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn-secondary" onClick={onClose}>
            Отмена
          </button>
          <button className="btn-primary" onClick={handleSubmit}>
            {editingTask ? 'Сохранить' : 'Добавить'}
          </button>
        </div>
      </div>
    </div>
  );
}
