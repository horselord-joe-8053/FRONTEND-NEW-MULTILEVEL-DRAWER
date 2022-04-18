import React from 'react';
import { makeStyles, createStyles } from '@mui/styles';
// jjw: TODO: get the legacy out
// jjw: https://stackoverflow.com/questions/69263383/what-is-the-alternative-of-makestyles-for-material-ui-v-5

import IconDashboard from '@mui/icons-material/Dashboard';
import IconShoppingCart from '@mui/icons-material/ShoppingCart';
import IconPeople from '@mui/icons-material/People';
import IconBarChart from '@mui/icons-material/BarChart';
import IconLibraryBooks from '@mui/icons-material/LibraryBooks';

import * as Logger from './utils/logger';

import List from '@mui/material/List';

import DrawerMenuItem from './DrawerMenuItem';

const DrawerMenuItemList: React.FC<{ menuItemsConfig: any[] }> = ({ menuItemsConfig }) => {
  const classes = useStyles();

  Logger.logAsJsonStr('DrawerMenuItemList', 'menuItemsConfig', menuItemsConfig);

  // jjw: TODO:
  // jjw: Role roleFromUI = roleStringFromUI.toUpperCase() as Role;

  var menuItemList = menuItemsConfig.map(
    (item, index) => 
      <DrawerMenuItem {...item} key={"menuList_" + index} />
  );

  return (
    // jjw: NOTE:
    // jjw: Puzzling ERROR: "... refers to a value, but is being used as a type here"
    // jjw: => https://stackoverflow.com/a/64304122
    // jjw: make sure filename is with .tsx extension
    <List component="nav" className={classes.appMenu} disablePadding>
      {menuItemList}
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
