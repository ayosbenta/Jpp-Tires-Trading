
import React from 'react';
import type { View } from '../types';
import { HomeIcon, CubeIcon, ClockIcon, UsersIcon, ChartBarIcon, CogIcon, LogoutIcon } from '../constants';

interface SidebarProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    activeView: View;
    setActiveView: (view: View) => void;
}

interface NavItemProps {
    icon: React.ElementType;
    label: string;
    active?: boolean;
    onClick: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const NavItem: React.FC<NavItemProps> = ({ icon: Icon, label, active, onClick }) => (
    <a 
        href="#"
        onClick={onClick}
        className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-200 ${active ? 'bg-brand-secondary text-white' : 'text-brand-text-muted hover:bg-brand-primary hover:text-white'}`}
    >
        <Icon className="h-5 w-5 mr-3" />
        <span className="font-medium">{label}</span>
    </a>
);

export const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen, activeView, setActiveView }) => {
    
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, view: View) => {
        e.preventDefault();
        setActiveView(view);
        if (isOpen && window.innerWidth < 1024) {
            setIsOpen(false);
        }
    };

    return (
        <>
            <div className={`fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={() => setIsOpen(false)}></div>
            <div className={`fixed lg:relative z-30 inset-y-0 left-0 w-64 bg-brand-surface transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out flex flex-col`}>
                <div className="flex items-center justify-center h-20 border-b border-brand-primary">
                    <h1 className="text-2xl font-bold text-white">JPP Tires</h1>
                </div>
                <nav className="flex-1 px-4 py-6 space-y-2">
                    <NavItem icon={HomeIcon} label="Dashboard" active={activeView === 'Dashboard'} onClick={(e) => handleNavClick(e, 'Dashboard')} />
                    <NavItem icon={CubeIcon} label="Inventory" active={activeView === 'Inventory'} onClick={(e) => handleNavClick(e, 'Inventory')} />
                    <NavItem icon={ClockIcon} label="Orders" active={activeView === 'Orders'} onClick={(e) => handleNavClick(e, 'Orders')} />
                    <NavItem icon={UsersIcon} label="Customers" active={activeView === 'Customers'} onClick={(e) => handleNavClick(e, 'Customers')} />
                    <NavItem icon={ChartBarIcon} label="Reports" active={activeView === 'Reports'} onClick={(e) => handleNavClick(e, 'Reports')} />
                </nav>
                <div className="px-4 py-6 border-t border-brand-primary space-y-2">
                    <NavItem icon={CogIcon} label="Settings" active={activeView === 'Settings'} onClick={(e) => handleNavClick(e, 'Settings')} />
                    <a href="#" className="flex items-center px-4 py-3 rounded-lg transition-colors duration-200 text-brand-text-muted hover:bg-brand-primary hover:text-white">
                        <LogoutIcon className="h-5 w-5 mr-3" />
                        <span className="font-medium">Logout</span>
                    </a>
                </div>
            </div>
        </>
    );
};
