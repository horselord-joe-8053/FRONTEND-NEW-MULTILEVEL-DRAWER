import React, { forwardRef } from 'react';
import ListItem from '@mui/material/ListItem';

import { NavLink, NavLinkProps } from 'react-router-dom';
// jjw: NOTE: error: Can't resolve 'react-router-dom'
// jjw: needs type def but also needs actual def as well
// jjw: so need both lines in package.json:
/*
"@types/react-router-dom": "latest",
"react-router-dom": "latest",
*/

import * as Logger from './utils/logger';
export interface DrawerMenuComponentProps {
  className?: string;
  link?: string | null; // because the InferProps props allows alows null value
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
  children?: any | null; // jjw: TODO: shouldn't be 'any' here
}

const DrawerMenuComponent: React.FC<DrawerMenuComponentProps> = (props) => {
  const { className, onClick, link, children } = props;

  // If link is not set return the orinary ListItem
  if (!link || typeof link !== 'string') {
    return <ListItem button className={className} children={children} onClick={onClick} />;
  }

  // Return a LitItem with a link component
  return (
    <ListItem
      button
      className={className}
      children={children}
      component={forwardRef(
        (props: NavLinkProps, ref: any) => (
          <NavLink {...props} ref={ref} />
        )
        // jjw: TODO??? is this gonna work?
        // jjw: https://stackoverflow.com/a/63834513
        // jjw: in the newer version of LinkOps, innerRef is no longer a parameter
      )}
      to={link}
      onClick={onClick}
      // jjw: need to add onClick to fix the problem we had for two days
      // jjw: each 'DrawerMenuItem' is using onClick() to control <Clapse/>
      // jjw: open or close state; the design that inspired us (https://codesandbox.io/s/frosty-jepsen-od0btu)
      // jjw: used above 'switch' condition to only permit an menu item that is
      // jjw: not a link to control 'Clapse', while each menu item with link can't control 
      // jjw: 'Clapse'
    />
  );
};

export default DrawerMenuComponent;
