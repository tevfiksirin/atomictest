<template>
  <footer class="flex flex-wrap text-white">
    <div class="w-full md:w-1/4 bg-gray-900 p-4 md:p-12">
      <MoleculeLinks class="flex flex-col" :links="columnOneLinks" />
    </div>
    <div class="w-full md:w-3/4 bg-blue-900 p-4 md:p-12">
      <MoleculeLinks class="flex flex-col" :links="columnTwoLinks" />
    </div>
  </footer>
</template>

<script>
export default {
  name: 'OrganismFooter',
  props: ['columnOneLinks', 'columnTwoLinks'],
}
</script>