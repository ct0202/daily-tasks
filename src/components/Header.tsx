
interface HeaderProps {
  weekDates: Date[];
  onPreviousWeek: () => void;
  onNextWeek: () => void;
  onCurrentWeek: () => void;
}

export default function Header({ weekDates, onPreviousWeek, onNextWeek, onCurrentWeek }: HeaderProps) {
  return (
    <header className="header">
      <div className="header-content">
        <h1 className="app-title">Daily Tasks</h1>
        <div className="week-navigation">
          <button className="nav-button" onClick={onPreviousWeek}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="week-info">
            <span className="week-text">
              {weekDates[0].toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit' })} - 
              {weekDates[6].toLocaleDateString('ru-RU', { day: '2-digit', month: '2-digit', year: 'numeric' })}
            </span>
          </div>
          <button className="nav-button" onClick={onNextWeek}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
        <button className="current-week-btn" onClick={onCurrentWeek}>
          Сегодня
        </button>
      </div>
    </header>
  );
}
