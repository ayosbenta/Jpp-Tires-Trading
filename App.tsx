import React, { useState } from 'react';
import type { View } from './types';

import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { KpiCards } from './components/KpiCards';
import { SalesPerformance } from './components/SalesPerformance';
import { InventoryMonitor } from './components/InventoryMonitor';
import { InventoryView } from './components/InventoryView';
import { OrdersView } from './components/OrdersView';
import { TopSellers } from './components/TopSellers';
import { EmployeePerformance } from './components/EmployeePerformance';
import { CustomerFeedback } from './components/CustomerFeedback';
import { ExpenseProfit } from './components/ExpenseProfit';
import { Notifications } from './components/Notifications';
import { CustomerView } from './components/CustomerView';
import { ReportsView } from './components/ReportsView';

const App: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [activeView, setActiveView] = useState<View>('Dashboard');

    const renderContent = () => {
        switch (activeView) {
            case 'Dashboard':
                return (
                    <div className="grid grid-cols-12 gap-6">
                        <KpiCards />
                        <div className="col-span-12 lg:col-span-8">
                            <SalesPerformance />
                        </div>
                        <div className="col-span-12 lg:col-span-4">
                            <Notifications />
                        </div>
                        <div className="col-span-12">
                            {/* Shows a static view on dashboard */}
                            <InventoryMonitor items={undefined} /> 
                        </div>
                        <div className="col-span-12 xl:col-span-7">
                            <OrdersView isDashboard={true} />
                        </div>
                        <div className="col-span-12 xl:col-span-5">
                            <TopSellers />
                        </div>
                        <div className="col-span-12 xl:col-span-5">
                           <EmployeePerformance/>
                        </div>
                        <div className="col-span-12 md:col-span-6 xl:col-span-3">
                           <CustomerFeedback />
                        </div>
                        <div className="col-span-12 md:col-span-6 xl:col-span-4">
                           <ExpenseProfit />
                        </div>
                    </div>
                );
            case 'Inventory':
                return <InventoryView />;
            case 'Orders':
                return <OrdersView />;
            case 'Customers':
                return <CustomerView />;
            case 'Reports':
                return <ReportsView />;
            case 'Settings':
                return (
                    <div className="bg-brand-surface p-8 rounded-xl shadow-lg h-full text-center flex flex-col items-center justify-center">
                        <div className="text-6xl opacity-50 mb-4">
                            🚧
                        </div>
                        <h2 className="text-3xl font-bold text-white mb-2">{activeView}</h2>
                        <p className="text-brand-text-muted max-w-md">This feature is currently under construction. Please check back later for updates!</p>
                    </div>
                );
            default:
                return <div>Dashboard</div>; 
        }
    };

    return (
        <div className="flex h-screen bg-brand-dark overflow-hidden">
            <Sidebar 
                isOpen={sidebarOpen} 
                setIsOpen={setSidebarOpen}
                activeView={activeView}
                setActiveView={setActiveView} 
            />

            <div className="flex-1 flex flex-col overflow-y-auto">
                <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
                
                <main className="flex-1 p-4 lg:p-8">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
};

export default App;