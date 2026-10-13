import React, { useState } from 'react';
import Icon from '../components/Icon';
import { FacilityRequest } from '../types';

interface FacilityManagementProps {
  onAddRequest: (request: FacilityRequest) => void;
}

const initialFormState: FacilityRequest = {
  building: 'Mumbai Head Office',
  area: '',
  requestType: 'Plumbing',
  description: '',
  urgency: 'Medium',
  dateReported: new Date().toISOString().split('T')[0],
  status: 'In Progress',
  budget: '',
  cost: '',
};

const FacilityManagement: React.FC<FacilityManagementProps> = ({ onAddRequest }) => {
  const [formData, setFormData] = useState<FacilityRequest>(initialFormState);
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
    if (!formData.building) newErrors.building = 'Building/Location is required.';
    if (!formData.area) newErrors.area = 'Room/Area is required.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onAddRequest(formData);
      setFormData(initialFormState); // Reset form after submission
    }
  };


  return (
    <div className="p-4 sm:p-8 flex flex-1 justify-center py-5 sm:py-10">
      <div className="layout-content-container flex flex-col w-full max-w-4xl flex-1 bg-surface-light dark:bg-surface-dark/60 rounded-xl shadow-sm border border-border-light/40 dark:border-border-dark/40">
        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap justify-between gap-3">
            <div className="flex min-w-72 flex-col gap-2">
              <h1 className="text-text-light dark:text-text-dark text-3xl sm:text-4xl font-black leading-tight tracking-[-0.033em]">Facility Maintenance Request</h1>
              <p className="text-subtext-light dark:text-subtext-dark text-base font-normal leading-normal">Complete the form below to submit a new maintenance request.</p>
            </div>
          </div>
        </div>
        <form className="flex flex-col gap-8 p-6 sm:p-8 pt-0" onSubmit={handleSubmit}>
          <section className="fade-in-up" style={{ animationDelay: '100ms' }}>
            <h3 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em] pb-4 border-b border-border-light dark:border-border-dark mb-6">Location &amp; Request Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col flex-1">
                <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">Building/Location *</p>
                <input name="building" value={formData.building} onChange={handleChange} className={`form-input bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark transition duration-200 focus:ring-primary/50 focus:border-primary ${errors.building ? 'border-danger focus:ring-danger/50' : ''}`} placeholder="e.g., Main Campus" />
                {errors.building && <p className="text-danger text-sm mt-1.5">{errors.building}</p>}
              </label>
              <label className="flex flex-col flex-1">
                <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">Room/Area *</p>
                <input name="area" value={formData.area} onChange={handleChange} className={`form-input bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark transition duration-200 focus:ring-primary/50 focus:border-primary ${errors.area ? 'border-danger focus:ring-danger/50' : ''}`} placeholder="e.g., Office 301" />
                {errors.area && <p className="text-danger text-sm mt-1.5">{errors.area}</p>}
              </label>
              <label className="flex flex-col md:col-span-2">
                <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">Request Type *</p>
                <select name="requestType" value={formData.requestType} onChange={handleChange} className="form-select form-input bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark transition duration-200 focus:ring-primary/50 focus:border-primary">
                  <option>HVAC</option>
                  <option>Plumbing</option>
                  <option>Electrical</option>
                  <option>Janitorial</option>
                  <option>Safety</option>
                </select>
              </label>
              <label className="flex flex-col md:col-span-2">
                <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">Issue Description</p>
                <textarea name="description" value={formData.description} onChange={handleChange} className="form-input min-h-32 bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark transition duration-200 focus:ring-primary/50 focus:border-primary" placeholder="Provide a detailed description of the issue..."></textarea>
              </label>
            </div>
          </section>

          <section className="fade-in-up" style={{ animationDelay: '200ms' }}>
            <h3 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em] pb-4 border-b border-border-light dark:border-border-dark mb-6">Status & Urgency</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <label className="flex flex-col flex-1">
                <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">Urgency Level *</p>
                <select name="urgency" value={formData.urgency} onChange={handleChange} className="form-select form-input bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark transition duration-200 focus:ring-primary/50 focus:border-primary">
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                  <option>Critical</option>
                </select>
              </label>
              <label className="flex flex-col flex-1">
                <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">Date Reported</p>
                <input name="dateReported" value={formData.dateReported} onChange={handleChange} className="form-input bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark transition duration-200 focus:ring-primary/50 focus:border-primary" type="date" />
              </label>
              <label className="flex flex-col flex-1">
                <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">Status</p>
                <select name="status" value={formData.status} onChange={handleChange} className="form-select form-input bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark transition duration-200 focus:ring-primary/50 focus:border-primary">
                  <option>New</option>
                  <option>In Progress</option>
                  <option>On Hold</option>
                  <option>Completed</option>
                </select>
              </label>
            </div>
          </section>

          <section className="fade-in-up" style={{ animationDelay: '300ms' }}>
            <h3 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em] pb-4 border-b border-border-light dark:border-border-dark mb-6">Financials</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-end">
              <label className="flex flex-col flex-1">
                <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">Budget Assigned</p>
                <div className="relative"><span className="absolute inset-y-0 left-0 flex items-center pl-4 text-subtext-light">₹</span><input name="budget" value={formData.budget} onChange={handleChange} className="form-input pl-8 bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark transition duration-200 focus:ring-primary/50 focus:border-primary" placeholder="0.00" type="number" /></div>
              </label>
              <label className="flex flex-col flex-1">
                <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">Actual Cost</p>
                <div className="relative"><span className="absolute inset-y-0 left-0 flex items-center pl-4 text-subtext-light">₹</span><input name="cost" value={formData.cost} onChange={handleChange} className="form-input pl-8 bg-background-light dark:bg-background-dark border-border-light dark:border-border-dark transition duration-200 focus:ring-primary/50 focus:border-primary" placeholder="0.00" type="number" /></div>
              </label>
            </div>
          </section>

          <div className="flex flex-col sm:flex-row items-center justify-end gap-4 pt-6 border-t border-border-light dark:border-border-dark mt-4 fade-in-up" style={{ animationDelay: '400ms' }}>
            <button className="flex max-w-[480px] w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-transparent text-text-light dark:text-text-dark border border-border-light dark:border-border-dark hover:bg-black/5 dark:hover:bg-white/5 font-bold px-8 transition-all duration-200 transform hover:scale-105" type="button">Cancel</button>
            <button className="flex max-w-[480px] w-full sm:w-auto cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-primary text-white font-bold px-8 hover:bg-primary/90 transition-all duration-200 transform hover:scale-105" type="submit">Submit Request</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FacilityManagement;