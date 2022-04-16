import React from 'react';
import { makeStyles, createStyles } from '@mui/styles';
// jjw: TODO: get the legacy out
// jjw: https://stackoverflow.com/questions/69263383/what-is-the-alternative-of-makestyles-for-material-ui-v-5

import IconDashboard from '@mui/icons-material/Dashboard';
import IconShoppingCart from '@mui/icons-material/ShoppingCart';
import IconPeople from '@mui/icons-material/People';
import IconBarChart from '@mui/icons-material/BarChart';
import IconLibraryBooks from '@mui/icons-material/LibraryBooks';

import List from '@mui/material/List';

import DrawerMenuItem from './DrawerMenuItem';

import { Role, getLayoutByRole } from './drawer-menu/RoleToLayoutMap';

const appMenuItems = [
  {
    name: 'Dashboard',
    link: '/',
    Icon: IconDashboard,
  },
  {
    name: 'Orders',
    link: '/orders',
    Icon: IconShoppingCart,
  },
  {
    name: 'Customers',
    link: '/customers',
    Icon: IconPeople,
  },
  {
    name: 'Reports',
    link: '/reports',
    Icon: IconBarChart,
  },
  {
    name: 'Nested Pages',
    Icon: IconLibraryBooks,
    items: [
      {
        name: 'Level 2.1',
        link: '/sublevelpage',
        Icon: IconShoppingCart,
      },
      {
        name: 'Level 2.2',
        // link: "/sublevelpage",
        // Icon: IconBarChart,
        items: [
          {
            name: 'Level 2.2.1',
            link: '/sub2levelpage',
            Icon: IconPeople,
          },
          {
            name: 'Level 2.2.2',
            // link: "/",
            // Icon: IconDashboard
          },
        ],
      },
    ],
  },
];

const DrawerMenuItemList: React.FC = () => {
  const classes = useStyles();

  var filledConfigs = getLayoutByRole(Role.Admin);
  // jjw: TODO:
  // jjw: Role roleFromUI = roleStringFromUI.toUpperCase() as Role;

  return (
    // jjw: NOTE:
    // jjw: Puzzling ERROR: "... refers to a value, but is being used as a type here"
    // jjw: => https://stackoverflow.com/a/64304122
    // jjw: make sure filename is with .tsx extension
    <List component="nav" className={classes.appMenu} disablePadding>
      {/* jjw: TODO: remove comment */}
      {/* {appMenuItems.map((item, index) => (
        <DrawerMenuItem {...item} key={index} />
      ))} */}
    </List>
  );
};

// const drawerWidth = 140;

const useStyles = makeStyles((theme) =>
  createStyles({
    appMenu: {
      width: '100%',
    },
    // navList: {
    //   width: drawerWidth
    // },
    // menuItem: {
    //   width: drawerWidth
    // },
    // menuItemIcon: {
    //   color: "#97c05c"
    // }
  })
);

export default DrawerMenuItemList;
