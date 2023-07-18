import { Alert } from '../common/components/Alert/Alert';
import React from 'react';

export default {
  title: 'Components/Alert',
  component: Alert,
};

const Template = (args) => <Alert {...args} />;
Template.bind({});

export const Success = Template.bind({});
export const Error = Template.bind({});
export const Warning = Template.bind({});
export const Info = Template.bind({});

Success.args = {
  title: 'Success',
  description: 'This is a success alert — check it out!',
  variant: 'filled',
  severity: 'success',
};

Error.args = {
  title: 'Error',
  description: 'This is an error alert — check it out!',
  variant: 'filled',
  severity: 'error',
};

Warning.args = {
  title: 'Warning',
  description: 'This is a warning alert — check it out!',
  variant: 'filled',
  severity: 'warning',
};

Info.args = {
  title: 'Info',
  description: 'This is an info alert — check it out!',
  variant: 'filled',
  severity: 'info',
};
