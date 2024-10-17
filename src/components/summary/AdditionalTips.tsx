import { Icon } from '@iconify/react';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import { ProjectConfig } from '../../types';
import {
	reduxExplanation,
	tailwindExplanation,
} from '../../utils/configurationExplanations';

interface AdditionalTipsProps {
	config: ProjectConfig;
}

const AdditionalTips: React.FC<AdditionalTipsProps> = ({ config }) => {
	const [openExplanation, setOpenExplanation] = useState<string | null>(null);

	const renderExplanation = (
		explanation: typeof tailwindExplanation | typeof reduxExplanation
	) => (
		<div className="mt-4">
			<button
				className="flex bg-gray-800 rounded-xl border-2 border-amber-300 p-2 items-center justify-between w-full text-lg font-semibold text-amber-300 mb-2 hover:text-amber-400 transition-colors"
				onClick={() =>
					setOpenExplanation(
						openExplanation === explanation.title ? null : explanation.title
					)
				}
			>
				<span>{explanation.title}</span>
				<Icon
					icon={
						openExplanation === explanation.title
							? 'mdi:chevron-up'
							: 'mdi:chevron-down'
					}
					width="24"
					height="24"
				/>
			</button>

			<AnimatePresence>
				{openExplanation === explanation.title && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: 'auto' }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3, ease: 'easeInOut' }}
					>
						<ol className="flex flex-col list-inside -mt-6 bg-gray-800 rounded-xl border-2 border-t-0 rounded-t-none border-amber-300 p-2">
							{explanation.steps.map((step, index) => (
								<li key={index} className="m-2 gap-y-2">
									<h4 className="text-md font-semibold text-amber-200 mb-1">
										{step.title}
									</h4>
									<p className="text-white mb-2">{step.content}</p>
									{step.code && (
										<pre className="bg-slate-900 p-2 rounded-md overflow-x-auto">
											<code className="text-green-500 ">{step.code}</code>
										</pre>
									)}
								</li>
							))}
						</ol>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);

	const hasTips =
		config['Framework CSS'] === 'Tailwind CSS' ||
		config["Gestionnaire d'état global"] === 'Redux';

	if (!hasTips) {
		return null;
	}

	return (
		<div className="text-white py-2">
			<h2 className="text-2xl font-bold mb-4 text-amber-300 text-center">
				Conseils supplémentaires pour la configuration
			</h2>
			<hr className="my-2 border-t border-yellow-500 w-full" />
			{config['Framework CSS'] === 'Tailwind CSS' &&
				renderExplanation(tailwindExplanation)}
			{config["Gestionnaire d'état global"] === 'Redux' &&
				renderExplanation(reduxExplanation)}
		</div>
	);
};

export default AdditionalTips;
