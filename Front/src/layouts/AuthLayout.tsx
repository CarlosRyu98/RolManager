import React from 'react';
import '../styles/authLayout.css';

interface AuthLayoutProps {
	children: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
	return (
		<div className='auth-layout'>
			<div className='auth-container'>{children}</div>
		</div>
	);
};

export default AuthLayout;
