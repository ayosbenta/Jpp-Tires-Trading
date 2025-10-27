
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { expenseProfitData } from '../constants';

export const ExpenseProfit: React.FC = () => {
    return (
        <div className="bg-brand-surface p-6 rounded-xl shadow-lg h-full">
            <h3 className="text-lg font-semibold text-white mb-4">Expense vs Profit</h3>
            <ResponsiveContainer width="100%" height={250}>
                <AreaChart
                    data={expenseProfitData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0, }}
                >
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="month" stroke="#a4a4a4" fontSize={12} />
                    <YAxis stroke="#a4a4a4" fontSize={12} />
                    <Tooltip 
                        contentStyle={{ 
                            backgroundColor: '#1a1a2e', 
                            border: '1px solid #0f3460'
                        }} 
                    />
                    <Legend wrapperStyle={{fontSize: "14px"}}/>
                    <Area type="monotone" dataKey="expense" stackId="1" stroke="#e94560" fill="#e94560" fillOpacity={0.3} />
                    <Area type="monotone" dataKey="profit" stackId="1" stroke="#53a8b6" fill="#53a8b6" fillOpacity={0.3}/>
                </AreaChart>
            </ResponsiveContainer>
        </div>
    );
};
