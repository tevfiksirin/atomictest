<template>
  <header class="text-gray-600 body-font">
    <div
      class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
    >
      <span
        class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
      >
        <MoleculeLogo :logoLink="logoLink" />
        <AtomSlogan slogan="Merhaba" />
      </span>
      <MoleculeMenuLinks
        class="md:ml-auto flex flex-wrap items-center text-base justify-center"
        :linkMenus="linkMenus"
      />
    </div>
  </header>
</template>

<script>
export default {
  name: 'OrganismGlobalHeader',
  props: ['linkMenus', 'logoLink'],
}
</script>