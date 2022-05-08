import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FooterOneBtn } from './FooterOneBtn';

export default {
  title: 'Steps/Footers/FooterOneBtn',
  component: FooterOneBtn,
  argTypes: {
    appearance: { control: 'text' },
  },
} as ComponentMeta<typeof FooterOneBtn>;

const Template: ComponentStory<typeof FooterOneBtn> = (args) => <FooterOneBtn {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    appearance: 'white-box',
};

export const Secondary = Template.bind({});
Secondary.args = {
  appearance: 'light-gray-box',
};

