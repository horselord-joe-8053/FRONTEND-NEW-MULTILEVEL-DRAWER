import React from 'react';

import * as Logger from '../utils/logger';

import {
  adminDrawerMenuLayout,
  ownerDrawerMenuLayout,
  staffDrawerMenuLayout,
  privateUserDrawerMenuLayout,
  publicUserDrawerMenuLayout,
} from './Layouts';

import { pageConfigs } from './PageConfigs';

export enum Role {
  Admin = 'ADMIN',
  Owner = 'OWNER',
  Staff = 'STAFF',
  PrivateUser = 'PRIVATEUSER',
  PublicUser = 'PUBLICUSER',
}

const rolesToLayouts = {
  [Role.Admin]: adminDrawerMenuLayout,
  [Role.Owner]: ownerDrawerMenuLayout,
  [Role.Staff]: staffDrawerMenuLayout,
  [Role.PrivateUser]: privateUserDrawerMenuLayout,
  [Role.PublicUser]: publicUserDrawerMenuLayout,
};

export function getLayoutByRole(role: Role): any {
  Logger.logAsStr('RoleToLayoutMap.getLayoutByRole', 'role', role.toString());

  var layout: any = rolesToLayouts[role];
  Logger.logAsJsonStr('RoleToLayoutMap.getLayoutByRole', 'layout', layout);

  // jjw: we convert from the layout to all expanded menu items in a list
  /*
export const adminDrawerMenuLayout = {
  upper: [
    { key: 'home' },
    {
      key: 'resident',
      items: [{ key: 'residentInfo' }, { key: 'residentPayment' }],
    },
    {
      key: 'staff',
      items: [{ key: 'staffInfo' }, { key: 'staffCompensation' }, { key: 'staffTraining' }],
    },
    { key: 'importantContacts' },
    { key: 'serviceContacts' },
    { key: 'users' },
  ],

  lower: [{ key: 'contactUs' }],
};
  */
  var upperMenuLayoutKeys: any[] = layout.upper;
  Logger.logAsJsonStr(
    'RoleToLayoutMap.getLayoutByRole',
    'upperMenuLayoutKeys',
    upperMenuLayoutKeys
  );
  var upperMenuFilledConfig: any[] = fillForKeyList(upperMenuLayoutKeys);

  var lowerMenuLayoutKeys: any[] = layout.lower;
  Logger.logAsJsonStr(
    'RoleToLayoutMap.getLayoutByRole',
    'lowerMenuLayoutKeys',
    lowerMenuLayoutKeys
  );
  var lowerMenuFilledConfig: any[] = fillForKeyList(lowerMenuLayoutKeys);

  var filledBoth = {
    upper: [upperMenuFilledConfig],
    lower: [lowerMenuFilledConfig],
  };
  Logger.logAsJsonStr('RoleToLayoutMap.getLayoutByRole', 'filledBoth', filledBoth);

  return filledBoth;
}

function fillForKeyList(keyList: any[]) {
  return keyList.map(filledForKey);
}

function filledForKey(item: any): any {
  /*
    {
      key: 'resident',
      items: [{ key: 'residentInfo' }, { key: 'residentPayment' }],
    },
  */

  var itemKey: string = item.key;
  Logger.logAsStr('RoleToLayoutMap.filledForKey', 'itemKey', itemKey);

  var filledParentConfig: any = pageConfigs[itemKey as keyof typeof pageConfigs];
  Logger.logAsJsonStr('RoleToLayoutMap.filledForKey', 'filledParentConfig', filledParentConfig);

  /*
    home: {
      name: 'Home',
      link: '/',
      routeTo: Home,
      Icon: IconDashboard,
    },
  */

  var filled = {
    // jjw: spread operator '...' for Objects
    // jjw: https://www.javascripttutorial.net/object/javascript-merge-objects/
    ...filledParentConfig,
  };
  Logger.logAsJsonStr('RoleToLayoutMap.filledForKey', 'filled before children', filled);

  var children: any[] = item.items;
  Logger.logAsJsonStr('RoleToLayoutMap.filledForKey', 'children', children);

  if (children && children.length > 0) {
    // jjw: RECURSIVE
    var filledChildrenConfigs = fillForKeyList(children);
    Logger.logAsJsonStr(
      'RoleToLayoutMap.filledForKey',
      'filledChildrenConfigs',
      filledChildrenConfigs
    );

    // jjw: spread operator '...' for array, but we may not need it here
    // jjw: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_array_literals
    filled.items = filledChildrenConfigs;
    Logger.logAsJsonStr('RoleToLayoutMap.filledForKey', 'filled after children', filled);
  }

  return filled;
}
