import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FooterTwoBtn } from './FooterTwoBtn';
import { Props } from './types';

export default {
  title: 'Steps/Footers/FooterTwoBtn',
  component: FooterTwoBtn,
} as ComponentMeta<typeof FooterTwoBtn>;

const Template = (arg: JSX.IntrinsicAttributes & Props) => {
  return <FooterTwoBtn {...arg} />;
};

export const Default = Template.bind({
  onAgree: () => console.log('Agree'),
  onDisagree: () => console.log('Disagree')
});


