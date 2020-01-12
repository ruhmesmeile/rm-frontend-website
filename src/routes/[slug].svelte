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
  import Teaserbox from '@rm-frontend/base/source/3-organisms/teaser-box/Teaserbox.svelte';

  export let page;
  export let components;
  export let keyvisual;
  
  const isKeyvisual = element => element.type === 'keyvisual';
  keyvisual = page.content.find(isKeyvisual);

  components = {};
  components['keyvisual'] = Keyvisual;
  components['teaser-box'] = Teaserbox;
</script>

<style>

</style>

<svelte:head>
  <title>{page.title}</title>
</svelte:head>

{#if keyvisual}
  <Keyvisual data={keyvisual} />
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

{#each page.content.filter(element => !isKeyvisual(element)) as element}
  <svelte:component this={components[element.type]} data={element} />
{/each}
