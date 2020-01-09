<script>
  export let segment;
  export let navigation;
</script>

<style></style>

<button type="button" class="nav-toggle nav-sidebar-toggle" id="toggle-sidebar" aria-controls="sidebar" aria-expanded="false" data-component="base.sidebar-toggle">
  <span class="nav-toggle__label">Navigation öffnen/schließen</span>
  <div class="nav-toggle__icon">
    <div class="nav-toggle__icon__middle"></div>
  </div>
</button>

<ul style="z-index: 100000;">
{#each navigation['main-nav'].links as link}
  <li><a href="{link.path}" data-id="{link.page}">{link.label}</a></li>
{/each}
</ul>

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
        <li class="nav-sidebar__item {segment === undefined ? "nav-sidebar__item--current": ""} nav-sidebar__item--level-1">
          <a rel=prefetch href="." class="nav-sidebar__item__link">Home</a>
        </li>
        <li class="nav-sidebar__item  {segment === "about" ? "nav-sidebar__item--current": ""} nav-sidebar__item--level-1">
          <a rel=prefetch href="about" class="nav-sidebar__item__link">About</a>
        </li>
        <li class="nav-sidebar__item {segment === "blog" ? "nav-sidebar__item--current": ""} nav-sidebar__item--level-1">
          <a rel=prefetch href="blog" class="nav-sidebar__item__link">Blog</a>
        </li>
          <li class="nav-sidebar__item {segment === "eine-seite-mit-keyvisual" ? "nav-sidebar__item--current": ""} nav-sidebar__item--level-1">
          <a rel=prefetch href="eine-seite-mit-keyvisual" class="nav-sidebar__item__link">Seite mit Keyvisual</a>
        </li>
      </ul>
    </nav>
  </div>
</div>
