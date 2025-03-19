import React from 'react';

interface RadioGroupProps {
	label: string;
	name: string;
	options: { label: string; value: string }[];
	selectedValue: string;
	onChange: (value: string) => void;
}

const RadioGroup: React.FC<RadioGroupProps> = ({
	label,
	name,
	options,
	selectedValue,
	onChange,
}) => {
	return (
		<div className='radio-group'>
			<p>{label}</p>
			{options.map((option) => (
				<label key={option.value}>
					<input
						type='radio'
						name={name}
						value={option.value}
						checked={selectedValue === option.value}
						onChange={() => onChange(option.value)}
					/>
					{option.label}
				</label>
			))}
		</div>
	);
};

export default RadioGroup;
