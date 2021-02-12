<template>
  <div>
    <OrganismGlobalHeader :linkMenus="linkMenus" :logoLink="logoLink" />
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      linkMenus: [
        { name: 'Anasayfa', url: '/' },
        { name: 'Dost', url: '/dost' },
      ],
      logoLink: [{ name: '', url: '/' }],
    }
  },
}
</script>
