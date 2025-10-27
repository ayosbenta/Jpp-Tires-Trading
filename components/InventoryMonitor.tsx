
import React from 'react';
import type { InventoryItem } from '../types';
import { inventoryData } from '../constants';
import { ExclamationTriangleIcon, SparklesIcon, PencilIcon, TrashIcon } from '../constants';

interface InventoryMonitorProps {
    items?: InventoryItem[];
    onEdit?: (item: InventoryItem) => void;
    onDelete?: (id: string) => void;
}

const staticItems: InventoryItem[] = inventoryData.map(item => ({...item, id: `${item.brand}-${item.size}`}));

export const InventoryMonitor: React.FC<InventoryMonitorProps> = ({ items = staticItems, onEdit, onDelete }) => {
    const isFunctional = onEdit && onDelete;

    return (
        <div className="bg-brand-surface p-6 rounded-xl shadow-lg overflow-x-auto">
            <h3 className="text-lg font-semibold text-white mb-4">Inventory Monitoring</h3>
            <table className="w-full text-sm text-left text-brand-text-muted">
                <thead className="text-xs text-brand-text uppercase bg-brand-primary">
                    <tr>
                        <th scope="col" className="px-6 py-3">Brand</th>
                        <th scope="col" className="px-6 py-3">Size</th>
                        <th scope="col" className="px-6 py-3">Current Stock</th>
                        <th scope="col" className="px-6 py-3">Reorder Level</th>
                        <th scope="col" className="px-6 py-3">Status</th>
                        {isFunctional && <th scope="col" className="px-6 py-3">Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id} className="bg-brand-surface border-b border-brand-primary hover:bg-brand-primary">
                            <th scope="row" className="px-6 py-4 font-medium text-white whitespace-nowrap flex items-center">
                                <SparklesIcon className="h-5 w-5 mr-3 text-brand-accent" />
                                {item.brand}
                            </th>
                            <td className="px-6 py-4">{item.size}</td>
                            <td className="px-6 py-4 font-bold">{item.currentStock}</td>
                            <td className="px-6 py-4">{item.reorderLevel}</td>
                            <td className="px-6 py-4">
                                <span className={`flex items-center px-2 py-1 rounded-full text-xs font-semibold ${
                                    item.status === 'OK' 
                                    ? 'bg-green-500 bg-opacity-20 text-green-300' 
                                    : 'bg-yellow-500 bg-opacity-20 text-yellow-300'
                                }`}>
                                    {item.status === 'Low Stock' && <ExclamationTriangleIcon className="h-4 w-4 mr-1"/>}
                                    {item.status}
                                </span>
                            </td>
                            {isFunctional && (
                                <td className="px-6 py-4 flex items-center space-x-4">
                                    <button onClick={() => onEdit(item)} className="text-brand-accent hover:text-white transition-colors">
                                        <PencilIcon className="h-5 w-5" />
                                    </button>
                                    <button onClick={() => onDelete(item.id)} className="text-brand-secondary hover:text-white transition-colors">
                                        <TrashIcon className="h-5 w-5" />
                                    </button>
                                </td>
                            )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
