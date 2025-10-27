
import React, { useState, useEffect } from 'react';
import type { InventoryItem } from '../types';
import { XMarkIcon } from '../constants';

interface InventoryFormProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (data: Omit<InventoryItem, 'id' | 'status' | 'brand'>) => void;
    initialData?: InventoryItem | null;
}

type FormData = Omit<InventoryItem, 'id' | 'status' | 'brand'>;

export const InventoryForm: React.FC<InventoryFormProps> = ({ isOpen, onClose, onSubmit, initialData }) => {
    const [formData, setFormData] = useState<FormData>({
        size: '',
        currentStock: 0,
        reorderLevel: 10,
    });

    useEffect(() => {
        if (initialData) {
            setFormData({
                size: initialData.size,
                currentStock: initialData.currentStock,
                reorderLevel: initialData.reorderLevel,
            });
        } else {
            setFormData({ size: '', currentStock: 0, reorderLevel: 10 });
        }
    }, [initialData, isOpen]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'number' ? parseInt(value, 10) || 0 : value,
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
                            {initialData ? 'Edit Tire' : 'Add New Tire'}
                        </h2>
                        <button type="button" onClick={onClose} className="p-1 rounded-full text-brand-text-muted hover:bg-brand-primary hover:text-white">
                            <XMarkIcon className="h-6 w-6" />
                        </button>
                    </div>

                    <div className="p-6 space-y-4">
                        <div>
                            <label htmlFor="brand" className="block text-sm font-medium text-brand-text-muted mb-2">Brand</label>
                            <input
                                id="brand"
                                type="text"
                                name="brand"
                                value="LIONLORD"
                                readOnly
                                className="w-full bg-brand-primary border border-brand-primary text-brand-text-muted rounded-lg px-3 py-2 cursor-not-allowed"
                            />
                        </div>
                        <div>
                            <label htmlFor="size" className="block text-sm font-medium text-brand-text-muted mb-2">Size (e.g., 205/55R16)</label>
                            <input
                                id="size"
                                type="text"
                                name="size"
                                value={formData.size}
                                onChange={handleChange}
                                required
                                disabled={!!initialData}
                                placeholder="Enter tire size"
                                className="w-full bg-brand-dark border border-brand-primary text-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary outline-none disabled:cursor-not-allowed disabled:opacity-50"
                            />
                        </div>
                         <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="currentStock" className="block text-sm font-medium text-brand-text-muted mb-2">Current Stock</label>
                                <input
                                    id="currentStock"
                                    type="number"
                                    name="currentStock"
                                    value={formData.currentStock}
                                    onChange={handleChange}
                                    required
                                    min="0"
                                    className="w-full bg-brand-dark border border-brand-primary text-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary outline-none"
                                />
                            </div>
                             <div>
                                <label htmlFor="reorderLevel" className="block text-sm font-medium text-brand-text-muted mb-2">Reorder Level</label>
                                <input
                                    id="reorderLevel"
                                    type="number"
                                    name="reorderLevel"
                                    value={formData.reorderLevel}
                                    onChange={handleChange}
                                    required
                                    min="0"
                                    className="w-full bg-brand-dark border border-brand-primary text-white rounded-lg px-3 py-2 focus:ring-2 focus:ring-brand-secondary focus:border-brand-secondary outline-none"
                                />
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
                            {initialData ? 'Save Changes' : 'Add Tire'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
