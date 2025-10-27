
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { salesData } from '../constants';

export const SalesPerformance: React.FC = () => {
    return (
        <div className="bg-brand-surface p-6 rounded-xl shadow-lg h-96">
            <h3 className="text-lg font-semibold text-white mb-1">Daily Sales Performance</h3>
            <p className="text-sm text-brand-text-muted mb-4">"Smoother than brand-new treads."</p>
            <ResponsiveContainer width="100%" height="85%">
                <LineChart
                    data={salesData}
                    margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#a4a4a4" fontSize={12} />
                    <YAxis stroke="#a4a4a4" fontSize={12} />
                    <Tooltip 
                        contentStyle={{ 
                            backgroundColor: '#1a1a2e', 
                            border: '1px solid #0f3460',
                            color: '#dcdcdc'
                        }} 
                    />
                    <Legend wrapperStyle={{fontSize: "14px"}}/>
                    <Line type="monotone" dataKey="sales" stroke="#e94560" strokeWidth={2} activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};
