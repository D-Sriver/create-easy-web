import React from 'react';
import { ProjectConfig } from '../types';
import { deploymentPlatforms } from '../data';
import IconButton from './common/IconButton';

interface DeploymentProps {
	config: ProjectConfig;
	updateConfig: (newConfig: Partial<ProjectConfig>) => void;
}

const Deployment: React.FC<DeploymentProps> = ({ config, updateConfig }) => {
	const relevantDeploymentPlatforms = deploymentPlatforms.filter((platform) => {
		switch (config.projectType) {
			case 'Web':
				return ['Vercel', 'Netlify', 'AWS', 'Google Cloud', 'Heroku'].includes(
					platform.name
				);
			case 'API':
			case 'Microservices':
				return ['AWS', 'Google Cloud', 'Heroku'].includes(platform.name);
			default:
				return false;
		}
	});

	return (
		<div className="space-y-6 text-yellow-300">
			<h2 className="text-2xl font-bold mb-4">
				Choisissez votre plateforme de déploiement
			</h2>
			<div className="flex flex-wrap gap-4">
				{relevantDeploymentPlatforms.map((platform) => (
					<IconButton
						key={platform.name}
						name={platform.name}
						icon={platform.icon}
						isSelected={config.deploymentPlatform === platform.name}
						onClick={() => updateConfig({ deploymentPlatform: platform.name })}
					/>
				))}
			</div>
		</div>
	);
};

export default Deployment;
