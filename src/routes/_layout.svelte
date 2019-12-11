<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style></style>

<svelte:head>

</svelte:head>

<Nav {segment}/>

<div class="page-wrap__content">
	<div class="sidebar-overlay" tabindex="0"></div>
	<div class="main-header-sidebar-spacer"></div>
	<main class="content-wrap" id="content" tabindex="-1">
		<div class="l-main-wrap">
			<slot></slot>
		</div>
	</main>
</div>