import { h } from '@stencil/core';

export default {
  title: 'Components/Icons',
};

const Template = args => {
  return <v-cancel-icon {...args}></v-cancel-icon>;
};

export const Primary = Template.bind({});
Primary.args = {};
