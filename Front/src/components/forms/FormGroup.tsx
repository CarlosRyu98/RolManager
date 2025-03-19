import React from 'react';

interface FormGroupProps {
	title?: string;
	children: React.ReactNode;
}

const FormGroup: React.FC<FormGroupProps> = ({ title, children }) => {
	return (
		<fieldset className='form-group'>
			{title && <legend>{title}</legend>}
			{children}
		</fieldset>
	);
};

export default FormGroup;
