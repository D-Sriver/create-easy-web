import React from 'react';
import { ProjectConfig } from '../types';
import AdditionalTips from './summary/AdditionalTips';
import ConfigSummary from './summary/ConfigSummary';
import InstallationCommands from './summary/InstallationCommands';

interface SummaryProps {
	config: ProjectConfig;
}

const Summary: React.FC<SummaryProps> = ({ config }) => {
	return (
		<div>
			<h2 className="text-2xl font-bold mb-4 text-amber-300">
				Résumé de votre configuration
			</h2>
			<ConfigSummary config={config} />
			<InstallationCommands config={config} />
			<AdditionalTips config={config} />
		</div>
	);
};

export default Summary;
