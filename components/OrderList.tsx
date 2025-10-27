import React from 'react';
import type { Order } from '../types';
import { OrderStatus } from '../types';
import { PencilIcon, TrashIcon } from '../constants';

interface OrderListProps {
    orders: Order[];
    onEdit?: (order: Order) => void;
    onDelete?: (id: string) => void;
}

const getStatusColor = (status: OrderStatus) => {
    switch (status) {
        case OrderStatus.Completed: return 'bg-green-500 bg-opacity-20 text-green-300';
        case OrderStatus.InProgress: return 'bg-blue-500 bg-opacity-20 text-blue-300';
        case OrderStatus.ForPickup: return 'bg-yellow-500 bg-opacity-20 text-yellow-300';
        case OrderStatus.Cancelled: return 'bg-red-500 bg-opacity-20 text-red-300';
        default: return 'bg-gray-500 bg-opacity-20 text-gray-300';
    }
};

export const OrderList: React.FC<OrderListProps> = ({ orders, onEdit, onDelete }) => {
    const isFunctional = onEdit && onDelete;

    return (
        <div className="bg-brand-surface p-6 rounded-xl shadow-lg overflow-x-auto h-full">
            <h3 className="text-lg font-semibold text-white mb-4">Orders & Service Requests</h3>
            <table className="w-full text-sm text-left text-brand-text-muted">
                <thead className="text-xs text-brand-text uppercase bg-brand-primary">
                    <tr>
                        <th scope="col" className="px-4 py-3">Order ID</th>
                        <th scope="col" className="px-4 py-3">Customer</th>
                        <th scope="col" className="px-4 py-3">Tire Model</th>
                        <th scope="col" className="px-4 py-3">Qty</th>
                        <th scope="col" className="px-4 py-3">Status</th>
                        {isFunctional && <th scope="col" className="px-4 py-3">Actions</th>}
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                        <tr key={order.id} className="bg-brand-surface border-b border-brand-primary hover:bg-brand-primary">
                            <td className="px-4 py-3 font-medium text-white">{order.id}</td>
                            <td className="px-4 py-3">{order.customer}</td>
                            <td className="px-4 py-3">{order.tireModel}</td>
                            <td className="px-4 py-3">{order.qty}</td>
                            <td className="px-4 py-3">
                                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getStatusColor(order.status)}`}>
                                    {order.status}
                                </span>
                            </td>
                            {isFunctional && (
                                <td className="px-4 py-3 flex items-center space-x-4">
                                    <button onClick={() => onEdit(order)} className="text-brand-accent hover:text-white transition-colors">
                                        <PencilIcon className="h-5 w-5" />
                                    </button>
                                    <button onClick={() => onDelete(order.id)} className="text-brand-secondary hover:text-white transition-colors">
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