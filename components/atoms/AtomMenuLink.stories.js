// YourComponent.stories.js

import AtomMenuLink from './AtomMenuLink'

//👇 This default export determines where your story goes in the story list
export default {
  title: 'atoms/AtomMenuLink',
  component: AtomMenuLink,
}

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
  components: { AtomMenuLink },
  props: { args },
  template: '<AtomMenuLink v-bind="$props"/>',
})

export const MenuLink = Template.bind({})

MenuLink.args = {
  /* 👇 The args you need here will depend on your component */
}
