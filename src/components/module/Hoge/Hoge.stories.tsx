import { Meta, Story } from '@storybook/react/types-6-0';

import { Hoge, Props } from './Hoge';

export default {
  title: 'Module/Hoge',
  component: Hoge
} as Meta;

const Template: Story<Props> = args => <Hoge {...args} />;

export const Default = Template.bind({});
Default.args = {
  list: [
    {
      title: 'title',
      detail: 'detail'
    }
  ]
};

export const Multi = Template.bind({});
Multi.args = {
  list: [
    {
      title: 'title_1',
      detail: 'detail_1'
    },
    {
      title: 'title_2',
      detail: 'detail_2'
    }
  ]
};
