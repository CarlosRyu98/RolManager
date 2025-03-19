import React from 'react';
import Navbar from './Navbar';
import '../styles/layouts/dashboardLayout.css';

interface DashboardLayoutProps {
	children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
	return (
		<div className='dashboard-layout'>
			<Navbar />
			<div className='dashboard-content'>{children}</div>
		</div>
	);
};

export default DashboardLayout;
