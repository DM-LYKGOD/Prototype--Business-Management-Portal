import React from 'react';
import Icon from '../components/Icon';

const recommendationsData = [
    { type: 'Retention Risk', title: 'Proactive Retention Plan for Aditi Rao', description: 'Our model indicates a high risk of churn based on recent sentiment analysis and project load.', priority: 'High', user: 'Aditi Rao', userImg: 'https://i.pravatar.cc/150?u=aditi' },
    { type: 'Recruitment', title: 'Interview Karan Verma for Open Role', description: "Candidate's profile is a 95% match for the skills required in the Engineering team.", priority: 'New', user: 'Karan Verma', userImg: 'https://i.pravatar.cc/150?u=karan' },
    { type: 'Performance', title: 'Provide Performance Feedback to Priya Singh', description: 'Data suggests a recent dip in productivity metrics; timely feedback is recommended.', priority: 'Medium', user: 'Priya Singh', userImg: 'https://i.pravatar.cc/150?u=priya' },
    { type: 'Recognition', title: 'Recognize Rohan Mehta for Recent Success', description: 'Peer feedback analysis shows Rohan is feeling undervalued despite a successful project delivery.', priority: 'Low', user: 'Rohan Mehta', userImg: 'https://i.pravatar.cc/150?u=rohan' },
];

const priorityClasses: Record<string, string> = {
    High: 'bg-orange-100 dark:bg-orange-500/20 text-orange-800 dark:text-orange-300',
    Medium: 'bg-yellow-100 dark:bg-yellow-500/20 text-yellow-800 dark:text-yellow-300',
    Low: 'bg-blue-100 dark:bg-blue-500/20 text-blue-800 dark:text-blue-300',
    New: 'bg-green-100 dark:bg-green-500/20 text-green-800 dark:text-green-300',
};

const typeIcons: Record<string, string> = {
    'Retention Risk': 'flag',
    'Recruitment': 'person_add',
    'Performance': 'trending_up',
    'Recognition': 'emoji_events',
}

const RecommendationCard: React.FC<typeof recommendationsData[0]> = ({ type, title, description, priority, user, userImg }) => (
    <div className="flex flex-col gap-4 rounded-xl bg-surface-light dark:bg-surface-dark p-4 shadow-sm border border-border-light dark:border-border-dark transition-all duration-300 transform hover:shadow-xl dark:hover:shadow-primary/20 hover:-translate-y-1.5">
        <div className="flex items-start justify-between">
            <div className="flex flex-col gap-1">
                <p className="text-primary text-sm font-medium leading-normal flex items-center gap-2"><Icon name={typeIcons[type] || 'lightbulb'} className="text-lg" />{type}</p>
                <p className="text-text-light dark:text-text-dark text-base font-bold leading-tight">{title}</p>
            </div>
            <div className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${priorityClasses[priority]} ${priority === 'High' ? 'animate-pulse' : ''}`}>{priority}</div>
        </div>
        <p className="text-subtext-light dark:text-subtext-dark text-sm font-normal leading-normal">{description}</p>
        <div className="flex items-center justify-between pt-2 border-t border-border-light/50 dark:border-border-dark/50">
            <div className="flex items-center gap-2">
                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-8" style={{ backgroundImage: `url(${userImg})` }}></div>
                <span className="text-text-light dark:text-text-dark text-sm font-medium">{user}</span>
            </div>
            <div className="flex gap-2">
                <button className="flex h-9 cursor-pointer items-center justify-center overflow-hidden rounded-lg px-4 text-sm font-medium bg-background-light dark:bg-background-dark text-text-light dark:text-text-dark hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-200 transform hover:scale-105">Dismiss</button>
                <button className="flex h-9 cursor-pointer items-center justify-center overflow-hidden rounded-lg px-4 text-sm font-medium bg-primary text-white hover:bg-primary/90 transition-all duration-200 transform hover:scale-105">View Details</button>
            </div>
        </div>
    </div>
);


const Recommendations: React.FC = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-10">
      <div className="flex flex-col gap-6 max-w-5xl mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {recommendationsData.map((rec, index) => (
              <div key={index} className="fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                  <RecommendationCard {...rec} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Recommendations;