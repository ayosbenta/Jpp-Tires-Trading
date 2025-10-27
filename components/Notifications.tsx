
import React from 'react';
import { notificationsData } from '../constants';
import { ExclamationTriangleIcon, ArrowTrendingUpIcon, ShieldExclamationIcon, TruckIcon } from '../constants';
import type { Notification } from '../types';

const getNotificationIcon = (type: Notification['type']) => {
    const commonClasses = "h-6 w-6 p-1 rounded-md";
    switch (type) {
        case 'stock': return <ExclamationTriangleIcon className={`${commonClasses} bg-yellow-500 text-white`} />;
        case 'demand': return <ArrowTrendingUpIcon className={`${commonClasses} bg-blue-500 text-white`} />;
        case 'transaction': return <ShieldExclamationIcon className={`${commonClasses} bg-red-500 text-white`} />;
        case 'delivery': return <TruckIcon className={`${commonClasses} bg-green-500 text-white`} />;
        default: return null;
    }
};

export const Notifications: React.FC = () => {
    return (
        <div className="bg-brand-surface p-6 rounded-xl shadow-lg h-96 flex flex-col">
            <h3 className="text-lg font-semibold text-white mb-4">Notifications Panel</h3>
            <div className="flex-1 overflow-y-auto pr-2 -mr-2">
                <ul className="space-y-4">
                    {notificationsData.map((notification) => (
                        <li key={notification.id} className="flex items-start space-x-4">
                            <div className="flex-shrink-0 mt-1">
                                {getNotificationIcon(notification.type)}
                            </div>
                            <div>
                                <p className="text-sm text-brand-text">{notification.message}</p>
                                <p className="text-xs text-brand-text-muted">{notification.time}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
