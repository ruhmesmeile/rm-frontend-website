<script>
	//export let segment;
</script>

<style></style>

<!--<nav>
	<ul>
		<li><a class:selected='{segment === undefined}' href='.'>home</a></li>
		<li><a class:selected='{segment === "about"}' href='about'>about</a></li>

		<-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen ->
		<li><a rel=prefetch class:selected='{segment === "blog"}' href='blog'>blog</a></li>
	</ul>
</nav>-->

<button type="button" class="nav-toggle nav-sidebar-toggle" id="toggle-sidebar" aria-controls="sidebar" aria-expanded="false" data-component="base.sidebar-toggle">
    <span class="nav-toggle__label">Navigation öffnen/schließen</span>
    <div class="nav-toggle__icon">
      <div class="nav-toggle__icon__middle"></div>
    </div>
  </button>
  <div id="sidebar" class="page-wrap__sidebar" data-component="base.sidebar">
    <div class="page-wrap__sidebar__content" id="sidebar-content">
      <div class="logo-main-wrap">
        <meta itemprop="name" content="25SheepStreet" />
        <a href="/" class="logo-main" itemprop="url" title="Startseite">
          <img src="/images/logo-dark.svg" alt="Startseite" itemprop="logo" width="230" height="33">
        </a>
      </div>

      <nav class="nav-sidebar" id="nav-sidebar" aria-label="Hauptnavigation" data-component="base.nav-sidebar">
        <ul class="nav-sidebar__list nav-sidebar__list--level-1">
          <li class="nav-sidebar__item nav-sidebar__item--level-1">
            <a href="." class="nav-sidebar__item__link">Home</a>
          </li>
          <li class="nav-sidebar__item nav-sidebar__item--level-1">
            <a href="about" class="nav-sidebar__item__link">About</a>
          </li>
		  <li class="nav-sidebar__item nav-sidebar__item--level-1">
            <a rel=prefetch href="blog" class="nav-sidebar__item__link">Blog</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
