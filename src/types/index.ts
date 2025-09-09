export interface Task {
  id: string;
  title: string;
  description: string;
  day: string;
  priority: 'low' | 'medium' | 'high';
  completed: boolean;
}

export interface NewTask {
  title: string;
  description: string;
  day: string;
  priority: 'low' | 'medium' | 'high';
}
