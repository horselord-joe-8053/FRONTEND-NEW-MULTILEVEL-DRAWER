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
    RouteTo: Home, // jjw: note 'RouteTo' and 'Icon' start with capital letter because they may directly used in JSX </> in the code
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
    RouteTo: ResidentInfo,
    Icon: IconShoppingCart,
  },
  residentPayment: {
    name: 'Resident Payment',
    link: '/resident-payment',
    RouteTo: ResidentPayment,
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
    RouteTo: StaffInfo,
    Icon: IconShoppingCart,
  },
  staffCompensation: {
    name: 'Staff Compensation',
    link: '/staff-compensation',
    RouteTo: StaffCompensation,
    Icon: IconShoppingCart,
  },
  staffTraining: {
    name: 'Staff Training',
    link: '/staff-training',
    RouteTo: StaffTraining,
    Icon: IconShoppingCart,
  },
  importantContacts: {
    name: 'Important Contacts',
    link: '/important-contacts',
    RouteTo: ImportantContacts,
    Icon: IconShoppingCart,
  },
  serviceContacts: {
    name: 'Service Contacts',
    link: '/service-contacts',
    RouteTo: ServiceContacts,
    Icon: IconShoppingCart,
  },
  contactUs: {
    name: 'Contact Us',
    link: '/contact-us',
    RouteTo: ContactUs,
    Icon: IconShoppingCart,
  },
  /* 
jjw: got the following Warning:
"
react-jsx-dev-runtime.development.js:87 Warning: Each child in a list should have a unique "key" prop.
Check the render method of `ResponsiveDrawer`
"
jjw: TODO: 
https://stackoverflow.com/questions/34576332/warning-each-child-in-an-array-or-iterator-should-have-a-unique-key-prop-che

*/
  // users: {
  //   name: 'Contact Us',
  //   link: '/contact-us',
  //   RouteTo: ContactUs,
  //   Icon: IconBarChart,
  // },
  users: {
    name: 'Users',
    link: '/users',
    RouteTo: Users,
    Icon: IconShoppingCart,
  },
};

// export default DrawerConfig;
