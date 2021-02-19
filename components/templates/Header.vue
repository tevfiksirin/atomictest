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
        { name: 'Work', url: '/work' },
        { name: 'Lang', url: '/lang' },
      ],
      logoLink: [{ name: '', url: '/' }],
    }
  },
}
</script>
