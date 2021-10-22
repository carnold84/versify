import { h } from '@stencil/core';

export default {
  title: 'Components/Button',
};

const Template = args => <v-button {...args}></v-button>;

export const Primary = Template.bind({});
Primary.args = {
  children: 'My first button',
  onClick() {
    console.log('Clicked');
  },
};
