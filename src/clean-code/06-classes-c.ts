(() => {
	// Aplicando el principio de responsabilidad unica
	// Priorizar la composicion frente a la herencia

	type Gender = 'M' | 'F';

	interface PersonProps {
		birthdate: Date;
		gender: Gender;
		name: string;
	}

	class Person {
		public birthdate: Date;
		public gender: Gender;
		public name: string;

		constructor({ name, gender, birthdate }: PersonProps) {
			this.birthdate = birthdate;
			this.gender = gender;
			this.name = name;
		}
	}

	interface UserProps {
		email: string;
		role: string;
	}

	class User {
		public email: string;
		public lastAccess: Date;
		public role: string;

		constructor({ email, role }: UserProps) {
			this.email = email;
			this.lastAccess = new Date();
			this.role = role;
		}

		checkCredentials() {
			return true;
		}
	}

	interface SettingsProps {
		lastOpenFolder: string;
		workingDirectory: string;
	}

	class Settings {
		public lastOpenFolder: string;
		public workingDirectory: string;

		constructor({ lastOpenFolder, workingDirectory }: SettingsProps) {
			this.lastOpenFolder = lastOpenFolder;
			this.workingDirectory = workingDirectory;
		}
	}

	// Composicion con las otras clases
	interface UserSettingsProps {
		birthdate: Date;
		email: string;
		gender: Gender;
		lastOpenFolder: string;
		name: string;
		role: string;
		workingDirectory: string;
	}

	class UserSettings {
		public person: Person;
		public user: User;
		public setting: Settings;

		constructor({
			name,
			gender,
			birthdate,
			email,
			role,
			lastOpenFolder,
			workingDirectory,
		}: UserSettingsProps) {
			this.person = new Person({ name, gender, birthdate });
			this.user = new User({ email, role });
			this.setting = new Settings({ lastOpenFolder, workingDirectory });
		}
	}

	const userSettings = new UserSettings({
		birthdate: new Date('1987-10-09'),
		email: 'martin@mail.com',
		gender: 'M',
		lastOpenFolder: '/home',
		name: 'Martin',
		role: 'Admin',
		workingDirectory: '/usr/home',
	});

	console.log({
		userSettings,
		areCredentialsValid: userSettings.user.checkCredentials(),
	});
})();
