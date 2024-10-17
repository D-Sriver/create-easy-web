import React from 'react';
import { ProjectConfig } from '../types';
import { frameworks } from '../data';
import Button from './common/Button';

interface FrameworkProps {
	config: ProjectConfig;
	updateConfig: (newConfig: Partial<ProjectConfig>) => void;
}

const Framework: React.FC<FrameworkProps> = ({ config, updateConfig }) => {
	const availableFrameworks =
		frameworks[config.projectType as keyof typeof frameworks] || [];

	if (availableFrameworks.length === 0) {
		return null; // Ne rien rendre si aucun framework n'est disponible
	}

	return (
		<div className="space-y-8 text-white">
			<h2 className="text-2xl font-bold mb-4">Choisissez votre framework</h2>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
				{availableFrameworks.map((fw) => (
					<Button
						key={fw.name}
						text={fw.name}
						icon={fw.icon}
						selected={config.framework === fw.name}
						onClick={() => updateConfig({ framework: fw.name })}
					/>
				))}
			</div>
		</div>
	);
};

export default Framework;
