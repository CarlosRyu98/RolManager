import React from 'react';

interface FormFieldProps {
	label: string;
	name: string;
	type?: 'text' | 'password' | 'email' | 'number';
	value: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder?: string;
	disabled?: boolean;
	readonly?: boolean;
	required?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
	label,
	name,
	type = 'text',
	value,
	onChange,
	placeholder = '',
	disabled = false,
	readonly = false,
	required = false,
}) => {
	return (
		<div className='form-field'>
			<label htmlFor={name}>{label}</label>
			<input
				id={name}
				name={name}
				type={type}
				value={value}
				onChange={onChange}
				placeholder={placeholder}
				disabled={disabled}
				readOnly={readonly}
				required={required}
				className={`input ${disabled ? 'input-disabled' : ''} ${
					readonly ? 'input-readonly' : ''
				}`}
			/>
		</div>
	);
};

export default FormField;
