import React from 'react';
import Icon from '../components/Icon';

// Re-using the status badge logic from Admin page for consistency
const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
    let colorClasses = 'bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-300';
    if (status === 'Closed') {
        colorClasses = 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
    } else if (status === 'In Progress' || status === 'Medium') {
        colorClasses = 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200';
    } else if (status === 'Open' || status === 'Low') {
        colorClasses = 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    } else if (status === 'High') {
        colorClasses = 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200';
    }
    return <span className={`px-2 py-1 text-xs font-medium rounded-full ${colorClasses}`}>{status}</span>;
}

const tickets = [
    { id: 'TCK-001', customer: 'Innovate Corp', subject: 'Billing Discrepancy Q3 Invoice', status: 'Open', priority: 'High', date: '2023-11-01', avatar: 'https://i.pravatar.cc/150?u=innovate' },
    { id: 'TCK-002', customer: 'Tech Solutions Ltd.', subject: 'Feature Request: API Integration for reporting', status: 'In Progress', priority: 'Medium', date: '2023-10-30', avatar: 'https://i.pravatar.cc/150?u=tech' },
    { id: 'TCK-003', customer: 'Global Enterprises', subject: 'Cannot reset my account password', status: 'Closed', priority: 'Low', date: '2023-10-28', avatar: 'https://i.pravatar.cc/150?u=global' },
    { id: 'TCK-004', customer: 'Quantum Dynamics', subject: 'System downtime on Saturday', status: 'In Progress', priority: 'High', date: '2023-10-29', avatar: 'https://i.pravatar.cc/150?u=quantum' },
    { id: 'TCK-005', customer: 'Synergy Partners', subject: 'Question about the new UI update', status: 'Closed', priority: 'Low', date: '2023-10-27', avatar: 'https://i.pravatar.cc/150?u=synergy' },
    { id: 'TCK-006', customer: 'Nexus Innovations', subject: 'Slow loading times on dashboard page', status: 'Open', priority: 'Medium', date: '2023-11-02', avatar: 'https://i.pravatar.cc/150?u=nexus' },
];

const TicketSolving: React.FC = () => {
    return (
        <div className="p-6 lg:p-10">
            <div className="layout-content-container flex flex-col max-w-7xl mx-auto flex-1 space-y-8">
                <div className="fade-in-up" style={{ animationDelay: '100ms' }}>
                    <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
                        <h1 className="text-text-light dark:text-text-dark text-3xl md:text-4xl font-black tracking-[-0.033em]">Customer Support Tickets</h1>
                        <button className="flex h-10 items-center justify-center gap-2 overflow-hidden rounded-lg bg-primary px-4 text-white hover:bg-primary/90 text-sm font-bold transition-all duration-200 transform hover:scale-105">
                            <Icon name="add" /><span>New Ticket</span>
                        </button>
                    </div>
                    <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="border-b border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark/50">
                                    <tr>
                                        <th className="p-4 text-sm font-semibold text-subtext-light dark:text-subtext-dark">Customer</th>
                                        <th className="p-4 text-sm font-semibold text-subtext-light dark:text-subtext-dark">Subject</th>
                                        <th className="p-4 text-sm font-semibold text-subtext-light dark:text-subtext-dark">Status</th>
                                        <th className="p-4 text-sm font-semibold text-subtext-light dark:text-subtext-dark">Priority</th>
                                        <th className="p-4 text-sm font-semibold text-subtext-light dark:text-subtext-dark">Date</th>
                                        <th className="p-4 text-sm font-semibold text-subtext-light dark:text-subtext-dark text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tickets.map((ticket, index) => (
                                        <tr key={ticket.id} className="border-b border-border-light dark:border-border-dark last:border-b-0 hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-200 fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
                                            <td className="p-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: `url(${ticket.avatar})`}}></div>
                                                    <div>
                                                        <p className="font-medium text-text-light dark:text-text-dark">{ticket.customer}</p>
                                                        <p className="text-sm text-subtext-light dark:text-subtext-dark">{ticket.id}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-4 text-text-light dark:text-text-dark">{ticket.subject}</td>
                                            <td className="p-4"><StatusBadge status={ticket.status} /></td>
                                            <td className="p-4"><StatusBadge status={ticket.priority} /></td>
                                            <td className="p-4 text-subtext-light dark:text-subtext-dark">{ticket.date}</td>
                                            <td className="p-4 text-right">
                                                <button className="p-2 text-subtext-light dark:text-subtext-dark hover:text-primary transition-colors duration-200"><Icon name="visibility" /></button>
                                                <button className="p-2 text-subtext-light dark:text-subtext-dark hover:text-primary transition-colors duration-200"><Icon name="reply" /></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TicketSolving;
