export interface ProjectConfig {
	projectName: string;
	commandFormatName: string;
	projectType: string;
	framework: string;
	packageManager: string;
	database: string;
	language: string;
	compiler: string;
	os: 'Windows' | 'macOS' | 'Linux' | '';
	[key: string]: string;
}

export const initialConfig: ProjectConfig = {
	projectName: '',
	commandFormatName: '',
	projectType: '',
	framework: '',
	packageManager: '',
	database: '',
	language: 'JavaScript',
	compiler: '',
	os: '',
};

export interface PackageManager {
	name: string;
	icon: string;
}

export interface ProjectType {
	name: string;
	icon: string;
}

export interface Tool {
	name: string;
	icon?: string;
}

export interface AdditionalOption extends Tool {
	category?: string;
}

export interface AdditionalOptions {
	[category: string]: AdditionalOption[];
}
