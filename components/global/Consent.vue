<template>
  <IfBot>
    <cookie-consent>
      <template slot="message">
        {{ $t('kvkk.message') }}
        <a class="ml-5 mr-5 btn btn-link" href="#">{{ $t('kvkk.button') }}</a>
      </template>
      <template slot="button">
        <button class="btn btn-info">{{ $t('kvkk.accept') }}</button>
      </template>
    </cookie-consent>
  </IfBot>
</template>

<script>
import IfBot from 'vue-if-bot/dist/vue-if-bot.es'
import CookieConsent from 'vue-cookieconsent-component/src/components/CookieConsent.vue'
export default {
  components: {
    IfBot,
    CookieConsent,
  },
}
</script>
<style lang="postcss">
/* purgecss start ignore */
.cookie-consent {
  @apply .w-full .py-2 .flex .items-center .justify-center .bg-gray-300 .text-xl .fixed .bottom-0;
  @screen md {
    @apply .text-sm .text-center;
  }
  &-link {
    @apply .no-underline .text-orange-600 .bg-orange-600;
    &:hover {
      @apply .text-pink-300;
    }
  }
  &-message,
  &-compliance {
    @apply .mx-2 .my-1 .px-2;
    @screen md {
      @apply .px-4;
    }
  }
  &-compliance {
    @apply .cursor-pointer .text-white .py-2 .rounded .border-white .border;
    &:hover {
      @apply bg-white .text-black;
    }
  }
}
.cookie-consent-link {
  @apply .no-underline .text-orange-600 .bg-orange-600;
}
/* purgecss end ignore */
</style>
