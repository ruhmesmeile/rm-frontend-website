import fm from 'front-matter';
import {fs} from 'mz';
import path from 'path';
import glob from 'glob';

export async function get(req, res) {
	const posts = await new Promise((resolve, reject) =>
		glob('source/blog/*.md', (err, files) => {
			if (err) return reject(err);
			return resolve(files);
		}),
	);

	const postsFrontMatter = await Promise.all(
		posts.map(async post => {
			const content = (await fs.readFile(post)).toString();
			return {...fm(content).attributes, slug: path.parse(post).name};
		}),
	);

	postsFrontMatter.sort((a, b) => (a.date < b.date ? 1 : -1));

	res.writeHead(200, {
		'Content-Type': 'application/json',
	});

	res.end(JSON.stringify(postsFrontMatter));
}