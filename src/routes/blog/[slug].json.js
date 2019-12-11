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
	const postPath = `source/blog/${slug}.md`;
	const postMarkdown = (await fs.promises.readFile(postPath)).toString();
	const postFrontMatter = fm(postMarkdown);
	const postJson = { ...postFrontMatter.attributes, slug: path.parse(postPath).name, html: md.render(postFrontMatter.body) };

	res.writeHead(200, {
		'Content-Type': 'application/json',
	});

	// Send the blog post to our Svelte component
	res.end(JSON.stringify(postJson));
}
