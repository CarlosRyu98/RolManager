import React from 'react';

interface SelectorProps {
	label: string;
	name: string;
	options: { label: string; value: string }[];
	value: string;
	onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: React.FC<SelectorProps> = ({
	label,
	name,
	options,
	value,
	onChange,
}) => {
	return (
		<label>
			{label}
			<select
				name={name}
				value={value}
				onChange={onChange}
			>
				{options.map((option) => (
					<option
						key={option.value}
						value={option.value}
					>
						{option.label}
					</option>
				))}
			</select>
		</label>
	);
};

export default Select;
