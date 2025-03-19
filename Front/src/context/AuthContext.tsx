import React, { createContext, useContext, useState, useEffect } from 'react';
import { loginUser } from '../api/authApi-mock';

// 📌 Interfaz para el usuario autenticado
interface User {
	username: string;
	token: string;
}

// 📌 Interfaz del contexto de autenticación
interface AuthContextType {
	user: User | null;
	login: (username: string, password: string) => Promise<void>;
	logout: () => void;
}

// 📌 Creamos el contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// 📌 Proveedor del contexto de autenticación
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [user, setUser] = useState<User | null>(null);

	// Cargar usuario desde localStorage al iniciar la app
	useEffect(() => {
		const storedUser = localStorage.getItem('user');
		if (storedUser) {
			setUser(JSON.parse(storedUser));
		}
	}, []);

	// 📌 Función de login (llama a la API)
	const login = async (username: string, password: string) => {
		const userData = await loginUser(username, password);
		if (userData) {
			setUser(userData);
			localStorage.setItem('user', JSON.stringify(userData));
		} else {
			throw new Error('Credenciales incorrectas');
		}
	};

	// 📌 Función de logout (borra la sesión)
	const logout = () => {
		setUser(null);
		localStorage.removeItem('user');
	};

	// 📌 Proveemos el contexto a toda la app
	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

// 📌 Hook personalizado para usar AuthContext
export const useAuth = (): AuthContextType => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth debe usarse dentro de un AuthProvider');
	}
	return context;
};
