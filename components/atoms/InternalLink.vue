<template>
  <div>
    <nuxt-link
      v-bind:to="internalUrl"
      class="block px-2 py-1 mt-1 font-semibold rounded hover:bg-orange-400 sm:mt-0 sm:ml-2"
    >
      <slot name="internalText"></slot>
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['internalUrl'],
  data() {
    return {
      propinternalUrl: this.internalUrl,
    }
  },
}
</script>

<style>
</style>