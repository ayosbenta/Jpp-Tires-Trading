
import React from 'react';
import type { KpiData } from '../types';
import { kpiData } from '../constants';

const KpiCard: React.FC<{ item: KpiData }> = ({ item }) => {
    const changeColor = item.changeType === 'increase' ? 'text-green-400' : 'text-red-400';
    return (
        <div className="bg-brand-surface p-5 rounded-xl shadow-lg flex items-start justify-between">
            <div>
                <p className="text-sm font-medium text-brand-text-muted">{item.title}</p>
                <p className="text-2xl font-bold text-white mt-1">{item.value}</p>
                {item.change && (
                     <p className={`text-xs mt-2 ${changeColor}`}>{item.change} vs last period</p>
                )}
            </div>
            <div className="bg-brand-primary p-3 rounded-lg">
                <item.icon className="h-6 w-6 text-brand-accent" />
            </div>
        </div>
    );
};

export const KpiCards: React.FC = () => {
    return (
        <>
            {kpiData.map((item, index) => (
                <div key={index} className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4 xl:col-span-2">
                    <KpiCard item={item} />
                </div>
            ))}
        </>
    );
};
