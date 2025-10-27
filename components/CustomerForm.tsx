import React, { useState, useEffect } from 'react';
import type { Customer } from '../types';
import { XMarkIcon } from '../constants';

interface CustomerFormProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: Omit<Customer, 'id' | 'lastPurchaseDate'>) => void;
    initialData?: Customer | null;
}

type FormData = Omit<Customer, 'id' | 'lastPurchaseDate'>;

export const CustomerForm: React.FC<CustomerFormProps> = ({ isOpen, onClose, onSubmit, initialData }) => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        email: '',
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                name: initialData.name,
                phone: initialData.phone,
                email: initialData.email,
            });
        } else {
            setFormData({ name: '', phone: '', email: '' });
        }
    }, [initialData, isOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(formData);
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-70 z-40 flex items-center justify-center transition-opacity"
            aria-labelledby="modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div className="bg-brand-surface rounded-xl shadow-2xl w-full max-w-md m-4 transform transition-transform scale-100">
                <form onSubmit={handleSubmit}>
                    <div className="flex items-center justify-between p-5 border-b border-brand-primary">
                        <h2 id="modal-title" className="text-xl font-bold text-white">
                            {initialData ? 'Edit Customer' : 'Add New Customer'}
                        </h2>
                        <button type="button" onClick={onClose} className="p-1 rounded-full text-brand-text-muted hover:bg-brand-primary hover:text-white">
                            <XMarkIcon className="h-6 w-6" />
                        </button>
                    </div>

                    <div className="p-6 space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-brand-text-muted mb-2">Full Name</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Enter full name"
                                className="w-full bg-brand-dark border border-brand-primary text-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-brand-text-muted mb-2">Phone Number</label>
                            <input
                                id="phone"
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                placeholder="e.g., 09171234567"
                                className="w-full bg-brand-dark border border-brand-primary text-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-brand-text-muted mb-2">Email Address</label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="e.g., name@example.com"
                                className="w-full bg-brand-dark border border-brand-primary text-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary outline-none"
                            />
                        </div>
                    </div>

                    <div className="flex justify-end p-5 bg-brand-primary bg-opacity-50 rounded-b-xl space-x-3">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-brand-primary text-white font-semibold rounded-lg hover:bg-opacity-80 transition-colors"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-brand-secondary text-white font-semibold rounded-lg hover:bg-opacity-90 transition-colors"
                        >
                            {initialData ? 'Save Changes' : 'Add Customer'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
