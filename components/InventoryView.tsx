
import React, { useState } from 'react';
import { InventoryMonitor } from './InventoryMonitor';
import { InventoryForm } from './InventoryForm';
import { inventoryData as initialInventoryData } from '../constants';
import type { InventoryItem } from '../types';
import { PlusIcon } from '../constants';

const initialItems: InventoryItem[] = initialInventoryData.map(item => ({
    ...item,
    id: `${item.brand}-${item.size}-${Math.random()}`
}));

export const InventoryView: React.FC = () => {
    const [items, setItems] = useState<InventoryItem[]>(initialItems);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingItem, setEditingItem] = useState<InventoryItem | null>(null);

    const handleAddItem = () => {
        setEditingItem(null);
        setIsModalOpen(true);
    };

    const handleEditItem = (item: InventoryItem) => {
        setEditingItem(item);
        setIsModalOpen(true);
    };

    const handleDeleteItem = (itemId: string) => {
        if (window.confirm('Are you sure you want to delete this item? This action cannot be undone.')) {
             setItems(currentItems => currentItems.filter(item => item.id !== itemId));
        }
    };

    const handleFormSubmit = (formData: Omit<InventoryItem, 'id' | 'status' | 'brand'> & { brand?: string }) => {
        const dataWithBrand = { ...formData, brand: 'LIONLORD' };

        if (editingItem) { // Update logic
            setItems(currentItems => currentItems.map(item => 
                item.id === editingItem.id 
                ? { 
                    ...item, 
                    ...dataWithBrand, 
                    status: dataWithBrand.currentStock <= dataWithBrand.reorderLevel ? 'Low Stock' : 'OK' 
                  } 
                : item
            ));
        } else { // Create logic
            const newItem: InventoryItem = {
                ...dataWithBrand,
                id: `${dataWithBrand.brand}-${dataWithBrand.size}-${Date.now()}`,
                status: dataWithBrand.currentStock <= dataWithBrand.reorderLevel ? 'Low Stock' : 'OK',
            };
            setItems(currentItems => [...currentItems, newItem]);
        }
        setIsModalOpen(false);
        setEditingItem(null);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold text-white">Inventory Management</h2>
                <button 
                    onClick={handleAddItem} 
                    className="flex items-center justify-center bg-brand-secondary text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-200"
                >
                    <PlusIcon className="h-5 w-5 mr-2" />
                    Add New Tire
                </button>
            </div>
            <InventoryMonitor items={items} onEdit={handleEditItem} onDelete={handleDeleteItem} />
            <InventoryForm
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setEditingItem(null);
                }}
                onSubmit={handleFormSubmit}
                initialData={editingItem}
            />
        </div>
    );
};
