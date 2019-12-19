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
  import Keyvisual from '../components/Keyvisual.svelte'
</script>

<style>

</style>

<svelte:head>
  <title>{page.title}</title>
</svelte:head>

<Keyvisual keyvisual = {page.keyvisual} />