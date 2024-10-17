import React from 'react';
import { ProjectConfig } from '../types';
import { testingFrameworks } from '../data';
import IconButton from './common/IconButton';

interface TestingProps {
	config: ProjectConfig;
	updateConfig: (newConfig: Partial<ProjectConfig>) => void;
}

const Testing: React.FC<TestingProps> = ({ config, updateConfig }) => {
	const relevantTestingFrameworks = testingFrameworks.filter((framework) => {
		switch (config.projectType) {
			case 'Web':
				return ['Jest', 'Cypress', 'Playwright'].includes(framework.name);
			case 'API':
			case 'Microservices':
				return ['Jest', 'Mocha'].includes(framework.name);
			case 'Mobile':
				return ['Jest', 'Detox'].includes(framework.name);
			default:
				return false;
		}
	});

	return (
		<div className="space-y-6 text-yellow-300">
			<h2 className="text-2xl font-bold mb-4">Framework de test</h2>
			<div className="flex flex-wrap gap-4">
				{relevantTestingFrameworks.map((framework) => (
					<IconButton
						key={framework.name}
						name={framework.name}
						icon={framework.icon}
						isSelected={config.testingFramework === framework.name}
						onClick={() => updateConfig({ testingFramework: framework.name })}
					/>
				))}
			</div>
		</div>
	);
};

export default Testing;
