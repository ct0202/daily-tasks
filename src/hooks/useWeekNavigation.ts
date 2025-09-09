import { useState } from 'react';
import { getWeekDates, navigateWeek } from '../utils/dateUtils';

export const useWeekNavigation = () => {
  const [currentWeek, setCurrentWeek] = useState(new Date());

  const weekDates = getWeekDates(currentWeek);

  const goToPreviousWeek = () => {
    setCurrentWeek(prev => navigateWeek(prev, 'prev'));
  };

  const goToNextWeek = () => {
    setCurrentWeek(prev => navigateWeek(prev, 'next'));
  };

  const goToCurrentWeek = () => {
    setCurrentWeek(new Date());
  };

  return {
    currentWeek,
    weekDates,
    goToPreviousWeek,
    goToNextWeek,
    goToCurrentWeek
  };
};
