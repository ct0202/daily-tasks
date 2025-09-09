export const daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

export const getWeekDates = (date: Date): Date[] => {
  const start = new Date(date);
  const day = start.getDay();
  const diff = start.getDate() - day + (day === 0 ? -6 : 1);
  start.setDate(diff);
  
  const dates = [];
  for (let i = 0; i < 7; i++) {
    const current = new Date(start);
    current.setDate(start.getDate() + i);
    dates.push(current);
  }
  return dates;
};

export const navigateWeek = (currentWeek: Date, direction: 'prev' | 'next'): Date => {
  const newDate = new Date(currentWeek);
  newDate.setDate(currentWeek.getDate() + (direction === 'next' ? 7 : -7));
  return newDate;
};

export const getPriorityColor = (priority: string): string => {
  switch (priority) {
    case 'high': return '#ff3b30';
    case 'medium': return '#ff9500';
    case 'low': return '#34c759';
    default: return '#8e8e93';
  }
};
