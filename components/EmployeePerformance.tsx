
import React from 'react';
import { employeeData } from '../constants';

export const EmployeePerformance: React.FC = () => {
    return (
        <div className="bg-brand-surface p-6 rounded-xl shadow-lg h-full">
            <h3 className="text-lg font-semibold text-white mb-4">Technician/Employee Performance</h3>
            <div className="space-y-4">
                {employeeData.map((employee, index) => (
                    <div key={index} className="flex items-center space-x-4">
                        <img src={employee.avatar} alt={employee.name} className="h-12 w-12 rounded-full object-cover" />
                        <div className="flex-1">
                            <p className="font-semibold text-white">{employee.name}</p>
                            <div className="flex justify-between text-xs text-brand-text-muted mt-1">
                                <span>Fittings: {employee.fittings}</span>
                                <span>Upsells: {employee.upsells}</span>
                            </div>
                            <div className="w-full bg-brand-primary rounded-full h-2 mt-2">
                                <div className="bg-brand-accent h-2 rounded-full" style={{ width: `${employee.productivity}%` }}></div>
                            </div>
                        </div>
                         <span className="font-bold text-lg text-brand-accent">{employee.productivity}%</span>
                    </div>
                ))}
            </div>
        </div>
    );
};
