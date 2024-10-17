import { Icon } from '@iconify/react';
import React from 'react';

interface ButtonProps {
	text: string;
	icon?: string;
	selected?: boolean;
	onClick: () => void;
	className?: string;
}

const Button: React.FC<ButtonProps> = ({
	text,
	icon,
	selected,
	onClick,
	className,
}) => (
	<button
		className={`flex items-center bg-gray-700 justify-center p-4 border-2 rounded-lg transition duration-300 ${
			selected ? 'border-amber-600' : 'border-gray-600 hover:border-amber-600'
		} ${className}`}
		onClick={onClick}
	>
		{icon && <Icon icon={icon} className="w-8 h-8 mr-2" />}
		<span>{text}</span>
	</button>
);

export default Button;
