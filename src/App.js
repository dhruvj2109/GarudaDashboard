import styles from './App.module.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import UserForm from './pages/UserForm/UserForm';
import FormProvider from './store/FormProvider';
import Header from './components/header/Header';
import Menu from './components/menu/Menu';

function App() {
	return (
		<div className={styles['app']}>
			<FormProvider>
				<BrowserRouter>
					<Header />
					<div className={styles['app-layout']}>
						<div className={styles['app-layout--left']}>
							<Menu />
						</div>
						<div className={styles['app-layout--right']}>
							<Routes>
								<Route exact path="/" element={<Dashboard />}></Route>
								<Route exact path="/user" element={<UserForm />}></Route>
							</Routes>
						</div>
					</div>
				</BrowserRouter>
			</FormProvider>
		</div>
	);
}

export default App;
