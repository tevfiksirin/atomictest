<template>
  <div class="w-full h-16 bg-indigo-200">
    <div class="container mx-auto bg-red-400">
      <header class="flex justify-around">
        <img
          class="p-5"
          src="https://bradlc.gallerycdn.vsassets.io/extensions/bradlc/vscode-tailwindcss/0.4.3/1598388191194/Microsoft.VisualStudio.Services.Icons.Default"
          alt="logo"
          width="64"
          height="64"
        />
        <nav class="p-5 bg-yellow-300">
          <ul>
            <li>
              <nuxt-link to="/">Anasayfa</nuxt-link>
              <nuxt-link to="/dost">Dost</nuxt-link>
              <nuxt-link to="/work">Work</nuxt-link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  </div>
</template>