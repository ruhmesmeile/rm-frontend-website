<script context="module">
	export function preload({ params, query }) {
		return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
			return { posts };
		});
	};

	export function formatDate(dateInput) {
		let date = new Date(dateInput);
		let monthNames = [
			"Januar", "Februar", "März",
			"April", "Mai", "Juni", "Juli",
			"August", "September", "Oktober",
			"November", "Dezember"
		];
		let monthIndex = date.getMonth();

		return [
			("0" + date.getDate()).slice(-2) + '.',
			monthNames[monthIndex],
			date.getFullYear()
		].join(' ');
	};
</script>

<script>
export let posts;

</script>

<style></style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<div class="l-section">
<div class="l-main-wrap l-main-wrap--narrow">
<div class="l-container">
<div class="news-list">
	{#each posts as post}
	<article class="news-list__item">
		<div class="news-list__item__header">
		<time datetime="2016-04-13" class="news-list__item__date">{formatDate(post.date)}</time>
		<h2 id="news-header-123">
			<a rel='prefetch' href='blog/{post.slug}'>{post.title}</a>
		</h2>
		</div>
		<div class="news-list__item__image">
		<img src="{post.thumbnail}" alt="">
		</div>
	
		<div class="news-list__item__teaser">
		<p>Lorem ipsum dolor sit amet, consectetur corporis laboriosam nam unde adipisicing elit.</p>
	
		<div class="news-list__item__more">
			<a href='blog/{post.slug}' class="link-more" id="news-link-more-132" aria-labelledby="news-link-more-132 news-header-123">
			weiter zum Newseintrag
				<svg class="icon arrow-right" role="img">
					<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="http://localhost:3000/patternlab/patterns/5-pages-news/index.html#icon-arrow-right"></use>
				</svg>
			 </a>
		</div>
		</div>
	</article>
	{/each}
   </div>
  </div>
 </div>
</div>
