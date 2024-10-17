import React from 'react';
import { ProjectConfig } from '../types';
import IconButton from './common/IconButton';

interface CompilerProps {
	config: ProjectConfig;
	updateConfig: (newConfig: Partial<ProjectConfig>) => void;
}

const compilers = [
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

const packageManagers = [
	{ name: 'npm', icon: 'logos:npm-icon' },
	{ name: 'yarn', icon: 'logos:yarn' },
	{ name: 'pnpm', icon: 'logos:pnpm' },
	{ name: 'bun', icon: 'logos:bun' },
];

const Compiler: React.FC<CompilerProps> = ({ config, updateConfig }) => {
	return (
		<div className="space-y-8 text-white">
			<div>
				<h2 className="text-xl font-semibold mb-4">
					Choisissez votre compilateur
				</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
					{compilers.map((compiler) => (
						<IconButton
							key={compiler.name}
							name={compiler.name}
							icon={compiler.icon}
							isSelected={config.compiler === compiler.name}
							onClick={() => updateConfig({ compiler: compiler.name })}
						/>
					))}
				</div>
			</div>

			<div>
				<h2 className="text-xl font-semibold mb-4">
					Choisissez votre gestionnaire de paquets
				</h2>
				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
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
		</div>
	);
};

export default Compiler;
