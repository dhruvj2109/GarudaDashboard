import React, { useContext, useState, useCallback } from 'react';
import styles from './UserForm.module.scss';
import FormContext from '../../store/FormContext';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/card/Card';

const UserForm = () => {
	const { dispatch: dispatchFormAction } = useContext(FormContext);
	const navigate = useNavigate();
	const [name, setname] = useState('');
	const [email, setEmail] = useState('');
	const [phone, setPhone] = useState('');
	const [role, setRole] = useState('');

	const submitHandler = useCallback(e => {
		e.preventDefault();

		const obj = {
			name: name,
			email: email,
			phone: phone,
			role: role
		};
		dispatchFormAction({ type: 'DASHBOARD_DATA', payload: obj });
		navigate('/');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [name, email, phone, role]);

	return (
		<Card>
			<form className={styles['user-form']} onSubmit={submitHandler}>
				<div className={styles['user-form--form-input']}>
					<label>Name</label>
					<input onChange={e => setname(e.target.value)} value={name} />
				</div>
				<div className={styles['user-form--form-input']}>
					<label>Email</label>
					<input onChange={e => setEmail(e.target.value)} value={email} />
				</div>
				<div className={styles['user-form--form-input']}>
					<label>Phone</label>
					<input onChange={e => setPhone(e.target.value)} value={phone} />
				</div>
				<div className={styles['user-form--form-input']}>
					<label>Role</label>
					<input onChange={e => setRole(e.target.value)} value={role} />
				</div>
				<button>Submit</button>
			</form>
		</Card>
	);
};

export default UserForm;
