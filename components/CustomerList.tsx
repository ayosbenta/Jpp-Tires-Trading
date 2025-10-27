import React from 'react';
import type { Customer } from '../types';
import { PencilIcon, TrashIcon, UsersIcon } from '../constants';

interface CustomerListProps {
    customers: Customer[];
    onEdit: (customer: Customer) => void;
    onDelete: (id: string) => void;
}

export const CustomerList: React.FC<CustomerListProps> = ({ customers, onEdit, onDelete }) => {
    return (
        <div className="bg-brand-surface p-6 rounded-xl shadow-lg overflow-x-auto">
            <h3 className="text-lg font-semibold text-white mb-4">Customer Records</h3>
            <table className="w-full text-sm text-left text-brand-text-muted">
                <thead className="text-xs text-brand-text uppercase bg-brand-primary">
                    <tr>
                        <th scope="col" className="px-6 py-3">Name</th>
                        <th scope="col" className="px-6 py-3">Contact Phone</th>
                        <th scope="col" className="px-6 py-3">Email</th>
                        <th scope="col" className="px-6 py-3">Last Purchase</th>
                        <th scope="col" className="px-6 py-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map((customer) => (
                        <tr key={customer.id} className="bg-brand-surface border-b border-brand-primary hover:bg-brand-primary">
                            <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap flex items-center">
                                <UsersIcon className="h-5 w-5 mr-3 text-brand-accent" />
                                {customer.name}
                            </th>
                            <td className="px-6 py-4">{customer.phone}</td>
                            <td className="px-6 py-4">{customer.email}</td>
                            <td className="px-6 py-4">{customer.lastPurchaseDate}</td>
                            <td className="px-6 py-4 flex items-center space-x-4">
                                <button onClick={() => onEdit(customer)} className="text-brand-accent hover:text-white transition-colors">
                                    <PencilIcon className="h-5 w-5" />
                                </button>
                                <button onClick={() => onDelete(customer.id)} className="text-brand-secondary hover:text-white transition-colors">
                                    <TrashIcon className="h-5 w-5" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
