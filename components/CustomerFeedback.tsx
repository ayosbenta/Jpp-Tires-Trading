
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { feedbackData } from '../constants';

const COLORS = ['#2d6a4f', '#53a8b6', '#f8b400', '#e94560'];

export const CustomerFeedback: React.FC = () => {
    const total = feedbackData.reduce((sum, entry) => sum + entry.value, 0);
    return (
        <div className="bg-brand-surface p-6 rounded-xl shadow-lg h-full flex flex-col justify-between">
            <h3 className="text-lg font-semibold text-white mb-2 text-center">Customer Feedback Score</h3>
            <div className="relative w-full h-48">
                 <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={feedbackData}
                            cx="50%"
                            cy="50%"
                            innerRadius={50}
                            outerRadius={70}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {feedbackData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip 
                            contentStyle={{ 
                                backgroundColor: '#1a1a2e', 
                                border: '1px solid #0f3460' 
                            }} 
                        />
                    </PieChart>
                </ResponsiveContainer>
                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="text-center">
                        <p className="text-2xl font-bold text-white">{total}</p>
                        <p className="text-xs text-brand-text-muted">Total Ratings</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-center flex-wrap gap-x-4 gap-y-1 mt-4">
                 {feedbackData.map((entry, index) => (
                    <div key={index} className="flex items-center text-xs">
                        <span className="h-2 w-2 rounded-full mr-2" style={{ backgroundColor: COLORS[index] }}></span>
                        <span className="text-brand-text-muted">{entry.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
