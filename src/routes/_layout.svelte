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
	 <header class="main-header main-header-sidebar" itemscope id="microdata-org" itemprop="publisher author" itemtype="http://schema.org/Organization" itemref="microdata-org-address microdata-org-social">
    <div class="main-header__logo-nav">
      <div class="logo-main-wrap">
        <meta itemprop="name" content="25SheepStreet" />
        <a href="/" class="logo-main" itemprop="url" title="Startseite">
          <img src="/images/logo.svg" alt="Startseite" itemprop="logo" width="230" height="33">
        </a>
      </div>
      <div class="nav-meta-container">
        <div class="nav-meta__list">
          <ul class="nav-meta__list__item" id="nav-meta__contact" role="contentinfo" aria-label="Schneller Kontakt zu uns">
            <li>
              <a href="tel:00492211234560" title="Unsere Telefon-Nummer" itemprop="telephone" content="00492211234560">
                <svg class="icon nav-meta__icon" role="img">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-phone"></use>
                </svg> +49 (0)221 12 34 56-0
              </a>
            </li>
            <li>
              <a href="mailto:mail@domainname.de" title="Unsere Email-Adresse" itemprop="email">
                <svg class="icon nav-meta__icon" role="img">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-email"></use>
                </svg> info@25sheepstreet.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header> 
	<div class="main-header-sidebar-spacer"></div>
	<main class="content-wrap" id="content" tabindex="-1">
		<div class="l-main-wrap">
			<slot></slot>
		</div>
	</main>
</div>