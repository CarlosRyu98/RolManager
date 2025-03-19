import React from 'react';
import Navbar from './Navbar';
import '../styles/layouts/mainLayout.css';

interface MainLayoutProps {
	children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
	return (
		<div className='main-layout'>
			<Navbar />
			<main className='content'>{children}</main>
		</div>
	);
};

export default MainLayout;
