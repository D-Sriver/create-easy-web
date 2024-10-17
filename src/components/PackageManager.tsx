import React from 'react';
import { ProjectConfig } from '../types';
import { packageManagers } from '../data';
import IconButton from './common/IconButton';

interface PackageManagerProps {
	config: ProjectConfig;
	updateConfig: (newConfig: Partial<ProjectConfig>) => void;
}

const PackageManager: React.FC<PackageManagerProps> = ({
	config,
	updateConfig,
}) => {
	return (
		<div className="text-amber-300">
			<h2 className="text-2xl font-bold mb-4">
				Choisissez votre gestionnaire de paquets
			</h2>
			<div className="flex flex-wrap gap-4">
				{packageManagers.map((pm) => (
					<IconButton
						key={pm.name}
						name={pm.name}
						icon={pm.icon}
						isSelected={config.packageManager === pm.name}
						onClick={() => updateConfig({ packageManager: pm.name })}
					/>
				))}
			</div>
		</div>
	);
};

export default PackageManager;
