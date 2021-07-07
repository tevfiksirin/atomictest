<template>
  <a class="text-indigo-500" :href="link.url">{{ link.name }}</a>
</template>

<script>
export default {
  name: 'AtomLink',
  props: ['link'],
}
</script>