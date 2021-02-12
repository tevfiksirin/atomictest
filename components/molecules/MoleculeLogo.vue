<template>
  <span>
    <span v-for="(logo, index) in logoLink" :key="logo.name + index">
      <AtomLogo :logo="logo" />
    </span>
  </span>
</template>

<script>
export default {
  name: 'MoleculeLogo',
  props: ['logoLink'],
}
</script>