import React from 'react';
import { databases } from '../data';
import { ProjectConfig } from '../types';
import IconButton from './common/IconButton';

interface DatabaseProps {
	config: ProjectConfig;
	updateConfig: (newConfig: Partial<ProjectConfig>) => void;
}

const Database: React.FC<DatabaseProps> = ({ config, updateConfig }) => {
	return (
		<div className="space-y-8 text-white">
			<h2 className="text-2xl font-bold mb-4">
				Choisissez votre base de données
			</h2>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
				{databases.map((db) => (
					<IconButton
						key={db.name}
						name={db.name}
						icon={db.icon}
						isSelected={config.database === db.name}
						onClick={() => updateConfig({ database: db.name })}
					/>
				))}
			</div>
		</div>
	);
};

export default Database;
