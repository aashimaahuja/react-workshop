import React from 'react';
import { Admin } from '../common/components/Admin';
import { Emails } from '../common/components/Emails';

export const adminRoutes = [
  { path: '/admin', element: React.createElement(Admin) },
  { path: '/emails', element: React.createElement(Emails) },
];
