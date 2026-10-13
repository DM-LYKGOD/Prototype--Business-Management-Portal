import React from 'react';
import Icon from './Icon';
import { ViewType } from '../types';

interface HeaderProps {
  viewTitle: string;
  setActiveView: (view: ViewType) => void;
  onMenuClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ viewTitle, setActiveView, onMenuClick }) => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-border-light dark:border-border-dark px-4 sm:px-8 py-4 bg-surface-light dark:bg-surface-dark sticky top-0 z-10">
      <div className="flex items-center gap-4">
        <button className="lg:hidden p-1 -ml-2" onClick={onMenuClick}>
          <Icon name="menu" className="text-2xl text-subtext-light dark:text-subtext-dark" />
        </button>
        <h2 className="text-text-light dark:text-text-dark text-2xl font-bold leading-tight tracking-[-0.015em]">{viewTitle}</h2>
      </div>
      <div className="flex items-center gap-4">
        <label className="hidden md:flex flex-col min-w-40 !h-10 max-w-64">
          <div className="flex w-full flex-1 items-stretch rounded-lg h-full">
            <div className="text-subtext-light dark:text-subtext-dark flex bg-background-light dark:bg-background-dark items-center justify-center pl-3 rounded-l-lg">
              <Icon name="search" className="text-2xl" />
            </div>
            <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-0 border-none bg-background-light dark:bg-background-dark h-full placeholder:text-subtext-light dark:placeholder:text-subtext-dark pl-2 text-base" placeholder="Search..." />
          </div>
        </label>
        <div className="flex gap-2">
          <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-lg size-10 bg-background-light dark:bg-background-dark text-subtext-light dark:text-subtext-dark">
            <Icon name="notifications" className="text-2xl" style={{ animation: 'ring 2.5s ease-in-out infinite', animationDelay: '3s' }} />
          </button>
        </div>
        <button onClick={() => setActiveView('Profile')} className="rounded-full ring-2 ring-primary ring-offset-2 ring-offset-surface-light dark:ring-offset-surface-dark transition-transform duration-300 hover:scale-110">
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{ backgroundImage: `url('https://i.pravatar.cc/150?u=priyanka')` }}></div>
        </button>
      </div>
    </header>
  );
};

export default Header;