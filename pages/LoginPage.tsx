import React, { useState } from 'react';
import Icon from '../components/Icon';

interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="flex min-h-screen w-full flex-col group/design-root">
      <div className="flex h-full grow flex-col">
        <div className="flex flex-1">
          <div className="flex w-full flex-col md:flex-row">
            <div className="relative flex w-full flex-col items-center justify-center bg-gray-100 dark:bg-background-dark p-8 md:w-1/2 md:p-12 overflow-hidden">
              <div className="absolute inset-0 z-0">
                <img alt="Abstract light blue architectural lines" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1554672408-730436b60dde?q=80&w=1935&auto=format&fit=crop" style={{ animation: 'zoom-in-slow 20s forwards' }} />
                 <div className="absolute inset-0 bg-primary/30 mix-blend-multiply"></div>
              </div>
              <div className="relative z-10 flex flex-col items-center justify-center text-center md:items-start md:text-left max-w-md">
                <div className="flex items-center gap-3 fade-in-up">
                  <span className="material-symbols-outlined text-white text-4xl">insights</span>
                  <h1 className="text-white tracking-light text-3xl font-bold leading-tight">Genius HR tech</h1>
                </div>
                <p className="text-white text-lg font-normal leading-normal mt-4 fade-in-up" style={{ animationDelay: '200ms' }}>Intelligent HR Data, Simplified.</p>
              </div>
            </div>
            <div className="flex w-full flex-col items-center justify-center bg-background-light dark:bg-slate-900 p-8 md:w-1/2 md:p-12">
              <div className="w-full max-w-sm">
                <h2 className="text-slate-900 dark:text-white tracking-light text-[28px] font-bold leading-tight text-left pb-1 fade-in-up" style={{ animationDelay: '300ms' }}>Log in to your account</h2>
                <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal pb-8 fade-in-up" style={{ animationDelay: '400ms' }}>Welcome back! Please enter your details.</p>
                <form className="flex flex-col gap-4 fade-in-up" style={{ animationDelay: '500ms' }} onSubmit={handleSubmit}>
                  <label className="flex flex-col w-full">
                    <p className="text-slate-900 dark:text-white text-base font-medium leading-normal pb-2">Username</p>
                    <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-3 text-base font-normal leading-normal transition-transform duration-200 focus:scale-[1.02]" placeholder="Enter your username" defaultValue="admin" />
                  </label>
                  <label className="flex flex-col w-full">
                    <p className="text-slate-900 dark:text-white text-base font-medium leading-normal pb-2">Password</p>
                    <div className="relative flex w-full items-center">
                      <input className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 h-12 placeholder:text-slate-400 dark:placeholder:text-slate-500 p-3 pr-10 text-base font-normal leading-normal transition-transform duration-200 focus:scale-[1.02]" placeholder="Enter your password" type={showPassword ? "text" : "password"} defaultValue="password" />
                      <button className="absolute right-3 text-slate-400 dark:text-slate-500" type="button" onClick={() => setShowPassword(!showPassword)}>
                        <Icon name={showPassword ? 'visibility_off' : 'visibility'} />
                      </button>
                    </div>
                  </label>
                  <div className="flex items-center justify-between py-2">
                    <label className="flex items-center gap-2">
                      <input className="form-checkbox h-4 w-4 rounded border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-primary focus:ring-primary/50" type="checkbox" />
                      <span className="text-sm text-slate-600 dark:text-slate-400">Remember me</span>
                    </label>
                    <a className="text-sm font-medium text-primary hover:underline" href="#">Forgot Password?</a>
                  </div>
                  <button className="flex h-12 w-full items-center justify-center rounded-lg bg-primary px-6 text-base font-semibold text-white transition-all duration-200 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background-dark hover:scale-105 transform" type="submit">Login</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;