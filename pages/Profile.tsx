import React from 'react';
import Icon from '../components/Icon';

const Profile: React.FC = () => {
    return (
        <div className="p-4 sm:p-6 lg:p-8">
            <div className="max-w-4xl mx-auto">
                <div className="p-6 bg-surface-light dark:bg-surface-dark rounded-xl @container mb-6 border border-border-light dark:border-border-dark fade-in-up" style={{ animationDelay: '100ms' }}>
                    <div className="flex w-full flex-col gap-4 @[520px]:flex-row @[520px]:justify-between @[520px]:items-center">
                        <div className="flex items-center gap-4">
                            <div className="relative">
                                <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full w-24 h-24 md:w-32 md:h-32" style={{ backgroundImage: `url('https://i.pravatar.cc/150?u=priyanka')` }}></div>
                                <button className="absolute bottom-0 right-0 flex items-center justify-center size-8 bg-surface-light dark:bg-surface-dark rounded-full border border-border-light dark:border-border-dark hover:bg-background-light dark:hover:bg-background-dark transition-all duration-200 transform hover:scale-110">
                                    <Icon name="photo_camera" className="text-text-light-secondary dark:text-text-dark-secondary text-base" />
                                </button>
                            </div>
                            <div className="flex flex-col justify-center">
                                <p className="text-text-light dark:text-text-dark text-2xl font-bold leading-tight tracking-[-0.015em]">Priyanka Sharma</p>
                                <p className="text-subtext-light dark:text-subtext-dark text-base font-normal leading-normal mt-1">Head of Product</p>
                                <p className="text-subtext-light dark:text-subtext-dark text-base font-normal leading-normal">Employee ID: 894321</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="space-y-8">
                    <div className="p-6 bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark fade-in-up" style={{ animationDelay: '200ms' }}>
                        <h2 className="text-text-light dark:text-text-dark text-xl font-bold leading-tight tracking-[-0.015em] pb-4">Contact Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                            <div>
                                <label className="block text-sm font-medium text-subtext-light dark:text-subtext-dark mb-1">Work Email</label>
                                <input className="w-full rounded-md border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-subtext-light dark:text-subtext-dark" disabled defaultValue="priyanka.sharma@geniushr.com" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-subtext-light dark:text-subtext-dark mb-1">Phone Number</label>
                                <input className="w-full rounded-md border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-subtext-light dark:text-subtext-dark" disabled defaultValue="+91 98765 43210" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-subtext-light dark:text-subtext-dark mb-1">Location</label>
                                <input className="w-full rounded-md border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-subtext-light dark:text-subtext-dark" disabled defaultValue="Mumbai, MH" />
                            </div>
                        </div>
                    </div>
                    <div className="p-6 bg-surface-light dark:bg-surface-dark rounded-xl border border-border-light dark:border-border-dark fade-in-up" style={{ animationDelay: '300ms' }}>
                        <h2 className="text-text-light dark:text-text-dark text-xl font-bold leading-tight tracking-[-0.015em] pb-4">Role Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                            <div>
                                <label className="block text-sm font-medium text-subtext-light dark:text-subtext-dark mb-1">Job Title</label>
                                <input className="w-full rounded-md border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-subtext-light dark:text-subtext-dark" disabled defaultValue="Head of Product" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-subtext-light dark:text-subtext-dark mb-1">Department</label>
                                <input className="w-full rounded-md border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-subtext-light dark:text-subtext-dark" disabled defaultValue="Product & Engineering" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-subtext-light dark:text-subtext-dark mb-1">Manager</label>
                                <input className="w-full rounded-md border-border-light dark:border-border-dark bg-background-light dark:bg-background-dark text-subtext-light dark:text-subtext-dark" disabled defaultValue="Rajesh Kumar" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;