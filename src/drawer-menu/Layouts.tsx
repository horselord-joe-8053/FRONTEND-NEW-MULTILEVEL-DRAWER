import React from 'react';

export const adminDrawerMenuLayout = {
  upper: [
    { page: 'home' },
    {
      page: 'resident',
      items: [
        {
          page: 'residentInfo',
          items: [{ page: 'staffInfo' }, { page: 'staffCompensation' }],
        },
        { page: 'residentPayment' },
      ],
    },
    {
      page: 'staff',
      items: [{ page: 'staffInfo' }, { page: 'staffCompensation' }, { page: 'staffTraining' }],
    },
    { page: 'importantContacts' },
    { page: 'serviceContacts' },
    { page: 'users' },
  ],

  lower: [{ page: 'contactUs' }],
};

export const ownerDrawerMenuLayout = {
  upper: [
    { page: 'home' },
    {
      page: 'resident',
      items: [{ page: 'residentInfo' }, { page: 'residentPayment' }],
    },
    {
      page: 'staff',
      items: [{ page: 'staffInfo' }, { page: 'staffCompensation' }, { page: 'staffTraining' }],
    },
    { page: 'importantContacts' },
    { page: 'serviceContacts' },
  ],

  lower: [{ page: 'contactUs' }],
};

export const staffDrawerMenuLayout = {
  upper: [
    { page: 'home' },
    {
      page: 'resident',
      items: [{ page: 'residentInfo' }],
    },
    {
      page: 'staff',
      items: [{ page: 'staffInfo' }, { page: 'staffTraining' }],
    },
    { page: 'importantContacts' },
    { page: 'serviceContacts' },
  ],

  lower: [{ page: 'contactUs' }],
};

export const privateUserDrawerMenuLayout = {
  upper: [
    { page: 'home' },
    {
      page: 'staff',
      items: [{ page: 'staffInfo' }],
    },
  ],

  lower: [{ page: 'contactUs' }],
};

export const publicUserDrawerMenuLayout = {
  upper: [
    { page: 'home' },
    {
      page: 'staff',
      items: [{ page: 'staffInfo' }],
    },
  ],

  lower: [{ page: 'contactUs' }],
};
