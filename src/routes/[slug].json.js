import fm from 'front-matter';
import {fs} from 'mz';
import path from 'path';
import MarkdownIt from 'markdown-it';

export async function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const { slug } = req.params;

	const md = new MarkdownIt();

	// Read the file and parse the metadata + content
	const pagePath = `source/${slug}.md`;
	const pageMarkdown = (await fs.promises.readFile(pagePath)).toString();
	const pageFrontMatter = fm(pageMarkdown);
	const pageJson = { ...pageFrontMatter.attributes, slug: path.parse(pagePath).name, html: md.render(pageFrontMatter.body) };

	res.writeHead(200, {
		'Content-Type': 'application/json',
	});

	// Send the page to our Svelte component
	res.end(JSON.stringify(pageJson));
}
