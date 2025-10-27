import React, { useState } from 'react';
import { OrderList } from './OrderList';
import { OrderForm } from './OrderForm';
import { orderData as initialOrderData } from '../constants';
import type { Order } from '../types';
import { PlusIcon } from '../constants';

interface OrdersViewProps {
    isDashboard?: boolean;
}

export const OrdersView: React.FC<OrdersViewProps> = ({ isDashboard = false }) => {
    const [orders, setOrders] = useState<Order[]>(initialOrderData);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingOrder, setEditingOrder] = useState<Order | null>(null);

    const handleAddOrder = () => {
        setEditingOrder(null);
        setIsModalOpen(true);
    };

    const handleEditOrder = (order: Order) => {
        setEditingOrder(order);
        setIsModalOpen(true);
    };

    const handleDeleteOrder = (orderId: string) => {
        if (window.confirm('Are you sure you want to delete this order? This action cannot be undone.')) {
            setOrders(currentOrders => currentOrders.filter(order => order.id !== orderId));
        }
    };

    const handleFormSubmit = (formData: Omit<Order, 'id'>) => {
        if (editingOrder) { // Update logic
            setOrders(currentOrders => currentOrders.map(order =>
                order.id === editingOrder.id
                    ? { ...order, ...formData }
                    : order
            ));
        } else { // Create logic
            const newOrder: Order = {
                ...formData,
                id: `ORD-${Date.now()}`,
            };
            setOrders(currentOrders => [newOrder, ...currentOrders]);
        }
        setIsModalOpen(false);
        setEditingOrder(null);
    };
    
    if (isDashboard) {
        return <OrderList orders={orders.slice(0, 5)} />;
    }

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold text-white">Order Management</h2>
                <button
                    onClick={handleAddOrder}
                    className="flex items-center justify-center bg-brand-secondary text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-200"
                >
                    <PlusIcon className="h-5 w-5 mr-2" />
                    Add New Order
                </button>
            </div>
            <OrderList orders={orders} onEdit={handleEditOrder} onDelete={handleDeleteOrder} />
            <OrderForm
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setEditingOrder(null);
                }}
                onSubmit={handleFormSubmit}
                initialData={editingOrder}
            />
        </div>
    );
};