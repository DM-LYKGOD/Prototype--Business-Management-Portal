import React, { useState } from 'react';
import { MachineData } from '../types';

interface MachineManagementProps {
  onAddMachine: (data: MachineData) => void;
}

const initialFormState: MachineData = {
  machineId: 'MCH-458B2-001',
  name: 'CNC Lathe Model X',
  location: 'Pune Factory - Bay 01',
  status: 'Needs Maintenance',
  usage: '12,450 Hours',
  issue: 'ERR-503: Spindle Overheating',
  lastMaintenance: '2023-11-15',
  nextMaintenance: '2024-05-15',
  log: 'Replaced spindle bearings and coolant pump. Calibrated Z-axis. System tests passed.',
};


const MachineManagement: React.FC<MachineManagementProps> = ({ onAddMachine }) => {
  const [formData, setFormData] = useState<MachineData>(initialFormState);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (value) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.machineId) newErrors.machineId = 'Machine ID is required.';
    if (!formData.name) newErrors.name = 'Name/Type is required.';
    if (!formData.location) newErrors.location = 'Location is required.';
    if (!formData.nextMaintenance) newErrors.nextMaintenance = 'Next Maintenance Date is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onAddMachine(formData);
      setFormData(initialFormState); // Reset form
    }
  };


  return (
    <div className="p-4 md:py-12 sm:px-8">
      <div className="mx-auto w-full max-w-4xl">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-text-light dark:text-text-dark text-3xl md:text-4xl font-black tracking-[-0.033em]">Manage Machine Data</h1>
        </div>
        <div className="w-full rounded-xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark shadow-sm">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="p-6 md:p-8">
              <div className="mb-8 fade-in-up" style={{ animationDelay: '100ms' }}>
                <h3 className="text-text-light dark:text-text-dark text-lg font-bold tracking-[-0.015em] border-b border-border-light dark:border-border-dark pb-3 mb-6">Machine Identification</h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <label className="flex flex-col">
                    <p className="text-subtext-light dark:text-subtext-dark text-sm font-medium pb-2">Machine ID/Asset Tag<span className="text-danger ml-1">*</span></p>
                    <input name="machineId" value={formData.machineId} onChange={handleChange} className={`form-input bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark transition duration-200 focus:ring-primary/50 focus:border-primary ${errors.machineId ? 'border-danger focus:ring-danger/50' : ''}`} />
                    {errors.machineId && <p className="text-danger text-xs mt-1.5">{errors.machineId}</p>}
                  </label>
                  <label className="flex flex-col">
                    <p className="text-subtext-light dark:text-subtext-dark text-sm font-medium pb-2">Name/Type<span className="text-danger ml-1">*</span></p>
                    <input name="name" value={formData.name} onChange={handleChange} className={`form-input bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark transition duration-200 focus:ring-primary/50 focus:border-primary ${errors.name ? 'border-danger focus:ring-danger/50' : ''}`} />
                    {errors.name && <p className="text-danger text-xs mt-1.5">{errors.name}</p>}
                  </label>
                  <div className="flex flex-col col-span-1 md:col-span-2">
                    <label className="flex flex-col">
                      <p className="text-subtext-light dark:text-subtext-dark text-sm font-medium pb-2">Location<span className="text-danger ml-1">*</span></p>
                      <select name="location" value={formData.location} onChange={handleChange} className={`form-select form-input bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark transition duration-200 focus:ring-primary/50 focus:border-primary ${errors.location ? 'border-danger focus:ring-danger/50' : ''}`}>
                        <option>Pune Factory - Bay 01</option>
                        <option>Bengaluru Warehouse - Section A</option>
                        <option>Chennai Assembly Line 3</option>
                      </select>
                    </label>
                    {errors.location && <p className="text-danger text-xs mt-1.5">{errors.location}</p>}
                  </div>
                </div>
              </div>
              <div className="mb-8 fade-in-up" style={{ animationDelay: '200ms' }}>
                <h3 className="text-text-light dark:text-text-dark text-lg font-bold tracking-[-0.015em] border-b border-border-light dark:border-border-dark pb-3 mb-6">Operational Status</h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <label className="flex flex-col"><p className="text-subtext-light dark:text-subtext-dark text-sm font-medium pb-2">Operational Status<span className="text-danger ml-1">*</span></p><select name="status" value={formData.status} onChange={handleChange} className="form-select form-input bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark transition duration-200 focus:ring-primary/50 focus:border-primary"><option>Operational</option><option>Needs Maintenance</option><option>Decommissioned</option></select></label>
                  <label className="flex flex-col"><p className="text-subtext-light dark:text-subtext-dark text-sm font-medium pb-2">Usage Hours/Cycles</p><input name="usage" value={formData.usage} onChange={handleChange} className="form-input bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark transition duration-200 focus:ring-primary/50 focus:border-primary" /></label>
                  <label className="flex flex-col col-span-1 md:col-span-2"><p className="text-subtext-light dark:text-subtext-dark text-sm font-medium pb-2">Error Code/Issue Description</p><input name="issue" value={formData.issue} onChange={handleChange} className="form-input bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark transition duration-200 focus:ring-primary/50 focus:border-primary" /></label>
                </div>
              </div>
              <div className="mb-8 fade-in-up" style={{ animationDelay: '300ms' }}>
                <h3 className="text-text-light dark:text-text-dark text-lg font-bold tracking-[-0.015em] border-b border-border-light dark:border-border-dark pb-3 mb-6">Maintenance Information</h3>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <label className="flex flex-col"><p className="text-subtext-light dark:text-subtext-dark text-sm font-medium pb-2">Last Maintenance Date</p><input name="lastMaintenance" value={formData.lastMaintenance} onChange={handleChange} type="date" className="form-input bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark transition duration-200 focus:ring-primary/50 focus:border-primary" /></label>
                  <label className="flex flex-col"><p className="text-subtext-light dark:text-subtext-dark text-sm font-medium pb-2">Next Maintenance Date<span className="text-danger ml-1">*</span></p><input name="nextMaintenance" value={formData.nextMaintenance} onChange={handleChange} type="date" className={`form-input bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark transition duration-200 focus:ring-primary/50 focus:border-primary ${errors.nextMaintenance ? 'border-danger focus:ring-danger/50' : ''}`} /></label>
                  {errors.nextMaintenance && <p className="text-danger text-xs mt-1.5">{errors.nextMaintenance}</p>}
                  <label className="flex flex-col col-span-1 md:col-span-2"><p className="text-subtext-light dark:text-subtext-dark text-sm font-medium pb-2">Maintenance Log</p><textarea name="log" value={formData.log} onChange={handleChange} className="form-textarea min-h-32 bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark transition duration-200 focus:ring-primary/50 focus:border-primary" rows={3}></textarea></label>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end gap-4 rounded-b-xl border-t border-border-light dark:border-border-dark bg-background-light dark:bg-surface-dark/20 px-6 py-4">
              <button className="inline-flex items-center justify-center rounded-lg h-11 px-6 text-base font-medium text-text-light dark:text-text-dark bg-surface-light dark:bg-surface-dark border border-border-light dark:border-border-dark hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 transform hover:scale-105" type="button">Cancel</button>
              <button className="inline-flex items-center justify-center rounded-lg h-11 px-6 text-base font-medium text-white bg-primary hover:bg-primary/90 transition-all duration-200 transform hover:scale-105" type="submit">Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MachineManagement;