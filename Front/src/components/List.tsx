import React from 'react';

interface ListProps<T> {
	items: T[];
	renderItem: (item: T, index: number) => React.ReactNode;
}

const List = <T,>({ items, renderItem }: ListProps<T>) => {
	return (
		<ul>
			{items.map((item, index) => (
				<li key={index}>{renderItem(item, index)}</li>
			))}
		</ul>
	);
};

export default List;
