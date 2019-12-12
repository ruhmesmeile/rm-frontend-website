<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`blog/${params.slug}.json`);

    if (res.status === 200) {
      return { post: await res.json() };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post;
  //import index, { formatDate } from './index.svelte';

</script>

<style>

</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>
<div class="l-section">
  <div class="l-main-wrap l-main-wrap--narrow">
    <div class="l-container">
      <article class="news news-detail" itemscope="" itemtype="http://schema.org/NewsArticle" itemref="microdata-org">
        <time itemprop="datePublished" datetime="2016-04-13" class="news-detail__date">

        </time>
        <h1 itemprop="headline">{post.title}</h1>
        <div class="news-detail__image">
          <figure>
            <a href="{post.thumbnail}" data-gallery="lightbox1" data-size-w="1920" data-size-h="1280" class="js-open-lightbox" title="Bild vergrößern" itemscope="" itemtype="http://schema.org/ImageObject" itemprop="image">
              <meta itemprop="url" content="{post.thumbnail}" />
              <img src="{post.thumbnail}" alt="Lorem Ipsum" />
            </a>
            <figcaption class="caption">
              {@html post.html}
            </figcaption>
          </figure>
        </div>
        <div itemprop="articleBody">
          <p class="text--teaser">{@html post.html}</p>
          <p>{@html post.html}</p>
          <p>{@html post.html}</p>
        </div>
      </article>
    </div>
  </div>
</div>
