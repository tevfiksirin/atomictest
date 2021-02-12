<template>
  <nuxt-link class="mr-5 hover:text-gray-900" :to="linkMenu.url">{{
    linkMenu.name
  }}</nuxt-link>
</template>

<script>
export default {
  name: 'AtomLink',
  props: ['linkMenu'],
}
</script>