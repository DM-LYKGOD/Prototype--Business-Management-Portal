import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import FacilityManagement from './pages/FacilityManagement';
import MachineManagement from './pages/MachineManagement';
import TicketSolving from './pages/TicketSolving';
import Recommendations from './pages/Recommendations';
import CalendarView from './pages/CalendarView';
import TaskManagement from './pages/TaskManagement';
import Chatbot from './pages/Chatbot';
import Profile from './pages/Profile';
import Admin from './pages/Admin';
import type { ViewType, FacilityRequest, MachineData } from './types';

// --- Dummy Data for Initialization ---
const initialFacilityRequests: FacilityRequest[] = [
    {
        id: 'REQ-1698389400000',
        building: 'Mumbai Head Office',
        area: 'Floor 5, Conference Room A',
        requestType: 'Electrical',
        description: 'Projector screen is not retracting. Stuck in the down position.',
        urgency: 'Medium',
        dateReported: '2023-10-27',
        status: 'In Progress',
        budget: '5000',
        cost: '0',
    },
    {
        id: 'REQ-1698303000000',
        building: 'Pune Factory',
        area: 'Bay 03',
        requestType: 'HVAC',
        description: 'AC unit is leaking water. Potential slip hazard.',
        urgency: 'High',
        dateReported: '2023-10-26',
        status: 'New',
        budget: '15000',
        cost: '0',
    },
     {
        id: 'REQ-1698216600000',
        building: 'Bengaluru Warehouse',
        area: 'Loading Dock 2',
        requestType: 'Safety',
        description: 'Safety railing is loose and needs to be re-secured.',
        urgency: 'Critical',
        dateReported: '2023-10-25',
        status: 'Completed',
        budget: '8000',
        cost: '7500',
    }
];

const initialMachineData: MachineData[] = [
    {
        id: 'MCH-1698389400000',
        machineId: 'CNC-MILL-07',
        name: 'Haas VF-2',
        location: 'Bengaluru Warehouse - Section A',
        status: 'Operational',
        usage: '8,760 Hours',
        issue: 'None',
        lastMaintenance: '2023-09-01',
        nextMaintenance: '2024-03-01',
        log: 'Routine check. All systems nominal.',
    },
    {
        id: 'MCH-1698303000000',
        machineId: 'ASM-LINE-3C',
        name: 'Robotic Assembly Arm',
        location: 'Chennai Assembly Line 3',
        status: 'Needs Maintenance',
        usage: '15,200 Cycles',
        issue: 'Pressure drop detected in pneumatic line.',
        lastMaintenance: '2023-06-15',
        nextMaintenance: '2023-12-15',
        log: 'Minor calibration drift noted in last cycle.',
    },
    {
        id: 'MCH-1698216600001',
        machineId: 'LSR-CUT-B1',
        name: 'Amada Fiber Laser',
        location: 'Pune Factory - Bay 01',
        status: 'Operational',
        usage: '5,123 Hours',
        issue: 'None',
        lastMaintenance: '2023-10-02',
        nextMaintenance: '2024-04-02',
        log: 'Replaced nozzle and protective glass.',
    }
];


const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeView, setActiveView] = useState<ViewType>('Dashboard');
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false); // For mobile
  
  const [facilityRequests, setFacilityRequests] = useState<FacilityRequest[]>(initialFacilityRequests);
  const [machineData, setMachineData] = useState<MachineData[]>(initialMachineData);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => {
    setIsLoggedIn(false);
    setActiveView('Dashboard');
  }

  const handleViewChange = (view: ViewType) => {
    setActiveView(view);
    setIsMobileSidebarOpen(false);
  };

  const handleAddFacilityRequest = (request: FacilityRequest) => {
    setFacilityRequests(prev => [{ ...request, id: `REQ-${Date.now()}` }, ...prev]);
    alert('Facility Request Submitted!');
    setActiveView('Admin');
  };

  const handleAddMachineData = (data: MachineData) => {
    setMachineData(prev => [{ ...data, id: `MCH-${Date.now()}` }, ...prev]);
    alert('Machine Data Saved!');
     setActiveView('Admin');
  };


  const renderView = () => {
    switch (activeView) {
      case 'Dashboard':
        return <Dashboard />;
      case 'Facility Management':
        return <FacilityManagement onAddRequest={handleAddFacilityRequest} />;
      case 'Machine Management':
        return <MachineManagement onAddMachine={handleAddMachineData}/>;
      case 'Ticket Solving':
        return <TicketSolving />;
      case 'Recommendations':
        return <Recommendations />;
      case 'Calendar':
        return <CalendarView />;
      case 'Task Management':
        return <TaskManagement />;
      case 'Chatbot':
        return <Chatbot />;
      case 'Profile':
        return <Profile />;
      case 'Admin':
        return <Admin facilityRequests={facilityRequests} machineData={machineData} />;
      default:
        return <Dashboard />;
    }
  };

  if (!isLoggedIn) {
    return <LoginPage onLogin={handleLogin} />;
  }

  return (
    <div className="flex h-screen bg-background-light text-text-light dark:bg-background-dark dark:text-text-dark">
      <Sidebar 
        activeView={activeView} 
        setActiveView={handleViewChange} 
        onLogout={handleLogout} 
        isMobileOpen={isMobileSidebarOpen} 
        setIsMobileOpen={setIsMobileSidebarOpen}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header viewTitle={activeView} setActiveView={setActiveView} onMenuClick={() => setIsMobileSidebarOpen(true)} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <div key={activeView} className="fade-in-up" style={{ animationDuration: '0.4s' }}>
            {renderView()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;