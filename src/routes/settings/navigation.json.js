import {fs} from 'mz';
const yaml = require('js-yaml');

export async function get(req, res, next) {
	// Read the file and parse the settings
	const navigationSettingsPath = `source/settings/navigation.yml`;
	const navigationSettingsYaml = (await fs.promises.readFile(navigationSettingsPath)).toString();
	const navigationSettingsJson = yaml.safeLoad(navigationSettingsYaml);

	res.writeHead(200, {
		'Content-Type': 'application/json',
	});

	// Send the settings to our Svelte component
	res.end(JSON.stringify(navigationSettingsJson));
}
