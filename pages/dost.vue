<template>
  <div>
    <h1 class="bg-indigo-700 text-white text-center pt-16 pb-16">
      Merhaba Dost
    </h1>
  </div>
</template>
<script>
export default {
  data: () => {
    return {
      links: [
        { name: 'Anasayfa', url: '/' },
        { name: 'Dost', url: '/dost' },
      ],
    }
  },
}
</script>