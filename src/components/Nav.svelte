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
        {#each navigation['main-nav'].links as link}
          <li class="nav-sidebar__item {segment === link.path ? "nav-sidebar__item--current": ""} nav-sidebar__item--level-1">
            <a rel=prefetch href="{link.path}" data-id="{link.page}" class="nav-sidebar__item__link">{link.label}</a>
            {#if link.links && link.links.length > 0}
              {#each link.links as link}
                <ul class="nav-sidebar__list nav-sidebar__list--level-2">
                  <li class="nav-sidebar__item {segment === link.path ? "nav-sidebar__item--current": ""} nav-sidebar__item--level-2">
                    <a rel=prefetch href="{link.path}" data-id="{link.page}" class="nav-sidebar__item__link">{link.label}</a>
                    {#if link.links && link.links.length > 0}
                      {#each link.links as link}
                        <ul class="nav-sidebar__list nav-sidebar__list--level-3">
                          <li class="nav-sidebar__item {segment === link.path ? "nav-sidebar__item--current": ""} nav-sidebar__item--level-3">
                            <a rel=prefetch href="{link.path}" data-id="{link.page}" class="nav-sidebar__item__link">{link.label}</a>
                          </li>
                        </ul>
                      {/each}
                    {/if}
                  </li>
                </ul>
              {/each}
            {/if}
          </li>          
        {/each}
      </ul>
    </nav>
  </div>
</div>
