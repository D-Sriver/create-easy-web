// Ajoutez cette constante en haut du fichier
export const DEFAULT_ICON_IMAGE = { icon: 'mdi:gamepad-variant' };

// Fonction utilitaire pour obtenir l'icône
export const getIcon = (icon?: string): { icon: string } => {
	return { icon: icon || DEFAULT_ICON_IMAGE.icon };
};

// Types de projets

export const projectTypes = [
	{ name: 'Web', icon: 'mdi:web' },
	{ name: 'Mobile', icon: 'mdi:cellphone' },
	{ name: 'Bureau', icon: 'mdi:desktop-classic' },
	{ name: 'Jeu Vidéo', icon: 'mdi:gamepad-variant' },
];

// Langages
export const languages = [
	{ name: 'JavaScript', icon: 'logos:javascript' },
	{ name: 'TypeScript', icon: 'logos:typescript-icon' },
];

// Frameworks par type de projet
export const frameworks = {
	Web: [
		{ name: 'React', icon: 'logos:react' },
		{ name: 'Vue', icon: 'logos:vue' },
		{ name: 'Angular', icon: 'logos:angular-icon' },
		{ name: 'Svelte', icon: 'logos:svelte-icon' },
		{ name: 'Next.js', icon: 'logos:nextjs-icon' },
		{ name: 'Nuxt.js', icon: 'logos:nuxt-icon' },
		{ name: 'Gatsby', icon: 'logos:gatsby' },
	],
	Mobile: [
		{ name: 'React Native', icon: 'logos:react' },
		{ name: 'Flutter', icon: 'logos:flutter' },
		{ name: 'Ionic', icon: 'logos:ionic-icon' },
		{ name: 'Expo', icon: 'logos:expo-icon' },
		{ name: 'NativeScript', icon: 'logos:nativescript' },
	],
	Bureau: [
		{ name: 'Electron', icon: 'logos:electron' },
		{ name: 'NW.js', icon: 'logos:nw-js' },
		{ name: 'Tauri', icon: 'logos:tauri' },
	],
	'Jeu Vidéo': [
		{ name: 'Phaser', icon: 'logos:phaser' },
		{ name: 'Three.js', icon: 'logos:threejs' },
		{ name: 'Babylon.js', icon: 'logos:babylonjs' },
		{ name: 'PixiJS', icon: 'simple-icons:pixijs' },
		{ name: 'Excalibur' },
		{ name: 'Construct', icon: 'simple-icons:construct3' },
		{ name: 'Melon.js' },
		{ name: 'Impact.js' },
		{ name: 'Crafty.js' },
		{ name: 'PlayCanvas', icon: 'simple-icons:playcanvas' },
	],
	API: [
		{ name: 'Express', icon: 'logos:express' },
		{ name: 'NestJS', icon: 'logos:nestjs' },
		{ name: 'FastAPI', icon: 'logos:fastapi-icon' },
		{ name: 'Koa', icon: 'simple-icons:koa' },
		{ name: 'Hapi', icon: 'simple-icons:hapi' },
		{ name: 'Feathers', icon: 'simple-icons:feathersjs' },
	],
};

// Gestionnaires de paquets
export const packageManagers = [
	{ name: 'npm', icon: 'logos:npm-icon' },
	{ name: 'yarn', icon: 'logos:yarn' },
	{ name: 'pnpm', icon: 'logos:pnpm' },
	{ name: 'bun', icon: 'logos:bun' },
];

export const compilers = [
	{ name: 'Vite', icon: 'logos:vitejs' },
	{ name: 'Create React App', icon: 'logos:create-react-app' },
	{ name: 'Next.js', icon: 'logos:nextjs-icon' },
	{ name: 'Webpack', icon: 'logos:webpack' },
	{ name: 'Babel', icon: 'logos:babel' },
	{ name: 'SWC', icon: 'simple-icons:swc' },
	{ name: 'esbuild', icon: 'simple-icons:esbuild' },
	{ name: 'Rollup', icon: 'logos:rollup' },
	{ name: 'Parcel', icon: 'logos:parcel-icon' },
	{ name: 'Bun', icon: 'logos:bun' },
];

// Bases de données
export const databases = [
	{ name: 'MongoDB', icon: 'logos:mongodb-icon' },
	{ name: 'PostgreSQL', icon: 'logos:postgresql' },
	{ name: 'MySQL', icon: 'logos:mysql' },
	{ name: 'SQLite', icon: 'logos:sqlite' },
	{ name: 'Redis', icon: 'logos:redis' },
];

// Frameworks de test
export const testingFrameworks = [
	{ name: 'Jest', icon: 'logos:jest' },
	{ name: 'Mocha', icon: 'logos:mocha' },
	{ name: 'Cypress', icon: 'logos:cypress' },
	{ name: 'Playwright', icon: 'logos:playwright' },
];

// Plateformes de déploiement
export const deploymentPlatforms = [
	{ name: 'Vercel', icon: 'logos:vercel-icon' },
	{ name: 'Netlify', icon: 'logos:netlify' },
	{ name: 'Heroku', icon: 'logos:heroku-icon' },
	{ name: 'AWS', icon: 'logos:aws' },
	{ name: 'Google Cloud', icon: 'logos:google-cloud' },
];

// Options additionnelles par type de projet
export const additionalOptions = {
	Web: {
		"Gestionnaire d'état global": [
			{ name: 'Redux', icon: 'logos:redux' },
			{ name: 'MobX', icon: 'logos:mobx' },
			{ name: 'Recoil', icon: 'logos:recoil-icon' },
			{ name: 'Zustand' },
			{ name: 'Jotai' },
		],
		'Framework CSS': [
			{ name: 'Material-UI', icon: 'logos:material-ui' },
			{ name: 'Chakra UI', icon: 'simple-icons:chakraui' },
			{ name: 'Tailwind CSS', icon: 'logos:tailwindcss-icon' },
			{ name: 'Styled Components', icon: 'simple-icons:styledcomponents' },
			{ name: 'Emotion', icon: 'simple-icons:emotion' },
		],
		Routage: [{ name: 'React Router', icon: 'logos:react-router' }],
	},
	Mobile: {
		'UI Libraries': [
			{ name: 'React Native Paper' },
			{ name: 'NativeBase', icon: 'simple-icons:nativebase' },
			{ name: 'React Native Elements' },
		],
		Navigation: [
			{ name: 'React Navigation' },
			{ name: 'React Native Navigation' },
		],
		'Base de données locale': [
			{ name: 'SQLite', icon: 'simple-icons:sqlite' },
			{ name: 'Realm', icon: 'simple-icons:realm' },
			{ name: 'AsyncStorage' },
			{ name: 'WatermelonDB' },
		],
	},
	'Jeu Vidéo': {
		'Gestionnaire de scènes': [
			{ name: 'Scene.js' },
			{ name: 'Three.js Scene', icon: 'logos:threejs' },
		],
		'Moteur physique': [
			{ name: 'Matter.js' },
			{ name: 'Planck.js' },
			{ name: 'Cannon.js' },
		],
		'Gestion du son': [
			{ name: 'Howler.js' },
			{ name: 'Tone.js' },
			{ name: 'Web Audio API' },
		],
	},
	API: {
		Authentication: [
			{ name: 'Passport.js', icon: 'logos:passport' },
			{ name: 'JWT', icon: 'logos:jwt-icon' },
			{ name: 'OAuth', icon: 'simple-icons:oauth' },
		],
		'Database ORM': [
			{ name: 'Sequelize', icon: 'simple-icons:sequelize' },
			{ name: 'Mongoose', icon: 'simple-icons:mongoose' },
			{ name: 'TypeORM' },
			{ name: 'Prisma', icon: 'simple-icons:prisma' },
		],
	},
};

// Systèmes d'exploitation
export const operatingSystems = [
	{ name: 'Windows', icon: 'logos:microsoft-windows-icon' },
	{ name: 'macOS', icon: 'logos:apple' },
	{ name: 'Linux', icon: 'logos:linux-tux' },
];
