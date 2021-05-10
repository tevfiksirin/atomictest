<template>
  <IfBot>
    <cookie-consent
      class="fixed bottom-0 flex items-center justify-center w-full py-2 text-xl bg-gray-300"
    >
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
