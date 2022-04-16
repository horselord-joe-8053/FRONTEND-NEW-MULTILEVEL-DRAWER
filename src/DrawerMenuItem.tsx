import React from 'react';
import PropTypes from 'prop-types';
// import { makeStyles, createStyles } from '@mui/material/styles';
import { makeStyles, createStyles } from '@mui/styles';
// jjw: TODO: get the legacy out
// jjw: https://stackoverflow.com/questions/69263383/what-is-the-alternative-of-makestyles-for-material-ui-v-5

// import { SvgIconProps } from '@mui/material/SvgIcon'

import List from '@mui/material/List';

import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Collapse from '@mui/material/Collapse';

import IconExpandLess from '@mui/icons-material/ExpandLess';
import IconExpandMore from '@mui/icons-material/ExpandMore';

import DrawerMenuComponent from './DrawerMenuComponent';

// React runtime PropTypes
export const AppMenuItemPropTypes = {
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
  Icon: PropTypes.elementType,
  items: PropTypes.array,
};

// TypeScript compile-time props type, infered from propTypes
// https://dev.to/busypeoples/notes-on-typescript-inferring-react-proptypes-1g88
type AppMenuItemPropTypes = PropTypes.InferProps<typeof AppMenuItemPropTypes>;
type AppMenuItemPropsWithoutItems = Omit<AppMenuItemPropTypes, 'items'>;

// Improve child items declaration
export type AppMenuItemProps = AppMenuItemPropsWithoutItems & {
  items?: AppMenuItemProps[];
};

const DrawerMenuItem: React.FC<AppMenuItemProps> = (props) => {
  const { name, link, Icon, items = [] } = props;
  const classes = useStyles();
  const isExpandable = items && items.length > 0;
  const [open, setOpen] = React.useState(false);

  console.log('name:' + name + ', isExpandable:' + isExpandable + ', open:' + open);

  function handleClick() {
    console.log('handleClick start, name:' + name + ', open:' + open);
    setOpen(!open);
    console.log('handleClick end,   name:' + name + ', open:' + open);
  }

  const MenuItemRoot = (
    <DrawerMenuComponent className={classes.menuItem} link={link} onClick={handleClick}>
      {/* Display an icon if any */}
      {!!Icon && (
        <ListItemIcon className={classes.menuItemIcon}>
          <Icon />
        </ListItemIcon>
      )}
      <ListItemText primary={name} inset={!Icon} />
      {/* Display the expand menu if the item has children */}
      {isExpandable && !open && <IconExpandMore />}
      {isExpandable && open && <IconExpandLess />}
    </DrawerMenuComponent>
  );

  const MenuItemChildren = isExpandable ? (
    <Collapse in={open} timeout="auto" unmountOnExit>
      <Divider />
      {/* <List component="div" disablePadding> */}
      {/* jjw: cascade the left padding for children components 
            TODO: put this into centralized class/style file????*/}
      <List component="div" style={{ paddingLeft: '25px' }}>
        {items.map((item, index) => (
          // recursive
          <DrawerMenuItem {...item} key={index} />
        ))}
      </List>
    </Collapse>
  ) : null;

  return (
    <>
      {MenuItemRoot}
      {MenuItemChildren}
    </>
  );
};

const useStyles = makeStyles((theme) =>
  createStyles({
    menuItem: {
      '&.active': {
        background: 'rgba(0, 0, 0, 0.08)',
        '& .MuiListItemIcon-root': {
          color: '#fff',
        },
      },
    },
    menuItemIcon: {
      color: '#97c05c',
    },
  })
);

export default DrawerMenuItem;
