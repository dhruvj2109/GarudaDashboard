import { useCallback, useReducer } from 'react';
import FormContext, { formDefaultState } from './FormContext';

const FormProvider = props => {
	const formReducer = useCallback((state, action) => {
		console.log('payload', action.payload)
		console.log('state', state)
		if (action.type === 'NEW_FORM_VALUE') {
		}
		if (action.type === 'DASHBOARD_DATA') {
            return {
                ...state,
				dashboardData: [...state.dashboardData, action.payload]
			};
			// console.log('action payload', action.payload);
		}
		return state;
	}, []);

	const initReducer = useCallback(() => formDefaultState, []);
	const [formState, dispatchFormAction] = useReducer(formReducer, formDefaultState, initReducer);
	return <FormContext.Provider value={{ state: formState, dispatch: dispatchFormAction }}>{props.children}</FormContext.Provider>;
};

export default FormProvider;
