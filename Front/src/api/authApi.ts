export const loginUser = async (username: string, password: string) => {
	try {
		const response = await fetch('http://localhost:5000/api/auth/login', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username, password }),
		});

		if (!response.ok) throw new Error('Credenciales incorrectas');

		const data = await response.json();
		return { username: data.username, token: data.token }; // Simulación de respuesta de API
	} catch (error) {
		console.error('Error en login:', error);
		throw error;
	}
};
