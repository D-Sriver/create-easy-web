import { motion } from 'framer-motion';
import React from 'react';

interface StepIndicatorProps {
	steps: { title: string }[];
	currentStep: number;
}

const StepIndicator: React.FC<StepIndicatorProps> = ({
	steps,
	currentStep,
}) => {
	return (
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
							index <= currentStep ? 'text-amber-100' : 'text-gray-500'
						}`}
					>
						<motion.div
							className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 text-sm font-medium ${
								index <= currentStep ? 'bg-amber-700' : 'bg-gray-700'
							}`}
							animate={{
								scale: index === currentStep ? 1.1 : 1,
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
					animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
					transition={{ duration: 0.3 }}
				/>
			</div>
		</div>
	);
};

export default StepIndicator;
