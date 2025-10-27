import React from 'react';

const ReportButton = ({ label, onClick }: { label: string; onClick: () => void }) => (
    <button
        onClick={onClick}
        className="bg-brand-primary text-white font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-brand-secondary transition-all duration-200 w-full md:w-auto"
    >
        {label}
    </button>
);

export const ReportsView: React.FC = () => {
    const handleGenerateSalesReport = () => {
        alert('Generating Sales Report...\n(This is a placeholder function)');
        console.log('Sales report generation logic would go here.');
    };

    const handleGenerateInventoryReport = () => {
        alert('Generating Inventory Report...\n(This is a placeholder function)');
        console.log('Inventory report generation logic would go here.');
    };

    const handleGenerateCustomerReport = () => {
        alert('Generating Customer Report...\n(This is a placeholder function)');
        console.log('Customer report generation logic would go here.');
    };

    return (
        <div className="bg-brand-surface p-8 rounded-xl shadow-lg h-full text-center flex flex-col items-center justify-center">
            <div className="text-6xl opacity-50 mb-6">
                📄
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Report Generation</h2>
            <p className="text-brand-text-muted max-w-md mb-8">Select a report to generate. The generated report can be downloaded or viewed in a new tab.</p>
            <div className="flex flex-col md:flex-row gap-4">
                <ReportButton label="Generate Sales Report" onClick={handleGenerateSalesReport} />
                <ReportButton label="Generate Inventory Report" onClick={handleGenerateInventoryReport} />
                <ReportButton label="Generate Customer Report" onClick={handleGenerateCustomerReport} />
            </div>
        </div>
    );
};
