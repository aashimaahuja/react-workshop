import React from 'react';
import { Admin } from '../pages/Admin';
import { Emails } from '../pages/Emails';

export const adminRoutes = [
  { path: '/admin', element: React.createElement(Admin) },
  { path: '/emails', element: React.createElement(Emails) },
];
