<template>
  <ul>
    <li v-for="(linkMenu, index) in linkMenus" :key="linkMenu.name + index">
      <AtomMenuLink :linkMenu="linkMenu" />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'MoleculeLinks',
  props: ['linkMenus'],
}
</script>