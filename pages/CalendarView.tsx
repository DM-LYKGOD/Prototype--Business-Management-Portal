import React from 'react';
import Icon from '../components/Icon';

const CalendarView: React.FC = () => {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const calendarDays = [
        { day: 29, isCurrentMonth: false }, { day: 30, isCurrentMonth: false },
        { day: 1, isCurrentMonth: true }, { day: 2, isCurrentMonth: true },
        { day: 3, isCurrentMonth: true, event: { title: 'System Maintenance', color: 'bg-teal-100 dark:bg-teal-900/60 text-teal-800 dark:text-teal-200'} },
        { day: 4, isCurrentMonth: true },
        { day: 5, isCurrentMonth: true, event: { title: 'Fire Extinguisher Inspection', color: 'bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200'} },
        { day: 6, isCurrentMonth: true }, { day: 7, isCurrentMonth: true },
        { day: 8, isCurrentMonth: true, event: { title: 'Client Invoice Due: Acme Corp', color: 'bg-rose-100 dark:bg-rose-900/60 text-rose-800 dark:text-rose-200'} },
        { day: 9, isCurrentMonth: true }, { day: 10, isCurrentMonth: true }, { day: 11, isCurrentMonth: true }, { day: 12, isCurrentMonth: true },
        { day: 13, isCurrentMonth: true }, { day: 14, isCurrentMonth: true, isToday: true }, { day: 15, isCurrentMonth: true }, { day: 16, isCurrentMonth: true },
        { day: 17, isCurrentMonth: true }, { day: 18, isCurrentMonth: true }, { day: 19, isCurrentMonth: true },
        { day: 20, isCurrentMonth: true, event: { title: 'Server Upgrade - Wing B', color: 'bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200'} },
        { day: 21, isCurrentMonth: true }, { day: 22, isCurrentMonth: true }, { day: 23, isCurrentMonth: true }, { day: 24, isCurrentMonth: true },
        { day: 25, isCurrentMonth: true }, { day: 26, isCurrentMonth: true }, { day: 27, isCurrentMonth: true }, { day: 28, isCurrentMonth: true },
        { day: 29, isCurrentMonth: true }, { day: 30, isCurrentMonth: true }, { day: 31, isCurrentMonth: true },
        { day: 1, isCurrentMonth: false }, { day: 2, isCurrentMonth: false }
    ];

  return (
    <div className="p-6 lg:p-10">
      <div className="mx-auto flex h-full max-w-7xl flex-col">
        <div className="flex flex-wrap items-center justify-between gap-4 py-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-subtext-light dark:text-subtext-dark">
              <button className="flex size-10 items-center justify-center rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-200"><Icon name="chevron_left" /></button>
              <button className="flex size-10 items-center justify-center rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-200"><Icon name="chevron_right" /></button>
            </div>
            <p className="text-xl font-semibold text-text-light dark:text-text-dark">October 2024</p>
          </div>
          <button className="flex h-10 items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary px-4 text-white hover:bg-primary/90 text-sm font-bold transition-all duration-200 transform hover:scale-105">
            <Icon name="add" /><span>Add Event</span>
          </button>
        </div>
        <div className="flex flex-1 flex-col rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark shadow-sm overflow-hidden">
          <div className="grid grid-cols-7 border-b border-border-light dark:border-border-dark">
            {days.map(day => <p key={day} className="py-3 text-center text-xs font-bold uppercase tracking-wider text-subtext-light dark:text-subtext-dark">{day}</p>)}
          </div>
          <div className="grid grid-cols-7 grid-rows-5 flex-1">
            {calendarDays.map((d, i) => (
                <div key={i} className={`border-b border-r border-border-light dark:border-border-dark p-2 text-right transition-colors duration-200 ${!d.isCurrentMonth ? 'bg-background-light/50 dark:bg-background-dark/50' : 'hover:bg-primary/5'}`}>
                    <span className={`font-medium ${d.isCurrentMonth ? 'text-text-light dark:text-text-dark' : 'text-subtext-light/50 dark:text-subtext-dark/50'} ${d.isToday ? 'relative z-10 flex size-7 items-center justify-center rounded-full bg-primary text-white font-bold shadow-lg' : ''}`}>{d.day}</span>
                    {d.event && <div className={`mt-1 rounded-md p-1 text-xs text-left transition-all duration-200 transform hover:scale-105 hover:shadow-md ${d.event.color}`}>{d.event.title}</div>}
                </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;