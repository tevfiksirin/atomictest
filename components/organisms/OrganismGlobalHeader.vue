<template>

      <MoleculeMenuLinks
        class="flex flex-wrap items-center justify-center text-base md:ml-auto"
        :linkMenus="linkMenus"
      />

</template>

<script>
export default {
  name: 'OrganismGlobalHeader',
  props: ['linkMenus', 'logoLink'],
}
</script>