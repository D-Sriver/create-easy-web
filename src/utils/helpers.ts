export const convertToCommandFormat = (title: string): string => {
	return title.toLowerCase().replace(/\s+/g, '_');
};

export const validateProjectName = (name: string): string | null => {
	return name.trim() === '' ? 'Le nom du projet est obligatoire' : null;
};
