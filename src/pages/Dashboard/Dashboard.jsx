import React, { useContext, useMemo } from 'react';
import styles from './Dashboard.module.scss';
import FormContext from '../../store/FormContext';
import Card from '../../components/card/Card';
import { CiSearch } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import { FaTrash } from "react-icons/fa";


const Dashboard = () => {
	const { state: formCtx, dispatch: dispatchFormAction } = useContext(FormContext);
    const tableHedaer = useMemo(() => ['Name', 'Email', 'Phone', 'Role', 'Action'], []);
    
    console.log('formCtx', formCtx.dashboardData)

	return (
		<Card>
			<div className={styles['dashboard']}>
				<div className={styles['dashboard--header']}>
					<div className={styles['input']}>
						<CiSearch className={styles['search-icon']} />
						<input placeholder="Search" />
					</div>
					<Link to="/user">
						<button>+ New</button>
					</Link>
				</div>
				<div className={styles['dashboard--table']}>
					{tableHedaer.map(t => (
						<h4>{t}</h4>
					))}
					{formCtx.dashboardData.map(value => (
						<>
							<p>{value.name}</p>
							<p>{value.email}</p>
							<p>{value.phone}</p>
                            <p>{value.role}</p>
                            <p>
							<FaTrash />
                            </p>
						</>
					))}
				</div>
				{!formCtx.dashboardData.length && <h5 className={styles['dashboard--no-data']}>No Data Found. Please create a new user</h5>}
			</div>
		</Card>
	);
};

export default Dashboard;
