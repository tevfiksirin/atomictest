<template>
  <div>
    <Nuxt />

    <section class="flex flex-col min-h-screen">
      <OrganismHeader :links="links" />
      <div class="flex-auto flex flex-wrap bg-white">
        <MoleculeBanner class="w-full md:w-3/4 text-center md:text-left" />
        <div class="container mx-auto px-4 py-8 md:py-16">
          <OrganismGrid :cards="cards" />
        </div>
      </div>
      <OrganismFooter
        :columnOneLinks="columnOneLinks"
        :columnTwoLinks="columnTwoLinks"
      />
    </section>
  </div>
</template>

<script>

export default {
   name: "TemplateLanding",
   data: () => {
     return {
       links: […],
       cards: […],
       columnOneLinks: […],
       columnTwoLinks: […]
     };
   }
};
</script>