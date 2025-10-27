import React, { useState } from 'react';
import { CustomerList } from './CustomerList';
import { CustomerForm } from './CustomerForm';
import { customerData as initialCustomerData } from '../constants';
import type { Customer } from '../types';
import { PlusIcon } from '../constants';

export const CustomerView: React.FC = () => {
    const [customers, setCustomers] = useState<Customer[]>(initialCustomerData);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingCustomer, setEditingCustomer] = useState<Customer | null>(null);

    const handleAddCustomer = () => {
        setEditingCustomer(null);
        setIsModalOpen(true);
    };

    const handleEditCustomer = (customer: Customer) => {
        setEditingCustomer(customer);
        setIsModalOpen(true);
    };

    const handleDeleteCustomer = (customerId: string) => {
        if (window.confirm('Are you sure you want to delete this customer? This action cannot be undone.')) {
            setCustomers(currentCustomers => currentCustomers.filter(customer => customer.id !== customerId));
        }
    };

    const handleFormSubmit = (formData: Omit<Customer, 'id' | 'lastPurchaseDate'>) => {
        if (editingCustomer) { // Update logic
            setCustomers(currentCustomers => currentCustomers.map(customer =>
                customer.id === editingCustomer.id
                    ? { ...customer, ...formData }
                    : customer
            ));
        } else { // Create logic
            const newCustomer: Customer = {
                ...formData,
                id: `CUST-${Date.now()}`,
                lastPurchaseDate: new Date().toISOString().split('T')[0], // Set current date
            };
            setCustomers(currentCustomers => [newCustomer, ...currentCustomers]);
        }
        setIsModalOpen(false);
        setEditingCustomer(null);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold text-white">Customer Management</h2>
                <button
                    onClick={handleAddCustomer}
                    className="flex items-center justify-center bg-brand-secondary text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-200"
                >
                    <PlusIcon className="h-5 w-5 mr-2" />
                    Add New Customer
                </button>
            </div>
            <CustomerList customers={customers} onEdit={handleEditCustomer} onDelete={handleDeleteCustomer} />
            <CustomerForm
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setEditingCustomer(null);
                }}
                onSubmit={handleFormSubmit}
                initialData={editingCustomer}
            />
        </div>
    );
};
