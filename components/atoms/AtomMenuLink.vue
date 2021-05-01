<template>
  <nuxt-link 
    class="block px-2 py-1 font-semibold rounded hover:bg-orange-400" 
    :to="localePath(linkMenu.url)" 
    @click.native="isOpen = !isOpen">
    {{ $t(linkMenu.name) }}
  </nuxt-link>
</template>

<script>
export default {
  name: 'AtomMenuLink',
  props: ['linkMenu'],
}
</script>