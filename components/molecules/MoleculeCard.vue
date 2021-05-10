<template>
  <div
    class="p-6 text-blue-800 transition duration-500 ease-in-out bg-green-100 border border-blue-200 rounded-sm hover:shadow-lg"
  >
    <AtomTitle tag="h2" :content="card.title" />
    <AtomText :text="card.text" />
  </div>
</template>

<script>
export default {
  name: 'MoleculeCard',
  props: ['card'],
}
</script>
