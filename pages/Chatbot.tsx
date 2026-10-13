import React from 'react';
import Icon from '../components/Icon';

const Chatbot: React.FC = () => {
  return (
    <div className="flex h-full flex-col">
      <div className="flex flex-1 flex-col overflow-y-auto p-4 md:p-6 lg:p-8">
        <div className="flex flex-col gap-6 max-w-3xl mx-auto w-full">
          {/* AI Message */}
          <div className="flex items-end gap-3 w-full fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0" style={{ backgroundImage: `url('https://i.pravatar.cc/150?u=ai')`, animation: 'pulse-shadow 2.5s infinite' }}></div>
            <div className="flex flex-1 flex-col gap-1 items-start">
              <p className="text-subtext-light dark:text-subtext-dark text-[13px] font-normal leading-normal max-w-lg">Genius HR Assistant</p>
              <p className="text-base font-normal leading-normal flex max-w-lg rounded-lg px-4 py-3 bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark shadow-sm">Hello! I am the Genius HR Assistant. How can I help you with your data today?</p>
            </div>
          </div>

          {/* User Message */}
          <div className="flex items-end gap-3 w-full ml-auto justify-end fade-in-up" style={{ animationDelay: '800ms' }}>
            <div className="flex flex-1 flex-col gap-1 items-end">
              <p className="text-subtext-light dark:text-subtext-dark text-[13px] font-normal leading-normal max-w-lg text-right">You</p>
              <p className="text-base font-normal leading-normal flex max-w-lg rounded-lg px-4 py-3 bg-primary text-white">Can you show me the employee turnover rate for Q2?</p>
            </div>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0" style={{ backgroundImage: `url('https://i.pravatar.cc/150?u=priyanka')` }}></div>
          </div>

          {/* AI Message */}
          <div className="flex items-end gap-3 w-full fade-in-up" style={{ animationDelay: '1500ms' }}>
            <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-10 shrink-0" style={{ backgroundImage: `url('https://i.pravatar.cc/150?u=ai')`, animation: 'pulse-shadow 2.5s infinite' }}></div>
            <div className="flex flex-1 flex-col gap-1 items-start">
              <p className="text-subtext-light dark:text-subtext-dark text-[13px] font-normal leading-normal max-w-lg">Genius HR Assistant</p>
              <p className="text-base font-normal leading-normal flex max-w-lg rounded-lg px-4 py-3 bg-surface-light dark:bg-surface-dark text-text-light dark:text-text-dark shadow-sm">The turnover rate for Q2 was 4.7%. Would you like a detailed breakdown by department?</p>
            </div>
          </div>
        </div>
      </div>

      {/* Message Input Area */}
      <div className="sticky bottom-0 mt-auto bg-surface-light dark:bg-surface-dark p-4 md:p-6 lg:p-8 border-t border-border-light dark:border-border-dark">
        <div className="relative mx-auto max-w-3xl">
          <textarea className="w-full resize-none rounded-lg border border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark p-3 pr-28 text-sm text-text-light dark:text-text-dark placeholder:text-subtext-light dark:placeholder:text-subtext-dark focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition" placeholder="Ask me anything about HR data..." rows={1}></textarea>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2">
            <button className="inline-flex h-9 w-9 items-center justify-center rounded-lg text-subtext-light dark:text-subtext-dark hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-200" type="button"><Icon name="attach_file" className="text-xl" /></button>
            <button className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white hover:bg-primary/90 transition-all duration-200 transform hover:scale-110" type="button"><Icon name="send" className="text-xl" /></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;