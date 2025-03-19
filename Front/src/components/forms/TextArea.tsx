import React from 'react';

interface TextareaProps {
	label: string;
	name: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Textarea: React.FC<TextareaProps> = ({
	label,
	name,
	value,
	onChange,
}) => {
	return (
		<label>
			{label}
			<textarea
				name={name}
				value={value}
				onChange={onChange}
			></textarea>
		</label>
	);
};

export default Textarea;
