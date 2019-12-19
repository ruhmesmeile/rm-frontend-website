<script>
  export let keyvisual;
</script>
<div class="keyvisual">
  <div class="keyvisual__item {keyvisual['small'] ? 'keyvisual__item--small' : ''}">
      <div class="keyvisual__image">
          <picture>
            <source media="(min-width: 950px)" data-srcset="{keyvisual['image-desktop']}">
            <source media="(min-width: 600px)" data-srcset="{keyvisual['image-mobile']}">
            <source data-srcset="{keyvisual['image-tablet']}">
            <img src="{keyvisual['image-desktop']}" alt="" data-object-fit="">
          </picture>
      </div>
      {#if keyvisual['box']}
      <div class="visual-content keyvisual__content {keyvisual['box-alignment']}">
        <div class="keyvisual__box {keyvisual['box-style']}" style="background-color:{keyvisual['bg-color']}">
          <p class="keyvisual__topic">{keyvisual['headline']}</p>
          <div class="keyvisual__text">
            <p>{keyvisual['text']}</p>
          </div>
          <div class="keyvisual__link">
            <a href="{keyvisual['link-target']}" class="button {keyvisual['link-variant']}"> {keyvisual['link-text']}</a>
          </div>
        </div>
      </div>
      {/if}
  </div>  
</div>