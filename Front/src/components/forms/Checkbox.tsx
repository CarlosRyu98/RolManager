import React from 'react';

interface CheckboxProps {
	label: string;
	name: string;
	checked: boolean;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
	label,
	name,
	checked,
	onChange,
}) => {
	return (
		<label className='checkbox'>
			<input
				type='checkbox'
				name={name}
				checked={checked}
				onChange={onChange}
			/>
			{label}
		</label>
	);
};

export default Checkbox;
