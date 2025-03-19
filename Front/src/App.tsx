import { AuthProvider } from './context/AuthContext';
import AppRoutes from './routes/AppRoutes';
import './styles/globals.css';
import './styles/variables.css';

const App: React.FC = () => {
	return (
		<AuthProvider>
			<AppRoutes />
		</AuthProvider>
	);
};

export default App;
