import React from 'react';
import { makeStyles, createStyles } from '@mui/styles';
// jjw: TODO: get the legacy out
// jjw: https://stackoverflow.com/questions/69263383/what-is-the-alternative-of-makestyles-for-material-ui-v-5

import IconDashboard from '@mui/icons-material/Dashboard';
import IconShoppingCart from '@mui/icons-material/ShoppingCart';
import IconPeople from '@mui/icons-material/People';
import IconBarChart from '@mui/icons-material/BarChart';
import IconLibraryBooks from '@mui/icons-material/LibraryBooks';

import Home from '../pages/Home';
import ResidentInfo from '../pages/ResidentInfo';
import ResidentPayment from '../pages/ResidentPayment';
import StaffInfo from '../pages/StaffInfo';
import StaffCompensation from '../pages/StaffCompensation';
import StaffTraining from '../pages/StaffTraining';
import ImportantContacts from '../pages/ImportantContacts';
import ServiceContacts from '../pages/ServiceContacts';
import ContactUs from '../pages/ContactUs';
import Users from '../pages/Users';

import List from '@mui/material/List';

import DrawerMenuItem from '../DrawerMenuItem';

export const pageConfigs = {
  home: {
    name: 'Home',
    link: '/',
    routeTo: 'Home',
    // jjw: TODO: HERE!! remove class just use string, later we just need to generate using the name anyway
    Icon: IconDashboard,
  },
  resident: {
    // jjw: no link, no routeTo
    name: 'Resident',
    Icon: IconShoppingCart,
  },
  residentInfo: {
    name: 'Resident Info',
    link: '/resident-info',
    routeTo: 'ResidentInfo',
    Icon: IconShoppingCart,
  },
  residentPayment: {
    name: 'Resident Payment',
    link: '/resident-payment',
    routeTo: 'ResidentPayment',
    Icon: IconShoppingCart,
  },
  staff: {
    // jjw: no link, no routeTo
    name: 'Staff',
    Icon: IconShoppingCart,
  },
  staffInfo: {
    name: 'Staff Info',
    link: '/staff-info',
    routeTo: 'StaffInfo',
    Icon: IconShoppingCart,
  },
  staffCompensation: {
    name: 'Staff Compensation',
    link: '/staff-compensation',
    routeTo: 'StaffCompensation',
    Icon: IconShoppingCart,
  },
  staffTraining: {
    name: 'Staff Training',
    link: '/staff-training',
    routeTo: 'StaffTraining',
    Icon: IconShoppingCart,
  },
  importantContacts: {
    name: 'Important Contacts',
    link: '/important-contacts',
    routeTo: 'ImportantContacts',
    Icon: IconShoppingCart,
  },
  serviceContacts: {
    name: 'Service Contacts',
    link: '/service-contacts',
    routeTo: 'ServiceContacts',
    Icon: IconShoppingCart,
  },
  contactUs: {
    name: 'Contact Us',
    link: '/contact-us',
    routeTo: 'ContactUs',
    Icon: IconShoppingCart,
  },
  users: {
    name: 'Users',
    link: '/users',
    routeTo: 'Users',
    Icon: IconShoppingCart,
  },
};

// export default DrawerConfig;
