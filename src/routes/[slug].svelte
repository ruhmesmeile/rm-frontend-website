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
  export let page;
  import Keyvisual from '@rm-frontend/visuals/source/2-molecules/keyvisual/keyvisual/Keyvisual.svelte';
  import Teaserbox from '@rm-frontend/base/source/3-organisms/teaser-box/Teaserbox.svelte';

  const components = {};
  components['keyvisual'] = Keyvisual;
  components['teaser-box'] = Teaserbox;
</script>

<style>

</style>

<svelte:head>
  <title>{page.title}</title>
</svelte:head>

{#each page.content as element}
  <svelte:component this={components[element.type]} data={element} />
{/each}
