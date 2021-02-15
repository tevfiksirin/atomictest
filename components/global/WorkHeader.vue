<template>
  <div class="w-full h-auto">
    <div class="container h-auto mx-auto">
      <header class="flex px-2 justify-between">
        <div>
          <img
            class=""
            src="https://bradlc.gallerycdn.vsassets.io/extensions/bradlc/vscode-tailwindcss/0.4.3/1598388191194/Microsoft.VisualStudio.Services.Icons.Default"
            alt="logo"
            width="64"
            height="64"
          />
        </div>
        <div class="flex justify-end">
          <div
            :class="isOpen ? 'block' : 'hidden'"
            class="flex justify-end w-5/12 items-center md:flex"
          >
            <ul class="flex p-2 h-auto gap-x-1">
              <li class="p-2 place-self-center">
                <nuxt-link class="" to="/">Anasayfa</nuxt-link>
              </li>
              <li class="p-2 place-self-center">
                <nuxt-link class="" to="/dost">Dost</nuxt-link>
              </li>
              <li class="p-2 place-self-center">
                <nuxt-link class="" to="/work">Work</nuxt-link>
              </li>
            </ul>
          </div>
          <div class="flex items-center md:hidden">
            <button
              @click="isOpen = !isOpen"
              type="button"
              class="text-indigo-900 focus:text-indigo-900 focus:outline-none hover:text-pink-600"
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
      </header>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
}
</script>