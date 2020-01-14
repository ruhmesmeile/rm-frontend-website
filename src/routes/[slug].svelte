<script context="module">
  export async function preload({ params, query }) {
    // the `slug` parameter is available because
    // this file is called [slug].svelte
    const res = await this.fetch(`${params.slug}.json`);

    if (res.status === 200) {
      return { page: await res.json() };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  import Keyvisual from '@rm-frontend/visuals/source/2-molecules/keyvisual/keyvisual/Keyvisual.svelte';
  import TextpicIntextleft from '@rm-frontend/base/source/3-organisms/standard-content/typo3-standard-content/TextpicIntextleft.svelte';
  import Teaserbox from '@rm-frontend/base/source/3-organisms/teaser-box/Teaserbox.svelte';

  import { onMount } from 'svelte';

  onMount(() => {
    if (window.netlifyIdentity) {
      window.netlifyIdentity.on("init", user => {
        if (!user) {
          window.netlifyIdentity.on("login", () => {
            document.location.href = "/admin/";
          });
        }
      });
    }
  });

  export let page;
  export let components;

  components = {};
  components['teaser-box'] = Teaserbox;
  components['textpic-intextleft'] = TextpicIntextleft;
</script>

<style>

</style>

<svelte:head>
  <title>{page.title}</title>
</svelte:head>

{#if page.keyvisual}
  <Keyvisual data={page.keyvisual} />
{/if}

<div class="l-header-only-wrap">
  <div class="l-main-wrap">
    <div class="l-container">
      <header class="content-headline  content-headline--page_header">
        <h1>{page.heading}</h1>
      </header>
    </div>
  </div>
</div>

{#each page.content as element}
  <svelte:component this={components[element.type]} data={element} />
{/each}
