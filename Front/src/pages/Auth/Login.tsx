import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import FormField from '../../components/forms/FormField';
import Toast from '../../components/Toast';
import { useAuth } from '../../context/AuthContext';
import '../../styles/pages/auth.css';

const Login: React.FC = () => {
	const { login } = useAuth();
	const [formData, setFormData] = useState({ username: '', password: '' });
	const [error, setError] = useState<string | null>(null);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		setError(null);

		try {
			await login(formData.username, formData.password);
			navigate('/dashboard');
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (err) {
			setError('Credenciales incorrectas');
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className='login-container'>
			<h1>Iniciar Sesión</h1>
			<form
				onSubmit={handleSubmit}
				className='login-form'
			>
				<FormField
					label='Usuario'
					name='username'
					value={formData.username}
					onChange={(e) =>
						setFormData({ ...formData, [e.target.name]: e.target.value })
					}
					required
				/>
				<FormField
					label='Contraseña'
					name='password'
					type='password'
					value={formData.password}
					onChange={(e) =>
						setFormData({ ...formData, password: e.target.value })
					}
					required
				/>
				{error && (
					<Toast
						message={error}
						type='error'
					/>
				)}
				<Button
					buttonClass='btn-primary'
					disabled={loading}
				>
					{loading ? 'Cargando...' : 'Ingresar'}
				</Button>
			</form>
		</div>
	);
};

export default Login;
