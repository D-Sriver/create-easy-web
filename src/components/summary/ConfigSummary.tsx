import React from 'react';
import { ProjectConfig } from '../../types';

const configLabels: Record<string, string> = {
	projectName: 'Nom du projet',
	projectType: 'Type de projet',
	framework: 'Framework',
	database: 'Base de données',
	testingFramework: 'Framework de test',
	deploymentPlatform: 'Plateforme de déploiement',
	gestionnaire_detat_global: "Gestionnaire d'état global",
	framework_css: 'Framework CSS',
	routage: 'Routage',
	compiler: 'Compilateur',
	packageManager: 'Gestionnaire de paquets',
};

interface ConfigSummaryProps {
	config: ProjectConfig;
}

const ConfigSummary: React.FC<ConfigSummaryProps> = ({ config }) => {
	const renderConfigItem = (key: string, value: string | undefined) => {
		if (!value || key === 'commandFormatName') return null;
		const label =
			configLabels[key] ||
			key.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase());
		return (
			<div key={key} className="flex flex-col gap-y-4">
				<p className="font-semibold text-amber-300">{label} :</p>
				<p className="text-amber-500 w-fit border-2 border-amber-500 font-bold px-3 py-1 rounded-full bg-amber-900 bg-opacity-20">
					{value}
				</p>
			</div>
		);
	};

	return (
		<div className="bg-gray-800 bg-opacity-50 p-6 rounded-lg border-2 border-amber-600">
			<div className="grid grid-cols-2 gap-4">
				{Object.entries(config).map(([key, value]) =>
					renderConfigItem(key, value)
				)}
			</div>
		</div>
	);
};

export default ConfigSummary;
