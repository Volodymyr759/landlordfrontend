import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Header } from './Header';
import { Props } from './types';

export default {
  title: 'Steps/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template = (arg: JSX.IntrinsicAttributes & Props) => {
  return <Header {...arg} />;
};

export const Default = Template.bind({
    onGoBack: () => console.log('Go Back'),
    onPhone: () => console.log('Phone')
});