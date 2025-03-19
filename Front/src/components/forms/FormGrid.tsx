import React from 'react';

interface FormGridProps {
	children: React.ReactNode;
	columns?: number;
	gap?: number;
}

const FormGrid: React.FC<FormGridProps> = ({
	children,
	columns = 2,
	gap = 16,
}) => {
	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: `repeat(${columns}, 1fr)`,
				gap: `${gap}px`,
			}}
		>
			{children}
		</div>
	);
};

export default FormGrid;
