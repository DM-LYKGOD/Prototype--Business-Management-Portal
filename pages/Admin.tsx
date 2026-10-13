import React from 'react';
import Icon from '../components/Icon';
import { FacilityRequest, MachineData } from '../types';

interface AdminProps {
    facilityRequests: FacilityRequest[];
    machineData: MachineData[];
}

const users = [
    { name: 'Rohan Mehta', email: 'rohan.mehta@example.com', role: 'Admin', status: 'Active', dateAdded: '2023-10-27', avatar: 'https://i.pravatar.cc/150?u=rohan' },
    { name: 'Sunita Gupta', email: 'sunita.gupta@example.com', role: 'Manager', status: 'Active', dateAdded: '2023-10-26', avatar: 'https://i.pravatar.cc/150?u=sunita' },
    { name: 'Vikram Rao', email: 'vikram.rao@example.com', role: 'Employee', status: 'Inactive', dateAdded: '2023-10-25', avatar: 'https://i.pravatar.cc/150?u=vikram' },
    { name: 'Priya Sharma', email: 'priya.sharma@example.com', role: 'Employee', status: 'Active', dateAdded: '2023-10-24', avatar: 'https://i.pravatar.cc/150?u=priya' },
    { name: 'Amit Kumar', email: 'amit.kumar@example.com', role: 'Manager', status: 'Active', dateAdded: '2023-10-23', avatar: 'https://i.pravatar.cc/150?u=amit' },
    { name: 'Anjali Desai', email: 'anjali.desai@example.com', role: 'Employee', status: 'Inactive', dateAdded: '2023-10-22', avatar: 'https://i.pravatar.cc/150?u=anjali' },
];

const StatusBadge: React.FC<{ status: string }> = ({ status }) => {
    let colorClasses = 'bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-300';
    if (status === 'Active' || status === 'Completed' || status === 'Operational') {
        colorClasses = 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
    } else if (status === 'Inactive' || status === 'On Hold') {
        colorClasses = 'bg-slate-200 text-slate-800 dark:bg-slate-700 dark:text-slate-300';
    } else if (status === 'In Progress' || status === 'Needs Maintenance' || status === 'Medium') {
        colorClasses = 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200';
    } else if (status === 'New' || status === 'Low') {
        colorClasses = 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    } else if (status === 'Critical' || status === 'High') {
        colorClasses = 'bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200';
    }
    
    return <span className={`px-2 py-1 text-xs font-medium rounded-full ${colorClasses}`}>{status}</span>;
}


const Admin: React.FC<AdminProps> = ({ facilityRequests, machineData }) => {
    return (
        <div className="p-6 lg:p-10">
            <div className="layout-content-container flex flex-col max-w-7xl mx-auto flex-1 space-y-8">
                <div className="fade-in-up" style={{ animationDelay: '100ms' }}>
                    <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
                        <h1 className="text-text-light dark:text-text-dark text-3xl md:text-4xl font-black tracking-[-0.033em]">User Management</h1>
                    </div>
                    <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead className="border-b border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark/50">
                                    <tr>
                                        <th className="p-4 text-sm font-semibold text-subtext-light dark:text-subtext-dark">User</th>
                                        <th className="p-4 text-sm font-semibold text-subtext-light dark:text-subtext-dark">Role</th>
                                        <th className="p-4 text-sm font-semibold text-subtext-light dark:text-subtext-dark">Status</th>
                                        <th className="p-4 text-sm font-semibold text-subtext-light dark:text-subtext-dark">Date Added</th>
                                        <th className="p-4 text-sm font-semibold text-subtext-light dark:text-subtext-dark text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user, index) => (
                                        <tr key={user.email} className="border-b border-border-light dark:border-border-dark last:border-b-0 hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-200 fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
                                            <td className="p-4">
                                                <div className="flex items-center gap-3">
                                                    <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: `url(${user.avatar})`}}></div>
                                                    <div>
                                                        <p className="font-medium text-text-light dark:text-text-dark">{user.name}</p>
                                                        <p className="text-sm text-subtext-light dark:text-subtext-dark">{user.email}</p>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-4 text-text-light dark:text-text-dark">{user.role}</td>
                                            <td className="p-4"><StatusBadge status={user.status} /></td>
                                            <td className="p-4 text-subtext-light dark:text-subtext-dark">{user.dateAdded}</td>
                                            <td className="p-4 text-right">
                                                <button className="p-2 text-subtext-light dark:text-subtext-dark hover:text-primary transition-colors duration-200"><Icon name="edit" /></button>
                                                <button className="p-2 text-subtext-light dark:text-subtext-dark hover:text-danger transition-colors duration-200"><Icon name="delete" /></button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div className="fade-in-up" style={{ animationDelay: '300ms' }}>
                    <h2 className="text-text-light dark:text-text-dark text-2xl font-bold mb-4">Facility Maintenance Requests</h2>
                     <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden">
                        <div className="overflow-x-auto">
                           <table className="w-full text-left">
                                <thead className="border-b border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark/50">
                                   <tr>
                                       <th className="p-4 text-sm font-semibold text-subtext-light dark:text-subtext-dark">Location</th>
                                       <th className="p-4 text-sm font-semibold text-subtext-light dark:text-subtext-dark">Request Type</th>
                                       <th className="p-4 text-sm font-semibold text-subtext-light dark:text-subtext-dark">Urgency</th>
                                       <th className="p-4 text-sm font-semibold text-subtext-light dark:text-subtext-dark">Status</th>
                                       <th className="p-4 text-sm font-semibold text-subtext-light dark:text-subtext-dark">Date Reported</th>
                                   </tr>
                               </thead>
                               <tbody>
                                 {facilityRequests.length > 0 ? facilityRequests.map((req, index) => (
                                      <tr key={req.id} className="border-b border-border-light dark:border-border-dark last:border-b-0 hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-200 fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
                                        <td className="p-4 text-text-light dark:text-text-dark">{req.building} - {req.area}</td>
                                        <td className="p-4 text-text-light dark:text-text-dark">{req.requestType}</td>
                                        <td className="p-4"><StatusBadge status={req.urgency} /></td>
                                        <td className="p-4"><StatusBadge status={req.status} /></td>
                                        <td className="p-4 text-subtext-light dark:text-subtext-dark">{req.dateReported}</td>
                                      </tr>
                                 )) : (
                                    <tr><td colSpan={5} className="text-center p-8 text-subtext-light dark:text-subtext-dark">No facility requests submitted yet.</td></tr>
                                 )}
                               </tbody>
                           </table>
                        </div>
                     </div>
                </div>

                 <div className="fade-in-up" style={{ animationDelay: '500ms' }}>
                    <h2 className="text-text-light dark:text-text-dark text-2xl font-bold mb-4">Machine Data Entries</h2>
                     <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden">
                        <div className="overflow-x-auto">
                           <table className="w-full text-left">
                                <thead className="border-b border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark/50">
                                   <tr>
                                       <th className="p-4 text-sm font-semibold text-subtext-light dark:text-subtext-dark">Machine ID</th>
                                       <th className="p-4 text-sm font-semibold text-subtext-light dark:text-subtext-dark">Name</th>
                                       <th className="p-4 text-sm font-semibold text-subtext-light dark:text-subtext-dark">Location</th>
                                       <th className="p-4 text-sm font-semibold text-subtext-light dark:text-subtext-dark">Status</th>
                                       <th className="p-4 text-sm font-semibold text-subtext-light dark:text-subtext-dark">Next Maintenance</th>
                                   </tr>
                               </thead>
                               <tbody>
                                 {machineData.length > 0 ? machineData.map((machine, index) => (
                                      <tr key={machine.id} className="border-b border-border-light dark:border-border-dark last:border-b-0 hover:bg-black/5 dark:hover:bg-white/5 transition-colors duration-200 fade-in-up" style={{ animationDelay: `${index * 50}ms` }}>
                                        <td className="p-4 font-mono text-xs text-text-light dark:text-text-dark">{machine.machineId}</td>
                                        <td className="p-4 text-text-light dark:text-text-dark">{machine.name}</td>
                                        <td className="p-4 text-text-light dark:text-text-dark">{machine.location}</td>
                                        <td className="p-4"><StatusBadge status={machine.status} /></td>
                                        <td className="p-4 text-subtext-light dark:text-subtext-dark">{machine.nextMaintenance}</td>
                                      </tr>
                                 )) : (
                                    <tr><td colSpan={5} className="text-center p-8 text-subtext-light dark:text-subtext-dark">No machine data has been saved yet.</td></tr>
                                 )}
                               </tbody>
                           </table>
                        </div>
                     </div>
                </div>

            </div>
        </div>
    );
};

export default Admin;