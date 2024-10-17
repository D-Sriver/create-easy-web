import { Icon } from '@iconify/react';
import React, { useState } from 'react';
import { ProjectConfig } from '../../types';
import { generateCommand } from '../../utils/commandGenerator';

interface InstallationCommandsProps {
	config: ProjectConfig;
}

const InstallationCommands: React.FC<InstallationCommandsProps> = ({
	config,
}) => {
	const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
	const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

	const commands = generateCommand(
		config,
		config.os as 'Windows' | 'macOS' | 'Linux'
	);

	const copyToClipboard = (text: string, index: number) => {
		navigator.clipboard.writeText(text).then(() => {
			setCopiedIndex(index);
			setTimeout(() => setCopiedIndex(null), 2000);
		});
	};

	return (
		<div className="text-white py-2">
			<h3 className="pt-4 text-2xl font-bold mb-4 text-amber-300 text-center">
				Commandes d'installation
			</h3>
			<hr className="my-2 border-t border-yellow-500 w-full" />
			<p className="mb-2 text-white">
				Voici les commandes à exécuter dans votre terminal pour créer et
				configurer votre projet :
			</p>
			{config.os === 'Windows' && (
				<p className="text-amber-300 mt-4">
					Note : Ces commandes sont adaptées pour Windows. Assurez-vous
					d'utiliser un terminal comme PowerShell ou l'invite de commandes
					Windows.
				</p>
			)}
			<div className="flex flex-col gap-y-4 py-2">
				{commands.map((cmd, index) => (
					<div
						key={`command-${index}`}
						className="flex justify-center items-center rounded-lg gap-x-4"
					>
						<pre className="text-green-500 border-2 rounded-xl border-green-600 p-2 w-full flex justify-between">
							<code>
								{cmd.command.replace(
									config.projectName,
									config.commandFormatName
								)}
							</code>
							<button
								onClick={() => copyToClipboard(cmd.command, index)}
								className="flex items-center bg-green-600 hover:bg-amber-600 text-white p-1 rounded transition-colors"
								title={copiedIndex === index ? 'Copié !' : 'Copier'}
							>
								{copiedIndex === index ? (
									<span className="text-xs mr-1">Copié</span>
								) : null}
								<Icon
									icon={
										copiedIndex === index ? 'mdi:check' : 'mdi:content-copy'
									}
									width="20"
									height="20"
								/>
							</button>
						</pre>
						<div
							className="w-5 h-5 bg-slate-200 rounded-full flex items-center justify-center cursor-help relative"
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
						>
							<Icon
								icon="mdi:help"
								width="14"
								height="14"
								className="text-slate-800"
							/>
							{hoveredIndex === index && (
								<div className="z-50 absolute right-full mr-4 p-2 bg-slate-900 text-amber-400 border border-amber-600 rounded shadow-lg h-fit w-96">
									{cmd.explanation}
								</div>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default InstallationCommands;
