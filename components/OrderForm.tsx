import React, { useState, useEffect } from 'react';
import type { Order } from '../types';
import { OrderStatus } from '../types';
import { XMarkIcon } from '../constants';

interface OrderFormProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: Omit<Order, 'id'>) => void;
    initialData?: Order | null;
}

type FormData = Omit<Order, 'id'>;

export const OrderForm: React.FC<OrderFormProps> = ({ isOpen, onClose, onSubmit, initialData }) => {
    const [formData, setFormData] = useState<FormData>({
        customer: '',
        tireModel: '',
        qty: 1,
        status: OrderStatus.InProgress,
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                customer: initialData.customer,
                tireModel: initialData.tireModel,
                qty: initialData.qty,
                status: initialData.status,
            });
        } else {
            setFormData({ customer: '', tireModel: '', qty: 1, status: OrderStatus.InProgress });
        }
    }, [initialData, isOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: (e.target as HTMLInputElement).type === 'number' ? parseInt(value, 10) || 0 : value,
        }));
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
                            {initialData ? 'Edit Order' : 'Add New Order'}
                        </h2>
                        <button type="button" onClick={onClose} className="p-1 rounded-full text-brand-text-muted hover:bg-brand-primary hover:text-white">
                            <XMarkIcon className="h-6 w-6" />
                        </button>
                    </div>

                    <div className="p-6 space-y-4">
                        <div>
                            <label htmlFor="customer" className="block text-sm font-medium text-brand-text-muted mb-2">Customer Name</label>
                            <input
                                id="customer"
                                type="text"
                                name="customer"
                                value={formData.customer}
                                onChange={handleChange}
                                required
                                placeholder="Enter customer name"
                                className="w-full bg-brand-dark border border-brand-primary text-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary outline-none"
                            />
                        </div>
                        <div>
                            <label htmlFor="tireModel" className="block text-sm font-medium text-brand-text-muted mb-2">Tire Model</label>
                            <input
                                id="tireModel"
                                type="text"
                                name="tireModel"
                                value={formData.tireModel}
                                onChange={handleChange}
                                required
                                placeholder="e.g., LIONLORD LL-01"
                                className="w-full bg-brand-dark border border-brand-primary text-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary outline-none"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                             <div>
                                <label htmlFor="qty" className="block text-sm font-medium text-brand-text-muted mb-2">Quantity</label>
                                <input
                                    id="qty"
                                    type="number"
                                    name="qty"
                                    value={formData.qty}
                                    onChange={handleChange}
                                    required
                                    min="1"
                                    className="w-full bg-brand-dark border border-brand-primary text-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary outline-none"
                                />
                            </div>
                            <div>
                                <label htmlFor="status" className="block text-sm font-medium text-brand-text-muted mb-2">Status</label>
                                <select
                                    id="status"
                                    name="status"
                                    value={formData.status}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-brand-dark border border-brand-primary text-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary outline-none"
                                >
                                    {Object.values(OrderStatus).map(status => (
                                        <option key={status} value={status}>{status}</option>
                                    ))}
                                </select>
                            </div>
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
                            {initialData ? 'Save Changes' : 'Add Order'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};