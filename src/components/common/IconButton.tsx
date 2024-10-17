import { Icon } from '@iconify/react';
import React from 'react';
import { getIcon } from '../../data';

interface IconButtonProps {
	name: string;
	icon?: string;
	isSelected: boolean;
	onClick: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
	name,
	icon,
	isSelected,
	onClick,
}) => {
	const iconToUse = getIcon(icon);

	return (
		<button
			className={`flex flex-col items-center justify-center p-4 border-2 rounded-lg transition duration-300 ${
				isSelected
					? 'border-amber-600 bg-amber-900 bg-opacity-50'
					: 'border-gray-600 hover:border-amber-600'
			}`}
			onClick={onClick}
		>
			<Icon icon={iconToUse.icon} className="w-12 h-12 mb-2" />
			<span className="text-sm text-center">{name}</span>
		</button>
	);
};

export default IconButton;
