import React from 'react';
import Icon from '../components/Icon';

type TaskStatus = 'To Do' | 'In Progress' | 'Completed';

interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: 'Low' | 'Medium' | 'High';
}

const mockTasks: Task[] = [
  { id: '1', title: 'Review Q3 Facility Budget', description: 'Finalize budget proposal for review meeting on Friday.', status: 'To Do', priority: 'High' },
  { id: '2', title: 'Onboard New Machine Operator', description: 'Complete HR paperwork and safety training.', status: 'To Do', priority: 'Medium' },
  { id: '3', title: 'Schedule CNC-02A Maintenance', description: 'Coordinate with vendor for annual servicing.', status: 'In Progress', priority: 'High' },
  { id: '4', title: 'Analyze Employee Satisfaction Survey', description: 'Compile results and prepare a summary report for management.', status: 'In Progress', priority: 'Medium' },
  { id: '5', title: 'Update Safety Protocols', description: 'Incorporate new guidelines for the assembly line.', status: 'Completed', priority: 'High' },
  { id: '6', title: 'Pay HVAC Solutions Inc. Invoice', description: 'Invoice #INV-2024-789 for $5450.00.', status: 'Completed', priority: 'Low' },
];

const priorityClasses = {
  High: 'bg-danger/20 border-danger text-danger-700 dark:text-danger-300',
  Medium: 'bg-warning/20 border-warning text-warning-700 dark:text-warning-300',
  Low: 'bg-info/20 border-info text-info-700 dark:text-info-300',
};

const TaskCard: React.FC<{ task: Task }> = ({ task }) => (
  <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg border border-border-light dark:border-border-dark shadow-sm transition-all duration-200 transform hover:shadow-lg hover:-translate-y-1 hover:border-primary/50">
    <div className={`text-xs font-semibold mb-2 border-l-4 pl-2 ${priorityClasses[task.priority]}`}>{task.priority} Priority</div>
    <h4 className="font-bold text-text-light dark:text-text-dark mb-1">{task.title}</h4>
    <p className="text-sm text-subtext-light dark:text-subtext-dark">{task.description}</p>
  </div>
);

const TaskColumn: React.FC<{ title: TaskStatus; tasks: Task[] }> = ({ title, tasks }) => (
  <div className="bg-background-light dark:bg-background-dark/50 rounded-lg p-4 flex-1 min-w-[300px]">
    <h3 className="text-lg font-bold text-text-light dark:text-text-dark mb-4 px-2">{title} ({tasks.length})</h3>
    <div className="space-y-4">
      {tasks.map((task, index) => (
        <div key={task.id} className="fade-in-up" style={{ animationDelay: `${index * 80}ms`}}>
          <TaskCard task={task} />
        </div>
      ))}
    </div>
  </div>
);

const TaskManagement: React.FC = () => {
  const columns: TaskStatus[] = ['To Do', 'In Progress', 'Completed'];

  return (
    <div className="p-4 md:p-8 h-full">
        <div className="flex flex-col md:flex-row gap-6 h-full overflow-x-auto">
            {columns.map((status, index) => (
              <div key={status} className="fade-in-up flex" style={{ animationDelay: `${index * 150}ms` }}>
                <TaskColumn
                    title={status}
                    tasks={mockTasks.filter(task => task.status === status)}
                />
              </div>
            ))}
      </div>
    </div>
  );
};

export default TaskManagement;