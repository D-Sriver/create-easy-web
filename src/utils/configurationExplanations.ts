interface ExplanationStep {
	title: string;
	content: string;
	code?: string;
}

interface ConfigurationExplanation {
	title: string;
	steps: ExplanationStep[];
}

export const tailwindExplanation: ConfigurationExplanation = {
	title: 'Configuration de Tailwind CSS',
	steps: [
		{
			title: 'Initialisation',
			content:
				'Exécutez la commande suivante pour créer les fichiers de configuration :',
			code: 'npx tailwindcss init -p',
		},
		{
			title: 'Configuration du fichier tailwind.config.js',
			content:
				'Modifiez le fichier `tailwind.config.js` pour inclure vos chemins de fichiers :',
			code: `module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: { extend: {} },
  plugins: [],
}`,
		},
		{
			title: 'Ajout des directives Tailwind',
			content:
				'Ajoutez les directives Tailwind dans votre fichier CSS principal :',
			code: `@tailwind base;
@tailwind components;
@tailwind utilities;`,
		},
	],
};

export const reduxExplanation: ConfigurationExplanation = {
	title: 'Configuration de Redux',
	steps: [
		{
			title: 'Création du dossier store',
			content: 'Créez un dossier `store` dans le répertoire `src`.',
		},
		{
			title: 'Configuration du store',
			content:
				'Ajoutez un fichier `store.js` (ou `store.ts`) pour configurer le store Redux.',
		},
		{
			title: 'Création des slices',
			content: 'Créez des slices pour gérer différentes parties de votre état.',
		},
		{
			title: 'Intégration du store',
			content:
				'Importez le store dans votre fichier principal et wrappez votre app avec le Provider Redux :',
			code: `import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);`,
		},
	],
};
