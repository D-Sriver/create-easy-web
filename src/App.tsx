import { Icon } from '@iconify/react';
import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AdditionalOptions from './components/AdditionalOptions';
import Compiler from './components/Compiler';
import Database from './components/Database';
import Framework from './components/Framework';
import ProjectType from './components/ProjectType';
import Summary from './components/Summary';
import { ProjectConfig, initialConfig } from './types';

function App() {
	const [config, setConfig] = useState<ProjectConfig>(initialConfig);
	const [step, setStep] = useState(0);

	const updateConfig = (newConfig: Partial<ProjectConfig>) => {
		setConfig((prevConfig) => {
			const updatedConfig = { ...prevConfig };
			Object.keys(newConfig).forEach((key) => {
				if (newConfig[key] !== undefined) {
					updatedConfig[key] = newConfig[key] as string;
				}
			});
			return updatedConfig;
		});
	};

	const steps = useMemo(() => {
		const baseSteps = [
			{ component: ProjectType, title: 'Type de Projet' },
			{ component: Compiler, title: 'Compilateur & Bundler' },
			{ component: Framework, title: 'Framework' },
		];

		if (['Web', 'API', 'Microservices'].includes(config.projectType)) {
			baseSteps.push({ component: Database, title: 'Base de Données' });
		}

		// Ajout des options additionnelles pour les projets Web
		if (config.projectType === 'Web') {
			baseSteps.push({
				component: AdditionalOptions,
				title: 'Options Additionnelles',
			});
		}

		baseSteps.push({ component: Summary, title: 'Résumé' });

		return baseSteps;
	}, [config.projectType]);

	const CurrentStep = steps[step].component;

	const isNextButtonDisabled = step === 0 && config.projectName.trim() === '';

	return (
		<Router>
			<div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center p-4 min-w-[1000px]">
				<h1 className="text-2xl font-bold text-white p-4 text-center mb-4">
					Easy Dev Steps
				</h1>

				<p className="text-amber-300 text-center mb-6">
					Apprenez pas à pas à configurer votre projet de développement
				</p>

				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-3xl shadow-2xl w-full max-w-5xl overflow-hidden flex flex-col border border-gray-700 transition-all duration-300 ease-in-out"
				>
					<div className="p-8 flex-grow overflow-y-auto">
						<div className="mb-8">
							<motion.div
								className="flex justify-evenly items-center"
								layout
								transition={{ duration: 0.5, type: 'spring' }}
							>
								{steps.map((s, index) => (
									<motion.div
										key={s.title}
										layout
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: -20 }}
										transition={{ duration: 0.3, delay: index * 0.05 }}
										className={`flex flex-col items-center h-20 w-20 text-center ${
											index <= step ? 'text-amber-100' : 'text-gray-500'
										}`}
									>
										<motion.div
											className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 text-sm font-medium ${
												index <= step ? 'bg-amber-700' : 'bg-gray-700'
											}`}
											animate={{
												scale: index === step ? 1.1 : 1,
												transition: { duration: 0.3 },
											}}
										>
											{index + 1}
										</motion.div>
										<span className="text-xs">{s.title}</span>
									</motion.div>
								))}
							</motion.div>
							<div className="relative mt-4">
								<div className="absolute top-1/2 left-0 w-full h-1 bg-gray-700 transform -translate-y-1/2" />
								<motion.div
									className="absolute top-1/2 left-0 h-1 bg-amber-600 transform -translate-y-1/2"
									initial={{ width: 0 }}
									animate={{ width: `${(step / (steps.length - 1)) * 100}%` }}
									transition={{ duration: 0.3 }}
								/>
							</div>
						</div>
						<AnimatePresence mode="wait">
							<motion.div
								key={step}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -20 }}
								transition={{
									duration: 0.5,
									ease: [0.43, 0.13, 0.23, 0.96], // Courbe d'accélération personnalisée
								}}
							>
								<motion.div
									layout
									transition={{
										height: {
											type: 'spring',
											stiffness: 100,
											damping: 20,
											mass: 1,
										},
										opacity: { duration: 0.3 },
									}}
									className="bg-gray-900 p-6 rounded-lg"
								>
									<CurrentStep config={config} updateConfig={updateConfig} />
								</motion.div>
							</motion.div>
						</AnimatePresence>
					</div>
					<motion.div
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ delay: 0.4, duration: 0.5 }}
						className="p-6 bg-gray-900 flex justify-between"
					>
						{step > 0 && (
							<motion.button
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								onClick={() => setStep(step - 1)}
								className="bg-gray-700 text-white px-6 py-3 rounded-full hover:bg-gray-600 transition duration-300 flex items-center text-sm"
							>
								<Icon icon="mdi:chevron-left" className="mr-2" />
								Précédent
							</motion.button>
						)}
						{step < steps.length - 1 && (
							<motion.button
								whileHover={{ scale: isNextButtonDisabled ? 1 : 1.05 }}
								whileTap={{ scale: isNextButtonDisabled ? 1 : 0.95 }}
								onClick={() => !isNextButtonDisabled && setStep(step + 1)}
								className={`bg-amber-800 text-white px-6 py-3 rounded-full transition duration-300 flex items-center ml-auto text-sm ${
									isNextButtonDisabled
										? 'opacity-50 cursor-not-allowed'
										: 'hover:bg-amber-600'
								}`}
								disabled={isNextButtonDisabled}
							>
								Suivant
								<Icon icon="mdi:chevron-right" className="ml-2" />
							</motion.button>
						)}
					</motion.div>
				</motion.div>
			</div>
		</Router>
	);
}

export default App;
