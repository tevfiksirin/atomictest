<template>
  <header
    class="bg-gray-200 sm:flex sm:justify-between sm:items-center sm:px-4 sm:py-3"
  >
    <div class="flex items-center justify-between px-4 py-3 sm:p-0">
      <div>
        <nuxt-link class="" :to="localePath('/')"
          ><img class="h-8" src="/logo40.png" alt=""
        /></nuxt-link>
      </div>
      <div class="sm:hidden">
        <button
          @click="isOpen = !isOpen"
          type="button"
          class="text-gray-800 focus:text-orange-400 focus:outline-none hover:text-orange-400"
        >
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path
              v-if="isOpen"
              fill-rule="evenodd"
              d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
            />
            <path
              v-if="!isOpen"
              fill-rule="evenodd"
              d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div
      :class="isOpen ? 'block' : 'hidden'"
      class="px-2 pt-2 pb-4 sm:flex sm:p-0"
    >
      <ul>
        <li v-for="(item, index) in menuLink" :key="index">
          <InternalLink internalUrl="{{ item.linkUrl }}">
            <template :slot="internalText"> {{ item.menuName }} </template>
          </InternalLink>
        </li>
      </ul>
    </div>
  </header>
</template>
<script>
export default {
  computed: {
    availableLocales() {
      return this.$i18n.locales.filter((i) => i.code !== this.$i18n.locale)
    },
  },
  data() {
    return {
      isOpen: false,
      menuLink: [
        { linkUrl: "localePath('/')", menuName: "$t('menu.homepage')" },
      ],
    }
  },
}
</script>