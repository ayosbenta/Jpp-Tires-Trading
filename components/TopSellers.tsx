
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { topSellersData } from '../constants';

const COLORS = ['#e94560', '#53a8b6', '#f8b400', '#2d6a4f', '#9d4edd'];

export const TopSellers: React.FC = () => {
    return (
        <div className="bg-brand-surface p-6 rounded-xl shadow-lg h-full">
            <h3 className="text-lg font-semibold text-white mb-4">Top 5 Bestselling Tires This Month</h3>
            <ResponsiveContainer width="100%" height={300}>
                <BarChart data={topSellersData} layout="vertical" margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
                    <XAxis type="number" hide />
                    <YAxis 
                        type="category" 
                        dataKey="name" 
                        stroke="#a4a4a4" 
                        fontSize={12} 
                        width={120} 
                        tickLine={false} 
                        axisLine={false}
                    />
                    <Tooltip 
                        cursor={{fill: 'rgba(15, 52, 96, 0.5)'}}
                        contentStyle={{ 
                            backgroundColor: '#1a1a2e', 
                            border: '1px solid #0f3460',
                            color: '#dcdcdc'
                        }} 
                    />
                    <Bar dataKey="sold" barSize={20} radius={[0, 10, 10, 0]}>
                        {topSellersData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Bar>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};
