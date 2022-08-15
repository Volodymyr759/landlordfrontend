import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from './Button';

export default {
  title: 'Steps/Button',
  component: Button,
  argTypes: {
    appearance: { control: 'text' },
    btnText: { control: 'Get Started' }
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  appearance: 'primary',
  children: 'OK'
};

export const Secondary = Template.bind({});
Secondary.args = {
  appearance: 'dark',
  children: 'DARK BUTTON'
};

