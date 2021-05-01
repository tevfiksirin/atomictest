<template>
  <nuxt-link class="mr-5 hover:text-gray-900" :to="localePath(linkMenu.url)">
    {{ $t(linkMenu.name) }}
  </nuxt-link>
</template>

<script>
export default {
  name: 'AtomMenuLink',
  props: ['linkMenu'],
}
</script>