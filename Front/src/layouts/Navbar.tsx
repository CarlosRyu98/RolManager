import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/layouts/navbar.css';

const Navbar: React.FC = () => {
	const navigate = useNavigate();

	return (
		<nav className='navbar'>
			<h2 onClick={() => navigate('/dashboard')}>📖 Rol Manager</h2>
			<ul>
				<li onClick={() => navigate('/campaigns')}>📜 Campañas</li>
				<li onClick={() => navigate('/characters')}>🧙‍♂️ Personajes</li>
				<li onClick={() => navigate('/settings')}>⚙ Configuración</li>
			</ul>
		</nav>
	);
};

export default Navbar;
