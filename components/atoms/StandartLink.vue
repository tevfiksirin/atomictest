<template>
  <div>
    <a
      v-bind:href="url"
      target="_blank"
      rel="noopener"
      class="p-2 text-lg text-teal-500 bg-orange-200"
    >
      <slot name="text"></slot>
    </a>
  </div>
</template>

<script>
export default {
  props: ['url'],
  data() {
    return {
      propUrl: this.url,
    }
  },
}
</script>

<style>
</style>