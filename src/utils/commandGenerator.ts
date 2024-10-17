// Généré par Easy Dev Steps
import { ProjectConfig } from '../types';
import {
	reduxExplanation,
	tailwindExplanation,
} from './configurationExplanations';

export const generateCommand = (
	config: ProjectConfig,
	os: 'Windows' | 'macOS' | 'Linux'
): { command: string; explanation: string }[] => {
	const packageManager = config.packageManager?.toLowerCase() || 'npm';
	const language = config.language;
	const commands = [];

	// Commande de création du projet
	switch (config.framework?.toLowerCase()) {
		case 'react':
			commands.push({
				command: `${packageManager} create vite ${
					config.projectName
				} --template ${language === 'TypeScript' ? 'react-ts' : 'react'}`,
				explanation: 'Cette commande crée un nouveau projet React avec Vite',
			});
			break;
		case 'vue':
			commands.push({
				command: `${packageManager} create vite ${
					config.projectName
				} --template ${language === 'TypeScript' ? 'vue-ts' : 'vue'}`,
				explanation: 'Cette commande crée un nouveau projet Vue avec Vite',
			});
			break;
		case 'svelte':
			commands.push({
				command: `${packageManager} create vite ${
					config.projectName
				} --template ${language === 'TypeScript' ? 'svelte-ts' : 'svelte'}`,
				explanation: 'Cette commande crée un nouveau projet Svelte avec Vite',
			});
			break;
		case 'next.js':
			commands.push({
				command: `${packageManager} create next-app ${config.projectName} ${
					language === 'TypeScript' ? '--typescript' : ''
				}`,
				explanation: 'Cette commande crée un nouveau projet Next.js avec Vite',
			});
			break;
		default:
			commands.push({
				command: `${packageManager} create vite ${
					config.projectName
				} --template ${config.framework?.toLowerCase()}`,
				explanation: 'Cette commande crée un nouveau projet avec Vite',
			});
	}

	// Commande pour entrer dans le dossier du projet
	commands.push({
		command: `cd "${config.projectName}"`,
		explanation:
			"Cette commande permet d'entrer dans le dossier du projet nouvellement créé",
	});

	// Installation des dépendances
	commands.push({
		command: `${packageManager} install`,
		explanation: 'Cette commande installe les dépendances de base du projet',
	});

	if (config['Framework CSS'] === 'Tailwind CSS') {
		commands.push({
			command: `${packageManager} install -D tailwindcss postcss autoprefixer`,
			explanation: 'Cette commande installe Tailwind CSS et ses dépendances',
		});
	}

	if (config["Gestionnaire d'état global"] === 'Redux') {
		commands.push({
			command: `${packageManager} install @reduxjs/toolkit react-redux`,
			explanation: 'Cette commande installe Redux et React-Redux',
		});
	}

	// Modifier la commande 'cd' pour Windows
	if (os === 'Windows') {
		const cdCommand = commands.find((cmd) => cmd.command.startsWith('cd '));
		if (cdCommand) {
			cdCommand.command = cdCommand.command.replace('cd ', 'cd /d ');
		}
	}

	return commands;
};

export const generateTips = (config: ProjectConfig): string[] => {
	const tips: string[] = [];

	tips.push(
		`Après avoir exécuté ces commandes, votre projet ${config.framework} sera créé et configuré avec ${config.language}.`
	);

	if (config['Framework CSS'] === 'Tailwind CSS') {
		tips.push('Configuration de Tailwind CSS :');
		tips.push(tailwindExplanation.toString());
	}

	if (config["Gestionnaire d'état global"] === 'Redux') {
		tips.push('Configuration de Redux :');
		tips.push(reduxExplanation.toString());
	}

	return tips;
};
