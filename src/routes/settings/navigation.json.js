import fm from 'front-matter';
import {fs} from 'mz';
import path from 'path';
import glob from 'glob';

const yaml = require('js-yaml');

export async function get(req, res, next) {
	const navigationSettingsPath = `source/settings/navigation.yml`;
	const navigationSettingsYaml = (await fs.promises.readFile(navigationSettingsPath)).toString();
	const navigationSettingsJson = yaml.safeLoad(navigationSettingsYaml);

	const pages = await new Promise((resolve, reject) =>
		glob('source/*.md', (err, files) => {
			if (err) return reject(err);
			return resolve(files);
		}),
	);

	const pagesFrontMatter = await Promise.all(
		pages.map(async page => {
			const content = (await fs.readFile(page)).toString();
			return {...fm(content).attributes, slug: path.parse(page).name};
		}),
	);

	const pagesFrontMatterArray = pagesFrontMatter.reduce((result, page) => {
		result[page.Id] = page;
		
		return result;
	}, []);

	navigationSettingsJson['main-nav'].links.forEach((link) => {
		link.path = pagesFrontMatterArray[link.page].slug;
	});

	res.writeHead(200, {
		'Content-Type': 'application/json',
	});

	res.end(JSON.stringify(navigationSettingsJson));
}
