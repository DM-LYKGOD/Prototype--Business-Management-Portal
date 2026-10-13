import React, { useEffect, useState } from 'react';
import Icon from '../components/Icon';

// --- Reusable Components for the New Dashboard ---

// Sparkline for Stat Cards
const Sparkline: React.FC<{ data: number[]; color: string }> = ({ data, color }) => {
    if (!data || data.length === 0) return null;
    const maxVal = Math.max(...data);
    const minVal = Math.min(...data);
    const range = maxVal - minVal === 0 ? 1 : maxVal - minVal;

    const points = data.map((d, i) => `${(i / (data.length - 1)) * 100},${100 - ((d - minVal) / range) * 80 - 10}`).join(' ');
    const pathLength = 200; 

    return (
        <svg viewBox="0 0 100 40" className="w-full h-12" preserveAspectRatio="none">
            <polyline
                points={points}
                fill="none"
                strokeWidth="2.5"
                strokeDasharray={pathLength}
                strokeDashoffset={pathLength}
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`stroke-current ${color}`}
                style={{ animation: 'draw-stroke 1.2s ease-out forwards 0.5s' }}
            />
        </svg>
    );
};

// Animated Counter for KPIs
const AnimatedCounter: React.FC<{ value: number; decimals?: number; unit?: string; prefix?: string }> = ({ value, decimals = 0, unit = '', prefix = '' }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const totalSteps = 40;
    const stepDuration = 25; // in ms
    const increment = value / totalSteps;
    
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      if (currentStep >= totalSteps) {
        setDisplayValue(value);
        clearInterval(interval);
      } else {
        setDisplayValue(prev => prev + increment);
      }
    }, stepDuration);

    return () => clearInterval(interval);
  }, [value]);

  return <span>{prefix}{displayValue.toFixed(decimals)}{unit}</span>;
};

// Redesigned Stat Card
interface StatCardProps {
    icon: string;
    title: string;
    value: number;
    unit?: string;
    prefix?: string;
    decimals?: number;
    subtitle: string;
    colorClass: string;
    style?: React.CSSProperties;
    iconAnimation?: string;
    sparklineData?: number[];
}
const StatCard: React.FC<StatCardProps> = ({ icon, title, value, unit, prefix, decimals, subtitle, colorClass, style, iconAnimation, sparklineData }) => (
    <div className="fade-in-up flex flex-col justify-between h-full rounded-xl p-4 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark transition-all duration-300 hover:shadow-xl dark:hover:shadow-primary/20 hover:-translate-y-2 transform" style={style}>
        <div>
            <div className="flex items-center gap-3">
                 <div className={`flex items-center justify-center size-10 rounded-lg bg-${colorClass}/10 text-${colorClass}`}>
                    <Icon name={icon} className="text-2xl" style={iconAnimation ? { animation: iconAnimation } : {}} />
                 </div>
                 <p className="font-medium text-text-light dark:text-text-dark">{title}</p>
            </div>
            <p className={`text-${colorClass} tracking-light text-3xl font-bold leading-tight mt-3`}>
                <AnimatedCounter value={value} unit={unit} prefix={prefix} decimals={decimals} />
            </p>
        </div>
        <div>
            {sparklineData && (
                <div className="mt-3">
                    <Sparkline data={sparklineData} color={`text-${colorClass}`} />
                </div>
            )}
            <p className="text-subtext-light dark:text-subtext-dark text-sm mt-1">{subtitle}</p>
        </div>
    </div>
);


// Animated Donut Chart for OEE
const DonutChart: React.FC<{ percentage: number }> = ({ percentage }) => {
    const radius = 40;
    const circumference = 2 * Math.PI * radius;
    const [offset, setOffset] = useState(circumference);
    
    useEffect(() => {
        const finalOffset = circumference - (percentage / 100) * circumference;
        setOffset(finalOffset);
    }, [percentage, circumference]);

    return (
        <div className="relative size-36">
            <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r={radius} className="stroke-current text-border-light dark:text-border-dark" strokeWidth="10" fill="transparent" />
                <circle
                    cx="50" cy="50" r={radius}
                    className="stroke-current text-primary"
                    strokeWidth="10"
                    fill="transparent"
                    strokeDasharray={circumference}
                    style={{
                        strokeDashoffset: offset,
                        transition: 'stroke-dashoffset 1s ease-out',
                        transform: 'rotate(-90deg)',
                        transformOrigin: 'center',
                    }}
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-bold text-text-light dark:text-text-dark"><AnimatedCounter value={percentage} decimals={1} unit="%" /></span>
            </div>
        </div>
    );
};

// Animated Line Chart
const LineChart: React.FC<{ data: number[] }> = ({ data }) => {
    const points = data.map((d, i) => `${(i / (data.length - 1)) * 100},${100 - (d / Math.max(...data)) * 80}`).join(' ');
    const pathLength = 300; // Estimated path length, adjust if needed

    return (
        <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
            <polyline
                points={points}
                fill="none"
                strokeWidth="2"
                strokeDasharray={pathLength}
                strokeDashoffset={pathLength}
                className="stroke-primary"
                style={{ animation: 'draw-stroke 1.5s ease-out forwards' }}
            />
        </svg>
    );
};


// Gauge Chart (Robust SVG implementation)
const GaugeChart: React.FC<{ value: number; max: number; label: string }> = ({ value, max, label }) => {
    const percentage = value / max;
    const circumference = Math.PI * 40; // Semi-circle for radius 40
    const [offset, setOffset] = useState(circumference);

    useEffect(() => {
        const finalOffset = circumference * (1 - percentage);
        setOffset(finalOffset);
    }, [percentage, circumference]);

    return (
        <div className="relative flex flex-col items-center justify-center w-full max-w-[180px] mx-auto">
            <svg viewBox="0 0 100 60" className="w-full">
                <path d="M 10 50 A 40 40 0 0 1 90 50" className="stroke-border-light dark:stroke-border-dark" strokeWidth="10" fill="none" strokeLinecap="round" />
                <path
                    d="M 10 50 A 40 40 0 0 1 90 50"
                    className="stroke-success"
                    strokeWidth="10"
                    fill="none"
                    strokeLinecap="round"
                    strokeDasharray={circumference}
                    style={{ strokeDashoffset: offset, transition: 'stroke-dashoffset 1s ease-out' }}
                />
            </svg>
            <div className="text-center absolute bottom-0">
                <div className="text-2xl font-bold text-text-light dark:text-text-dark">
                    <AnimatedCounter value={value} decimals={1}/>/<span className="text-lg">{max}</span>
                </div>
                <div className="text-sm text-subtext-light dark:text-subtext-dark">{label}</div>
            </div>
        </div>
    );
};

// Horizontal Bar Chart
const HorizontalBarChart: React.FC<{ data: { label: string, value: number }[] }> = ({ data }) => (
    <div className="space-y-3 w-full">
        {data.map((item, index) => (
            <div key={index} className="flex items-center gap-4">
                <span className="w-1/3 text-sm text-subtext-light dark:text-subtext-dark truncate">{item.label}</span>
                <div className="w-2/3 bg-background-light dark:bg-background-dark rounded-full h-3.5">
                     <div className="bg-primary h-3.5 rounded-full flex items-center justify-end px-2" style={{ width: `${(item.value / Math.max(...data.map(d => d.value))) * 100}%`, animation: 'grow-bar-x 1s ease-out forwards', transformOrigin: 'left', animationDelay: `${index * 100}ms`}}>
                        <span className="text-[11px] font-semibold text-white">{item.value}</span>
                     </div>
                </div>
            </div>
        ))}
    </div>
);


const Dashboard: React.FC = () => {
   const departmentHeadcountData = [
       { label: 'Engineering', value: 78 },
       { label: 'Sales', value: 45 },
       { label: 'Marketing', value: 32 },
       { label: 'Operations', value: 61 },
       { label: 'HR & Admin', value: 28 },
   ];

  return (
    <div className="p-4 md:p-6 space-y-6">
      {/* Facility Analytics */}
      <section>
        <h3 className="text-text-light dark:text-text-dark text-xl font-semibold leading-tight tracking-[-0.015em] mb-4">Facility Analytics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard icon="apartment" title="Open Tickets" value={8} subtitle="2 high-priority" colorClass="primary" style={{ animationDelay: '100ms' }} iconAnimation="bounce-icon 2s ease-in-out infinite" />
            <StatCard icon="task_alt" title="Occupancy Rate" value={82.5} unit="%" decimals={1} subtitle="Increased by 3.2%" colorClass="success" style={{ animationDelay: '200ms' }} iconAnimation="bounce-icon 2s ease-in-out infinite 0.1s" />
            <StatCard icon="bolt" title="Energy Usage" value={45.2} unit=" MWh" decimals={1} subtitle="Slight decrease" colorClass="warning" style={{ animationDelay: '300ms' }} iconAnimation="bounce-icon 2s ease-in-out infinite 0.2s" />
            <StatCard icon="dangerous" title="Safety Incidents" value={1} subtitle="0 critical incidents" colorClass="danger" style={{ animationDelay: '400ms' }} iconAnimation="bounce-icon 2s ease-in-out infinite 0.3s" />
        </div>
      </section>

      {/* Machine Analytics */}
      <section>
        <h3 className="text-text-light dark:text-text-dark text-xl font-semibold leading-tight tracking-[-0.015em] mb-4">Machine Analytics</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="fade-in-up flex flex-col justify-between gap-4 rounded-xl p-4 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark h-full" style={{ animationDelay: '900ms' }}>
                <h4 className="text-text-light dark:text-text-dark font-semibold">Overall Equipment Effectiveness</h4>
                <div className="flex items-center justify-center flex-1">
                    <DonutChart percentage={85.4} />
                </div>
            </div>
            <div className="fade-in-up flex flex-col justify-between gap-4 rounded-xl p-4 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark h-full" style={{ animationDelay: '1000ms' }}>
                <h4 className="text-text-light dark:text-text-dark font-semibold">Machine Status</h4>
                <div className="space-y-4 flex-1 flex flex-col justify-center">
                    <div>
                        <div className="flex justify-between text-sm mb-1"><span className="font-medium text-success">Operational</span><span className="font-bold text-text-light dark:text-text-dark">48/55</span></div>
                        <div className="w-full bg-background-light dark:bg-background-dark rounded-full h-2.5"><div className="bg-success h-2.5 rounded-full" style={{width: `${(48/55)*100}%`, animation: 'grow-bar-x 1s ease-out forwards', transformOrigin: 'left'}}></div></div>
                    </div>
                    <div>
                        <div className="flex justify-between text-sm mb-1"><span className="font-medium text-warning">Needs Maintenance</span><span className="font-bold text-text-light dark:text-text-dark">5/55</span></div>
                        <div className="w-full bg-background-light dark:bg-background-dark rounded-full h-2.5"><div className="bg-warning h-2.5 rounded-full" style={{width: `${(5/55)*100}%`, animation: 'grow-bar-x 1s ease-out forwards 0.1s', transformOrigin: 'left'}}></div></div>
                    </div>
                    <div>
                        <div className="flex justify-between text-sm mb-1"><span className="font-medium text-danger">Offline</span><span className="font-bold text-text-light dark:text-text-dark">2/55</span></div>
                        <div className="w-full bg-background-light dark:bg-background-dark rounded-full h-2.5"><div className="bg-danger h-2.5 rounded-full" style={{width: `${(2/55)*100}%`, animation: 'grow-bar-x 1s ease-out forwards 0.2s', transformOrigin: 'left'}}></div></div>
                    </div>
                </div>
            </div>
            <div className="md:col-span-2 fade-in-up flex flex-col gap-4 rounded-xl p-4 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark h-full" style={{ animationDelay: '1100ms' }}>
                <h4 className="text-text-light dark:text-text-dark font-semibold">Active Critical Alerts</h4>
                <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-danger/10">
                        <Icon name="error" className="text-danger mt-1" style={{ animation: 'bounce-icon 2s ease-in-out infinite 0.4s' }} />
                        <div>
                            <p className="font-semibold text-text-light dark:text-text-dark">MCH-458B2: Spindle Overheating</p>
                            <p className="text-sm text-subtext-light dark:text-subtext-dark">Pune Factory - Bay 01 | Reported: 2 hours ago</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-warning/10">
                        <Icon name="warning" className="text-warning mt-1" style={{ animation: 'bounce-icon 2s ease-in-out infinite 0.5s' }} />
                        <div>
                            <p className="font-semibold text-text-light dark:text-text-dark">ASM-LINE-3C: Pressure drop detected</p>
                            <p className="text-sm text-subtext-light dark:text-subtext-dark">Chennai Assembly Line 3 | Reported: 8 hours ago</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-3 p-3 rounded-lg bg-warning/10">
                        <Icon name="warning" className="text-warning mt-1" style={{ animation: 'bounce-icon 2s ease-in-out infinite 0.6s' }} />
                        <div>
                            <p className="font-semibold text-text-light dark:text-text-dark">CNC-MILL-07: Coolant level low</p>
                            <p className="text-sm text-subtext-light dark:text-subtext-dark">Bengaluru Warehouse - Section A | Reported: 1 day ago</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Personnel Snapshot */}
      <section>
        <h3 className="text-text-light dark:text-text-dark text-xl font-semibold leading-tight tracking-[-0.015em] mb-4">Personnel Snapshot</h3>
        
        {/* Stat cards row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="fade-in-up h-full" style={{ animationDelay: '1200ms' }}>
                <StatCard icon="groups" title="Total Headcount" value={254} subtitle="+12 since last quarter" colorClass="primary" iconAnimation="bounce-icon 2s ease-in-out infinite 0.7s" />
            </div>
            <div className="fade-in-up h-full" style={{ animationDelay: '1300ms' }}>
                <StatCard icon="person_remove" title="Attrition Rate" value={4.2} unit="%" decimals={1} subtitle="Below industry average" colorClass="warning" iconAnimation="bounce-icon 2s ease-in-out infinite 0.8s" />
            </div>
            <div className="fade-in-up h-full" style={{ animationDelay: '1400ms' }}>
                <StatCard icon="hourglass_top" title="Average Tenure" value={3.8} unit=" yrs" decimals={1} subtitle="Stable workforce" colorClass="success" iconAnimation="bounce-icon 2s ease-in-out infinite 0.9s" />
            </div>
            <div className="fade-in-up h-full" style={{ animationDelay: '1500ms' }}>
                <StatCard icon="work" title="Open Positions" value={12} subtitle="3 critical roles" colorClass="info" iconAnimation="bounce-icon 2s ease-in-out infinite 1s" />
            </div>
        </div>

        {/* Charts and Lists row */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mt-6">
            <div className="lg:col-span-3 flex flex-col gap-4 rounded-xl p-4 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark fade-in-up h-full" style={{ animationDelay: '1600ms' }}>
                <h4 className="text-text-light dark:text-text-dark font-semibold">Headcount by Department</h4>
                <div className="flex-1 flex items-center">
                    <HorizontalBarChart data={departmentHeadcountData} />
                </div>
            </div>
            <div className="lg:col-span-2 flex flex-col gap-4 rounded-xl p-4 border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark fade-in-up h-full" style={{ animationDelay: '1700ms' }}>
                <h4 className="text-text-light dark:text-text-dark font-semibold">Upcoming Anniversaries</h4>
                <div className="space-y-3">
                    {[
                        { name: 'Sunita Gupta', role: 'Manager', years: '5 Years', date: 'in 3 days', avatar: 'https://i.pravatar.cc/150?u=sunita' },
                        { name: 'Amit Kumar', role: 'Manager', years: '3 Years', date: 'in 1 week', avatar: 'https://i.pravatar.cc/150?u=amit' },
                        { name: 'Priya Sharma', role: 'Employee', years: '2 Years', date: 'in 2 weeks', avatar: 'https://i.pravatar.cc/150?u=priya' },
                        { name: 'Vikram Rao', role: 'Employee', years: '1 Year', date: 'in 3 weeks', avatar: 'https://i.pravatar.cc/150?u=vikram' },
                    ].map((person, index) => (
                        <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-200">
                            <img src={person.avatar} alt={person.name} className="size-10 rounded-full" />
                            <div className="flex-1">
                                <p className="font-semibold text-text-light dark:text-text-dark text-sm">{person.name}</p>
                                <p className="text-xs text-subtext-light dark:text-subtext-dark">{person.role}</p>
                            </div>
                            <div className="text-right">
                                <p className="font-semibold text-primary text-sm">{person.years}</p>
                                <p className="text-xs text-subtext-light dark:text-subtext-dark">{person.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;