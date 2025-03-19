import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import DashboardLayout from '../layouts/DashboardLayout';
import Button from '../components/Button';

const Dashboard: React.FC = () => {
	const { user, logout } = useAuth();
	const navigate = useNavigate();

	const handleLogout = () => {
		logout();
		navigate('/login');
	};

	return (
		<DashboardLayout>
			<h1>Bienvenido, {user?.username} 🎲</h1>
			<p>¡Administra tus campañas y personajes aquí!</p>

			<div className='dashboard-actions'>
				<Button
					buttonClass='btn-primary'
					onClick={() => navigate('/campaigns')}
				>
					📜 Ver Campañas
				</Button>
				<Button
					buttonClass='btn-secondary'
					onClick={() => navigate('/characters')}
				>
					🧙‍♂️ Ver Personajes
				</Button>
			</div>

			<Button
				buttonClass='btn-danger'
				onClick={handleLogout}
			>
				🚪 Cerrar Sesión
			</Button>
		</DashboardLayout>
	);
};

export default Dashboard;
