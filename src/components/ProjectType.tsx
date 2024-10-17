import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { ProjectConfig } from '../types';
import { languages, operatingSystems, projectTypes } from '../data';
import IconButton from './common/IconButton';
import {
	inputStyles,
	errorInputStyles,
	normalInputStyles,
} from '../styles/common';
import { convertToCommandFormat, validateProjectName } from '../utils/helpers';

interface ProjectTypeProps {
	config: ProjectConfig;
	updateConfig: (newConfig: Partial<ProjectConfig>) => void;
}

const ProjectType: React.FC<ProjectTypeProps> = ({ config, updateConfig }) => {
	const [error, setError] = useState<string | null>(null);

	const handleProjectTypeSelection = (type: string) => {
		updateConfig({ projectType: type, framework: '' });
	};

	const handleProjectNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const projectName = e.target.value;
		const commandFormatName = convertToCommandFormat(projectName);
		updateConfig({ projectName, commandFormatName });
		setError(validateProjectName(projectName));
	};

	const handleOSSelection = (os: 'Windows' | 'macOS' | 'Linux') => {
		updateConfig({ os });
	};

	const handleLanguageSelection = (language: 'JavaScript' | 'TypeScript') => {
		updateConfig({ language });
	};

	return (
		<div className="space-y-8 text-white">
			<div>
				<label
					htmlFor="projectName"
					className="block text-xl font-semibold mb-3"
				>
					Nom du projet
				</label>
				<div className="flex items-center space-x-4">
					<input
						type="text"
						id="projectName"
						className={`${inputStyles} ${
							error ? errorInputStyles : normalInputStyles
						} flex-grow`}
						value={config.projectName}
						onChange={handleProjectNameChange}
						placeholder="Entrez le nom de votre projet"
						required
					/>
					<div className="flex space-x-2">
						{languages.map((lang) => (
							<button
								key={lang.name}
								onClick={() =>
									handleLanguageSelection(
										lang.name as 'JavaScript' | 'TypeScript'
									)
								}
								className={`p-2 rounded-lg flex items-center justify-center ${
									config.language === lang.name
										? 'border-amber-500 border-2 bg-amber-900 bg-opacity-50'
										: 'border-gray-600 border-2 hover:border-amber-400'
								}`}
								title={lang.name}
							>
								<Icon icon={lang.icon} className="w-8 h-8" />
							</button>
						))}
					</div>
				</div>
				{error && <p className="text-red-500 mt-2">{error}</p>}
			</div>

			<div>
				<h2 className="text-xl font-semibold mb-4">Système d'exploitation</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
					{operatingSystems.map((os) => (
						<IconButton
							key={os.name}
							name={os.name}
							icon={os.icon}
							isSelected={config.os === os.name}
							onClick={() =>
								handleOSSelection(os.name as 'Windows' | 'macOS' | 'Linux')
							}
						/>
					))}
				</div>
			</div>

			<div>
				<h2 className="text-xl font-semibold mb-4">Type de projet</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
					{projectTypes.map((type) => (
						<IconButton
							key={type.name}
							name={type.name}
							icon={type.icon}
							isSelected={config.projectType === type.name}
							onClick={() => handleProjectTypeSelection(type.name)}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default ProjectType;
