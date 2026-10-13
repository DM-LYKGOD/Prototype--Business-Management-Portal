import React from 'react';

const RevenueChart = () => (
    <svg className="w-full h-auto" viewBox="0 0 800 400" style={{ animation: 'spin-in 1s ease-out forwards' }}>
        <line x1="50" y1="350" x2="750" y2="350" stroke="#E9ECEF" />
        <line x1="50" y1="50" x2="50" y2="350" stroke="#E9ECEF" />
        <polyline points="50,200 150,150 250,180 350,120 450,160 550,100 650,130 750,80" fill="none" stroke="#4A90E2" strokeWidth="3"  strokeDasharray="1000" strokeDashoffset="1000" style={{ animation: 'draw-stroke 2s ease-out forwards 0.5s' }} />
        <polyline points="50,300 150,280 250,290 350,250 450,270 550,240 650,260 750,220" fill="none" stroke="#dc3545" strokeWidth="3" strokeDasharray="1000" strokeDashoffset="1000" style={{ animation: 'draw-stroke 2s ease-out forwards 1s' }} />
        <text x="760" y="85" fill="#4A90E2" fontSize="12">Revenue</text>
        <text x="760" y="225" fill="#dc3545" fontSize="12">Expenses</text>
    </svg>
);

const DonutChart = () => (
    <svg className="h-full w-auto max-h-[190px]" viewBox="0 0 100 100" style={{ animation: 'spin-in 1s ease-out forwards' }}>
        <circle cx="50" cy="50" r="40" fill="transparent" stroke="#E9ECEF" strokeWidth="15" />
        <circle cx="50" cy="50" r="40" fill="transparent" stroke="#4A90E2" strokeWidth="15" strokeDasharray="113.097 251.327" strokeDashoffset="0" />
        <circle cx="50" cy="50" r="40" fill="transparent" stroke="#7B8B9A" strokeWidth="15" strokeDasharray="62.8318 251.327" strokeDashoffset="-113.097" />
        <circle cx="50" cy="50" r="40" fill="transparent" stroke="#A0B1C0" strokeWidth="15" strokeDasharray="37.699 251.327" strokeDashoffset="-175.929" />
        <circle cx="50" cy="50" r="40" fill="transparent" stroke="#C4D0DB" strokeWidth="15" strokeDasharray="25.1327 251.327" strokeDashoffset="-213.628" />
    </svg>
);


const FinanceAnalytics: React.FC = () => {
  return (
    <div className="p-4 md:p-8 space-y-8">
      <section>
        <h3 className="text-text-light dark:text-text-dark text-xl font-semibold leading-tight tracking-[-0.015em] mb-4">Finance Analytics</h3>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-3 flex flex-col gap-4 rounded-xl p-6 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark transition-all duration-300 hover:shadow-xl dark:hover:shadow-primary/20 transform hover:-translate-y-1">
                <h4 className="text-text-light dark:text-text-dark font-semibold">Comprehensive Revenue vs. Expenses (YTD)</h4>
                <div className="flex-1 flex items-center justify-center min-h-[250px]">
                    <RevenueChart />
                </div>
            </div>
            <div className="lg:col-span-2 flex flex-col gap-4 rounded-xl p-6 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark transition-all duration-300 hover:shadow-xl dark:hover:shadow-primary/20 transform hover:-translate-y-1">
                <h4 className="text-text-light dark:text-text-dark font-semibold">Cost Distribution by Category</h4>
                <div className="flex-1 flex items-center justify-center min-h-[180px]">
                   <DonutChart />
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                    <div className="flex items-center gap-2"><div className="size-3 rounded-full bg-[#4A90E2]"></div><span>Salaries (45%)</span></div>
                    <div className="flex items-center gap-2"><div className="size-3 rounded-full bg-[#7B8B9A]"></div><span>Operations (25%)</span></div>
                    <div className="flex items-center gap-2"><div className="size-3 rounded-full bg-[#A0B1C0]"></div><span>Marketing (15%)</span></div>
                    <div className="flex items-center gap-2"><div className="size-3 rounded-full bg-[#C4D0DB]"></div><span>Utilities (10%)</span></div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default FinanceAnalytics;