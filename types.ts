
export type ViewType = 
  | 'Dashboard'
  | 'Facility Management'
  | 'Machine Management'
  | 'Ticket Solving'
  | 'Recommendations'
  | 'Calendar'
  | 'Task Management'
  | 'Chatbot'
  | 'Profile'
  | 'Admin';

export interface FacilityRequest {
  id?: string;
  building: string;
  area: string;
  requestType: string;
  description: string;
  urgency: string;
  dateReported: string;
  status: string;
  budget: string;
  cost: string;
}

export interface MachineData {
  id?: string;
  machineId: string;
  name: string;
  location: string;
  status: string;
  usage: string;
  issue: string;
  lastMaintenance: string;
  nextMaintenance: string;
  log: string;
}