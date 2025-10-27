import React from 'react';
import type { InventoryItem, Order, TopSeller, Employee, Notification, KpiData, Customer } from './types';
import { OrderStatus } from './types';

// Icons
export const ChartBarIcon = ({ className = "h-6 w-6" }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.035-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" /></svg>);
export const CurrencyPesoIcon = ({ className = "h-6 w-6" }) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M14.25 7.756a4.5 4.5 0 1 0 0 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>);
export const CubeIcon = ({ className = "h-6 w-6" }) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="m21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" /></svg>);
export const ClockIcon = ({ className = "h-6 w-6" }) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>);
export const SparklesIcon = ({ className = "h-6 w-6" }) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" /></svg>);
export const UsersIcon = ({ className = "h-6 w-6" }) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-4.663M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Z" /></svg>);
export const BellIcon = ({ className = "h-6 w-6" }) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" /></svg>);
export const CogIcon = ({ className = "h-6 w-6" }) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0 0 15 0m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m18 0h-1.5m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m18 0h-1.5m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m18 0h-1.5m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m18 0h-1.5m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m18 0h-1.5m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m18 0h-1.5m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m18 0h-1.5m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m18 0h-1.5m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m18 0h-1.5m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m18 0h-1.5m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m18 0h-1.5m-15 0a7.5 7.5 0 1 1 15 0m-15 0H3m18 0h-1.5" /></svg>);
export const LogoutIcon = ({ className = "h-6 w-6" }) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3h12" /></svg>);
export const HomeIcon = ({ className = "h-6 w-6" }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" /><path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" /></svg>);
export const ExclamationTriangleIcon = ({ className = "h-6 w-6" }) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" /></svg>);
export const ArrowTrendingUpIcon = ({ className = "h-6 w-6" }) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.28m5.94 2.28L21 2.25M12 6.032l7.89 5.26a.75.75 0 0 0 1.11-.454l2.25-6.75a.75.75 0 0 0-1.023-1.023l-6.75 2.25a.75.75 0 0 0-.454 1.11L12 6.032Z" /></svg>);
export const TruckIcon = ({ className = "h-6 w-6" }) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.125-.504 1.125-1.125V14.25m-17.25 4.5v-1.875a3.375 3.375 0 003.375-3.375h9.75a3.375 3.375 0 003.375 3.375v1.875M16.5 12h-9.75a1.875 1.875 0 00-1.875 1.875v1.125c0 1.036.84 1.875 1.875 1.875h9.75c1.036 0 1.875-.84 1.875-1.875v-1.125a1.875 1.875 0 00-1.875-1.875z" /><path strokeLinecap="round" strokeLinejoin="round" d="M6 12V5.25A2.25 2.25 0 018.25 3h7.5A2.25 2.25 0 0118 5.25V12" /></svg>);
export const ShieldExclamationIcon = ({ className = "h-6 w-6" }) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" /></svg>);
export const MenuIcon = ({ className = "h-6 w-6" }) => (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>);
export const PencilIcon = ({ className = "h-6 w-6" }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M21.731 2.269a2.625 2.625 0 0 0-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 0 0 0-3.712ZM19.513 8.199l-3.712-3.712-12.15 12.15a5.25 5.25 0 0 0-1.32 2.214l-.8 2.685a.75.75 0 0 0 .933.933l2.685-.8a5.25 5.25 0 0 0 2.214-1.32L19.513 8.2Z" /></svg>);
export const TrashIcon = ({ className = "h-6 w-6" }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path fillRule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.9h1.368c1.603 0 2.816 1.336 2.816 2.9Zm-1.482 0a1.313 1.313 0 0 0-1.316-1.316h-1.368a1.313 1.313 0 0 0-1.316 1.316v.227h4.002v-.227Z" clipRule="evenodd" /></svg>);
export const PlusIcon = ({ className = "h-6 w-6" }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" /></svg>);
export const XMarkIcon = ({ className = "h-6 w-6" }) => (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" /></svg>);


// Mock Data
export const kpiData: KpiData[] = [
    { title: "Total Tires Sold Today", value: "128", icon: ChartBarIcon, change: "+12%", changeType: 'increase' },
    { title: "Total Sales (₱)", value: "₱ 384,500", icon: CurrencyPesoIcon, change: "+8.5%", changeType: 'increase' },
    { title: "Stock Remaining", value: "2,453", icon: CubeIcon, change: "-2%", changeType: 'decrease' },
    { title: "Pending Orders", value: "16", icon: ClockIcon },
    { title: "Top Selling Tire Brand", value: "LIONLORD", icon: SparklesIcon },
    { title: "Customer Count (Monthly)", value: "482", icon: UsersIcon, change: "+23", changeType: 'increase' },
];

export const salesData = [
    { name: 'Mon', sales: 4000 },
    { name: 'Tue', sales: 3000 },
    { name: 'Wed', sales: 2000 },
    { name: 'Thu', sales: 2780 },
    { name: 'Fri', sales: 1890 },
    { name: 'Sat', sales: 2390 },
    { name: 'Sun', sales: 3490 },
];

export const inventoryData: Omit<InventoryItem, 'id'>[] = [
    { brand: 'LIONLORD', size: '205/55R16', currentStock: 32, reorderLevel: 10, status: 'OK' },
    { brand: 'LIONLORD', size: '195/65R15', currentStock: 6, reorderLevel: 10, status: 'Low Stock' },
    { brand: 'LIONLORD', size: '225/45R17', currentStock: 55, reorderLevel: 15, status: 'OK' },
    { brand: 'LIONLORD', size: '265/70R17', currentStock: 12, reorderLevel: 10, status: 'OK' },
    { brand: 'LIONLORD', size: '185/60R14', currentStock: 9, reorderLevel: 8, status: 'OK' },
    { brand: 'LIONLORD', size: '215/60R16', currentStock: 4, reorderLevel: 10, status: 'Low Stock' },
];


export const orderData: Order[] = [
    { id: 'ORD-001', customer: 'John Doe', tireModel: 'LIONLORD LL-01', qty: 4, status: OrderStatus.Completed },
    { id: 'ORD-002', customer: 'Jane Smith', tireModel: 'LIONLORD L-301', qty: 2, status: OrderStatus.ForPickup },
    { id: 'ORD-003', customer: 'Robert Brown', tireModel: 'LIONLORD LL-81', qty: 4, status: OrderStatus.InProgress },
    { id: 'ORD-004', customer: 'Emily White', tireModel: 'LIONLORD LL-07', qty: 2, status: OrderStatus.InProgress },
    { id: 'ORD-005', customer: 'Michael Green', tireModel: 'LIONLORD LL-02', qty: 4, status: OrderStatus.Cancelled },
];

export const customerData: Customer[] = [
    { id: 'CUST-001', name: 'John Doe', phone: '09171234567', email: 'john.doe@example.com', lastPurchaseDate: '2024-07-15' },
    { id: 'CUST-002', name: 'Jane Smith', phone: '09287654321', email: 'jane.smith@example.com', lastPurchaseDate: '2024-07-12' },
    { id: 'CUST-003', name: 'Robert Brown', phone: '09998887777', email: 'robert.brown@example.com', lastPurchaseDate: '2024-07-10' },
    { id: 'CUST-004', name: 'Emily White', phone: '09152345678', email: 'emily.white@example.com', lastPurchaseDate: '2024-07-09' },
    { id: 'CUST-005', name: 'Michael Green', phone: '09459876543', email: 'michael.green@example.com', lastPurchaseDate: '2024-06-28' },
];

export const topSellersData: TopSeller[] = [
    { name: 'LIONLORD LL-01', sold: 124 },
    { name: 'LIONLORD L-301', sold: 98 },
    { name: 'LIONLORD LL-81', sold: 85 },
    { name: 'LIONLORD LL-07', sold: 72 },
    { name: 'LIONLORD LL-02', sold: 61 },
];

export const employeeData: Employee[] = [
    { name: 'Alex Reyes', fittings: 32, productivity: 95, upsells: 8, avatar: 'https://picsum.photos/id/1005/200' },
    { name: 'Maria Santos', fittings: 28, productivity: 92, upsells: 12, avatar: 'https://picsum.photos/id/1011/200' },
    { name: 'Leo Garcia', fittings: 25, productivity: 88, upsells: 5, avatar: 'https://picsum.photos/id/1012/200' },
];

export const feedbackData = [
    { name: 'Excellent', value: 400 },
    { name: 'Good', value: 300 },
    { name: 'Average', value: 50 },
    { name: 'Poor', value: 20 },
];

export const expenseProfitData = [
    { month: 'Jan', profit: 4000, expense: 2400 },
    { month: 'Feb', profit: 3000, expense: 1398 },
    { month: 'Mar', profit: 2000, expense: 9800 },
    { month: 'Apr', profit: 2780, expense: 3908 },
    { month: 'May', profit: 1890, expense: 4800 },
    { month: 'Jun', profit: 2390, expense: 3800 },
];

export const notificationsData: Notification[] = [
    { id: 1, type: 'stock', message: 'LIONLORD 195/65R15 stock is low. Only 6 left.', time: '5m ago' },
    { id: 2, type: 'demand', message: 'High demand for LIONLORD 225/45R17 this week.', time: '1h ago' },
    { id: 3, type: 'delivery', message: 'Supplier delivery from LIONLORD scheduled for tomorrow.', time: '3h ago' },
    { id: 4, type: 'transaction', message: 'Suspicious transaction flagged: ORD-098.', time: '1d ago' },
    { id: 5, type: 'stock', message: 'LIONLORD 215/60R16 stock is low. Only 4 left.', time: '2d ago' },
];