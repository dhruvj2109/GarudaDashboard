import React from 'react';

export const formDefaultState = {
	formValue: {
		name: '',
		email: '',
		phoneNumber: '',
		role: ''
	},
	dashboardData: []
};

const defaultFormContext = {
	state: formDefaultState,
	dispatch: item => {}
};

const FormContext = React.createContext(defaultFormContext);

export default FormContext;
