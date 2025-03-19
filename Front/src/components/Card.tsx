import React from 'react';

interface CardProps {
	title: string;
	description?: string;
	children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, description, children }) => {
	return (
		<div className='card'>
			<h3>{title}</h3>
			{description && <p>{description}</p>}
			{children}
		</div>
	);
};

export default Card;
