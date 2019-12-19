<script>
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<style>

</style>

<svelte:head />

<Nav {segment} />

<div class="page-wrap__content">
  <div class="sidebar-overlay" tabindex="0" />
  <header class="main-header main-header-sidebar" itemscope id="microdata-org" itemprop="publisher author" itemtype="http://schema.org/Organization" itemref="microdata-org-address microdata-org-social">
    <div class="main-header__logo-nav">
      <div class="logo-main-wrap">
        <meta itemprop="name" content="25SheepStreet" />
        <a href="/" class="logo-main" itemprop="url" title="Startseite">
          <img src="/images/logo.svg" alt="Startseite" itemprop="logo" width="230" height="33" />
        </a>
      </div>
      <div class="nav-meta-container">
        <div class="nav-meta__list">
          <ul class="nav-meta__list__item" id="nav-meta__contact" role="contentinfo" aria-label="Schneller Kontakt zu uns">
            <li>
              <a href="tel:00492211234560" title="Unsere Telefon-Nummer" itemprop="telephone" content="00492211234560">
                <svg class="icon nav-meta__icon" role="img">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-phone" />
                </svg>
                +49 (0)221 12 34 56-0
              </a>
            </li>
            <li>
              <a href="mailto:mail@domainname.de" title="Unsere Email-Adresse" itemprop="email">
                <svg class="icon nav-meta__icon" role="img">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-email" />
                </svg>
                info@25sheepstreet.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
  <div class="main-header-sidebar-spacer" />
  <main class="content-wrap" id="content" tabindex="-1">
    <slot />
   <!-- <div class="l-main-wrap"></div> -->
  </main>
  <a href="#🔝" class="scroll-to-top" data-component="base.scroll-to-top">
    <svg class="icon " role="img">
      <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-arrow-up"></use>
    </svg>
  </a>
  <footer class="main-footer">
    <div class="l-main-wrap">
      <div class="main-footer__top">
        <address class="main-footer__address" itemprop="address" itemscope="" itemtype="http://schema.org/PostalAddress" id="microdata-org-address">
          <p>Frontend</p>
        </address>
        <nav class="nav-footer" aria-label="Rechtliches">
          <ul class="nav-footer__list">
            <li class="nav-footer__list__item">
              <a href="javascript:void(0)">Kontakt</a>
            </li>
            <li class="nav-footer__list__item">
              <a href="javascript:void(0)">Impressum</a>
            </li>
            <li class="nav-footer__list__item">
              <a href="javascript:void(0)">Datenschutz</a>
            </li>
            <li class="nav-footer__list__item">
              <a href="/sitemap.html">Sitemap</a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="main-footer__bottom">
        <nav
          class="nav-social"
          aria-label="Unsere Profile in sozialen Netzwerken">
          <ul class="nav-social__list" id="microdata-org-social">
            <li class="nav-social__list__item">
              <a href="javascript:void(0)" title="Unsere Facebook-Seite" itemprop="sameAs">
                <svg class="icon " role="img">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-facebook" />
                </svg>
              </a>
            </li>
            <li class="nav-social__list__item">
              <a href="javascript:void(0)" title="Unsere Instagram-Seite" itemprop="sameAs">
                <svg class="icon " role="img">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-instagram" />
                </svg>
              </a>
            </li>
            <li class="nav-social__list__item">
              <a href="javascript:void(0)" title="Unser Twitter-Profil" itemprop="sameAs">
                <svg class="icon " role="img">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-twitter" />
                </svg>
              </a>
            </li>
            <li class="nav-social__list__item">
              <a href="javascript:void(0)" title="Unser Youtube-Profil" itemprop="sameAs">
                <svg class="icon " role="img">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-youtube" />
                </svg>
              </a>
            </li>
            <li class="nav-social__list__item">
              <a href="javascript:void(0)" title="Unser xing-Profil" itemprop="sameAs">
                <svg class="icon " role="img">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-xing" />
                </svg>
              </a>
            </li>
            <li class="nav-social__list__item">
              <a href="javascript:void(0)" title="Unser linkedin-Profil" itemprop="sameAs">
                <svg class="icon " role="img">
                  <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-linkedin" />
                </svg>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
</div>
