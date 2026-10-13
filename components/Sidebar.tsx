import React from 'react';
import type { ViewType } from '../types';
import Icon from './Icon';

interface SidebarProps {
  activeView: ViewType;
  setActiveView: (view: ViewType) => void;
  onLogout: () => void;
  isMobileOpen: boolean;
  setIsMobileOpen: (isOpen: boolean) => void;
}

const navItems: { name: ViewType; icon: string }[] = [
  { name: 'Dashboard', icon: 'monitoring' },
  { name: 'Facility Management', icon: 'apartment' },
  { name: 'Machine Management', icon: 'precision_manufacturing' },
  { name: 'Ticket Solving', icon: 'support_agent' },
  { name: 'Task Management', icon: 'task_alt' },
  { name: 'Calendar', icon: 'calendar_month' },
  { name: 'Recommendations', icon: 'lightbulb' },
  { name: 'Chatbot', icon: 'smart_toy' },
  { name: 'Admin', icon: 'shield_person' },
];

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView, onLogout, isMobileOpen, setIsMobileOpen }) => {
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 z-20 lg:hidden transition-opacity ${
          isMobileOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileOpen(false)}
        aria-hidden="true"
      ></div>
      <aside 
        className={`flex-shrink-0 bg-surface-light dark:bg-surface-dark border-r border-border-light dark:border-border-dark flex flex-col fixed inset-y-0 left-0 h-full z-30 transition-all duration-300 ease-in-out lg:relative lg:translate-x-0 w-64 ${
          isMobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="p-4 flex flex-col gap-4 h-full overflow-y-auto overflow-x-hidden">
          <div className="flex items-center gap-3 fade-in-up h-[48px]">
            <Icon name="insights" className="text-primary text-4xl flex-shrink-0" />
            <div className="flex flex-col overflow-hidden">
              <h1 className="text-text-light dark:text-text-dark text-lg font-bold whitespace-nowrap">Genius HR</h1>
              <p className="text-subtext-light dark:text-subtext-dark text-sm whitespace-nowrap">tech</p>
            </div>
          </div>
          <nav className="flex flex-col gap-2 mt-6">
            {navItems.map((item, index) => (
              <a
                key={item.name}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveView(item.name);
                }}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition-all duration-200 transform hover:translate-x-1 ${
                  activeView === item.name
                    ? 'bg-primary/10 text-primary'
                    : 'text-subtext-light dark:text-subtext-dark hover:bg-black/5 dark:hover:bg-white/5'
                }`}
                 style={{ animationDelay: `${100 + index * 50}ms` }}
              >
                <Icon name={item.icon} className={`text-2xl ${activeView === item.name ? 'text-primary' : 'text-subtext-light dark:text-subtext-dark'}`} isFilled={activeView === item.name} />
                <p className={`text-sm font-medium whitespace-nowrap ${activeView === item.name ? 'text-primary font-semibold' : 'text-text-light dark:text-text-dark'}`}>{item.name}</p>
              </a>
            ))}
          </nav>
          <div className="mt-auto space-y-2">
            <a href="#" onClick={(e) => { e.preventDefault(); onLogout(); }} className="flex items-center gap-3 px-3 py-2 rounded-lg text-subtext-light dark:text-subtext-dark hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-200">
              <Icon name="logout" className="text-2xl" />
              <p className="text-sm font-medium whitespace-nowrap">Logout</p>
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;