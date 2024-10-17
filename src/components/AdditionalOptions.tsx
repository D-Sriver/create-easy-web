import React from 'react';
import { additionalOptions } from '../data';
import { ProjectConfig } from '../types';
import IconButton from './common/IconButton';

interface AdditionalOptionsProps {
	config: ProjectConfig;
	updateConfig: (newConfig: Partial<ProjectConfig>) => void;
}

const AdditionalOptions: React.FC<AdditionalOptionsProps> = ({
	config,
	updateConfig,
}) => {
	const options =
		additionalOptions[config.projectType as keyof typeof additionalOptions];

	if (!options || Object.keys(options).length === 0) {
		return null;
	}

	return (
		<div className="space-y-8 text-white">
			<h2 className="text-2xl font-bold mb-4">Options Additionnelles</h2>
			{Object.entries(options).map(([category, categoryOptions]) => (
				<div key={category} className="space-y-4">
					<h3 className="text-xl font-semibold">{category}</h3>
					<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
						{categoryOptions.map((option) => (
							<IconButton
								key={option.name}
								name={option.name}
								icon={option.icon}
								isSelected={
									config[category as keyof ProjectConfig] === option.name
								}
								onClick={() => updateConfig({ [category]: option.name })}
							/>
						))}
					</div>
				</div>
			))}
		</div>
	);
};

export default AdditionalOptions;
