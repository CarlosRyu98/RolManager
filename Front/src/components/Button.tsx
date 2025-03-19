import React from 'react';

interface ButtonProps {
	buttonClass?: string;
	disabled?: boolean;
	readonly?: boolean;
	onClick?: () => void;
	children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
	buttonClass = '',
	disabled = false,
	readonly = false,
	onClick = () => {},
	children,
}) => {
	return (
		<button
			className={buttonClass}
			onClick={disabled || readonly ? undefined : onClick}
			disabled={disabled}
			aria-readonly={readonly ? 'true' : 'false'}
		>
			{children}
		</button>
	);
};

export default Button;
