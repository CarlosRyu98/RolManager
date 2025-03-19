export const loginUser = async (username: string, password: string) => {
	return new Promise<{ username: string; token: string }>((resolve, reject) => {
		setTimeout(() => {
			// 📌 Usuario de prueba
			const mockUser = {
				username: 'master',
				password: 'master', // Solo para pruebas, en el backend real nunca guardamos contraseñas así
				token: 'mocked-jwt-token',
			};

			// 📌 Validación del usuario mockeado
			if (username === mockUser.username && password === mockUser.password) {
				resolve({ username: mockUser.username, token: mockUser.token });
			} else {
				reject(new Error('Credenciales incorrectas'));
			}
		}, 1000); // Simulamos un delay de 1 segundo
	});
};
