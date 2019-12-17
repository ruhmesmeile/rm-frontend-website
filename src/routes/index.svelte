<script>
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
</script>

<style></style>

<svelte:head>
	<title>Sapper project template</title>
	<script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
</svelte:head>
<div class="l-section">
  <div class="l-main-wrap l-main-wrap--narrow">
    <div class="l-container">
      <h1>Great success!</h1>
      <figure>
        <img alt='Borat' src='great-success.png'>
        <figcaption>HIGH FIVE!</figcaption>
      </figure>
    <p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>
    </div>
  </div>
</div>
