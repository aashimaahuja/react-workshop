import React from 'react';
import { Button } from '../common/components/Button/Button';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: { action: 'handle click action' },
  },
};

const Template = (args) => <Button {...args} />;
// export const PrimaryButton = () => (
//   <Button label="Primary button" size="small" variant="primary" />
// );

export const PrimaryButton = Template.bind({});
export const SecondaryButton = Template.bind({});

PrimaryButton.args = {
  label: 'Primary',
  size: 'small',
  variant: 'primary',
};

SecondaryButton.args = {
  label: 'Secondary',
  variant: 'secondary',
};
