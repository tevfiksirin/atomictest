<template>
  <ul class="md:ml-auto flex flex-wrap items-center text-base justify-center">
    <li v-for="(link, index) in links" :key="link.name + index">
      <AtomMenuLink :linkm="linkm" />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'MoleculeMenuLinks',
  props: ['linksm'],
}
</script>