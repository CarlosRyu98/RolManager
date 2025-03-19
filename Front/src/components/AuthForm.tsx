import React, { useState } from 'react';
import Button from '../components/Button';

interface AuthFormProps {
	type?: 'login' | 'register';
	onSubmit?: (formData: FormDataState) => void;
}

interface FormDataState {
	username: string;
	password: string;
	confirmPassword: string;
}

const AuthForm: React.FC<AuthFormProps> = ({ type = 'login', onSubmit }) => {
	const [formData, setFormData] = useState<FormDataState>({
		username: '',
		password: '',
		confirmPassword: '',
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (onSubmit) onSubmit(formData);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className='auth-form'
		>
			<label>
				Usuario:
				<input
					type='text'
					name='username'
					value={formData.username}
					onChange={handleChange}
					required
				/>
			</label>
			<label>
				Contraseña:
				<input
					type='password'
					name='password'
					value={formData.password}
					onChange={handleChange}
					required
				/>
			</label>
			{type === 'register' && (
				<label>
					Confirmar Contraseña:
					<input
						type='password'
						name='confirmPassword'
						value={formData.confirmPassword}
						onChange={handleChange}
						required
					/>
				</label>
			)}
			<Button
				buttonClass='primary'
				disabled={
					!formData.username ||
					!formData.password ||
					(type === 'register' &&
						formData.password !== formData.confirmPassword)
				}
			>
				{type === 'login' ? 'Iniciar Sesión' : 'Registrarse'}
			</Button>
		</form>
	);
};

export default AuthForm;
