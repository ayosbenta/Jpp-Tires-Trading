
import React from 'react';
import { BellIcon, MenuIcon } from '../constants';

interface HeaderProps {
    sidebarOpen: boolean;
    setSidebarOpen: (open: boolean) => void;
}

export const Header: React.FC<HeaderProps> = ({ sidebarOpen, setSidebarOpen }) => {
    return (
        <header className="sticky top-0 z-10 bg-brand-surface bg-opacity-80 backdrop-blur-sm shadow-sm">
            <div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-brand-text-muted"
                    onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                    <MenuIcon className="h-6 w-6" />
                </button>

                {/* Title */}
                <div className="hidden lg:block">
                    <h1 className="text-xl font-semibold text-white">JPP Tires Trading</h1>
                    <p className="text-sm text-brand-text-muted">Rolling quality, driving trust. | 📍 Iponan, Cagayan De Oro, PH</p>
                </div>
                
                <div className="flex items-center space-x-4">
                    <button className="relative p-2 text-brand-text-muted hover:text-white rounded-full hover:bg-brand-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-dark focus:ring-brand-secondary">
                        <span className="sr-only">View notifications</span>
                        <BellIcon className="h-6 w-6" />
                        <span className="absolute top-1 right-1 block h-2 w-2 rounded-full bg-brand-secondary ring-2 ring-brand-surface"></span>
                    </button>
                    <div className="flex-shrink-0">
                        <img className="h-10 w-10 rounded-full" src="https://picsum.photos/id/237/200" alt="Admin" />
                    </div>
                </div>
            </div>
        </header>
    );
};
