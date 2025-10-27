export type View = 'Dashboard' | 'Inventory' | 'Orders' | 'Customers' | 'Reports' | 'Settings';

export interface KpiData {
    title: string;
    value: string;
    icon: React.ComponentType<{ className?: string }>;
    change?: string;
    changeType?: 'increase' | 'decrease';
}

export interface InventoryItem {
    id: string;
    brand: string;
    size: string;
    currentStock: number;
    reorderLevel: number;
    status: 'OK' | 'Low Stock';
}

export enum OrderStatus {
    Completed = 'Completed',
    InProgress = 'In Progress',
    ForPickup = 'For Pickup',
    Cancelled = 'Cancelled'
}

export interface Order {
    id: string;
    customer: string;
    tireModel: string;
    qty: number;
    status: OrderStatus;
}

export interface Customer {
    id: string;
    name: string;
    phone: string;
    email: string;
    lastPurchaseDate: string;
}

export interface TopSeller {
    name: string;
    sold: number;
}

export interface Employee {
    name: string;
    fittings: number;
    productivity: number;
    upsells: number;
    avatar: string;
}

export interface Notification {
    id: number;
    type: 'stock' | 'demand' | 'transaction' | 'delivery';
    message: string;
    time: string;
}