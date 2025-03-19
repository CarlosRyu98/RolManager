import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/Auth/Login';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../pages/Dashboard';

const AppRoutes = () => {
	return (
		<Router>
			<Routes>
				<Route
					path='/login'
					element={<Login />}
				/>
				<Route
					path='/dashboard'
					element={
						<PrivateRoute>
							<Dashboard />
						</PrivateRoute>
					}
				/>
			</Routes>
		</Router>
	);
};

export default AppRoutes;
