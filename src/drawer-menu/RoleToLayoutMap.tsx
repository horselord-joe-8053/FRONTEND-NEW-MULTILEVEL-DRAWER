import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { JsxElement } from 'typescript';

import * as Logger from '../utils/logger';

import {
  adminDrawerMenuLayout,
  ownerDrawerMenuLayout,
  staffDrawerMenuLayout,
  privateUserDrawerMenuLayout,
  publicUserDrawerMenuLayout,
} from './Layouts';

import { pageConfigs } from './PageConfigs';

// jjw: TODO: the following may deserve a separate file
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

export function getFilledConfigByRole(role: Role): any {
  Logger.logAsStr('RoleToLayoutMap.getLayoutByRole', 'role', role.toString());

  var layout: any = rolesToLayouts[role as keyof typeof rolesToLayouts];
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

  // arr for fill in the routes we got from each page's config
  var routesFilledConfig: any[] = [];

  // fill all item configs for upper level navigator menu
  var upperMenuLayoutKeys: any[] = layout.upper;
  Logger.logAsJsonStr(
    'RoleToLayoutMap.getLayoutByRole',
    'upperMenuLayoutKeys',
    upperMenuLayoutKeys
  );
  var upperMenuFilledConfig: any[] = fillForKeyList(upperMenuLayoutKeys, routesFilledConfig);

  // fill all item configs for lower level navigator menu
  var lowerMenuLayoutKeys: any[] = layout.lower;
  Logger.logAsJsonStr(
    'RoleToLayoutMap.getLayoutByRole',
    'lowerMenuLayoutKeys',
    lowerMenuLayoutKeys
  );
  var lowerMenuFilledConfig: any[] = fillForKeyList(lowerMenuLayoutKeys, routesFilledConfig);

  Logger.logAsJsonStr(
    'RoleToLayoutMap.getLayoutByRole, after population',
    'routesFilledConfig.length',
    routesFilledConfig.length
  );

  var filledAll = {
    upper: upperMenuFilledConfig,
    lower: lowerMenuFilledConfig,
    routes: routesFilledConfig,
  };

  // Logger.logAsJsonStr('RoleToLayoutMap.getLayoutByRole', 'filledBoth', filledAll);
  // jjw: don't want to do this, as JSON.Stringify returns cicular ref error
  // jjw:   even with 'getCircularReplacer', it will print a lot of random

  Logger.logAsJsonStr(
    'RoleToLayoutMap.getLayoutByRole, after population',
    'filledAll upper and lower',
    { upper: filledAll.upper, lower: filledAll.lower }
  );

  return filledAll;
}

function fillForKeyList(keyList: any[], routesConfig: any[]) {
  return keyList.map((item) => filledForKey(item, routesConfig));
}

function filledForKey(item: any, routes: any[]): any {
  /*
    {
      key: 'resident',
      items: [{ key: 'residentInfo' }, { key: 'residentPayment' }],
    },
  */

  var itemPage: string = item.page;
  Logger.logAsStr('RoleToLayoutMap.filledForKey', 'itemKey', itemPage);

  var filledParentConfig: any = pageConfigs[itemPage as keyof typeof pageConfigs];
  Logger.logAsJsonStr('RoleToLayoutMap.filledForKey', 'filledParentConfig', filledParentConfig);

  /*
            <Routes>
              <Route path="/" element={<PageDashboard />} />
              <Route path="/orders" element={<PageOrders />} />
              <Route path="/customers" element={<PageCustomers />} />
              <Route path="/reports" element={<PageReports />} />
              <Route path="/sublevelpage" element={<SubLevelPage />} />
              <Route path="/sub2levelpage" element={<Sub2LevelPage />} />
            </Routes>  
  */

  // for efficiency, we are also processing and populating the routes here
  var FilledRouteTo = filledParentConfig.RouteTo;
  Logger.logAsJsonStr('RoleToLayoutMap.filledForKey', 'FilledRouteTo', FilledRouteTo);

  if (FilledRouteTo) {
    // jjw: TODO: Dyanmically create <Route/>
    // jjw: https://pramodmaali.medium.com/dynamic-routing-with-json-config-react-typescript-284e562390b6
    // jjw: stackoverflow.com/a/67561634

    var currRoute = <Route path={filledParentConfig.link} element={<FilledRouteTo />} />;

    // const RouteToComponentType = filledRouteTo as unknown as React.ComponentType;
    // var route = <Route path={filledParentConfig.link} element={<RouteToComponentType />} />;

    // const RouteToComponent = filledRouteTo as React.ReactNode;
    // var currRoute = <Route path={filledParentConfig.link} element={RouteToComponent} />;

    // var currRoute = <Route path={filledParentConfig.link} element={filledRouteTo} />;

    routes.push(currRoute);
  }

  /*
    home: {
      name: 'Home',
      link: '/',
      routeTo: Home,
      Icon: IconDashboard,
    },
  */

  // jjw: omit 'RouteTo' from being populated in config as it is only for <Routes/>;
  const { RouteTo: omittedRouteTo, ...filledParentConfigWithoutRouteTo } = filledParentConfig;

  var filled = {
    // jjw: spread operator '...' for Objects
    // jjw: https://www.javascripttutorial.net/object/javascript-merge-objects/
    ...filledParentConfigWithoutRouteTo,
  };
  Logger.logAsJsonStr('RoleToLayoutMap.filledForKey', 'filled before children', filled);

  var children: any[] = item.items;

  Logger.logAsJsonStr('RoleToLayoutMap.filledForKey', 'item.page', item.page);
  Logger.logAsJsonStr('RoleToLayoutMap.filledForKey', 'item.items', item.items);

  Logger.logAsStr('RoleToLayoutMap.filledForKey', '', 'here 1');

  if (children && children.length > 0) {
    Logger.logAsStr('RoleToLayoutMap.filledForKey', '', 'here 2');

    // jjw: RECURSIVE
    var filledChildrenConfigs = fillForKeyList(children, routes);

    Logger.logAsStr('RoleToLayoutMap.filledForKey', '', 'here 3');

    Logger.logAsJsonStr(
      'RoleToLayoutMap.filledForKey',
      'filledChildrenConfigs',
      filledChildrenConfigs
    );

    // jjw: spread operator '...' for array, but we may not need it here
    // jjw: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_array_literals
    filled.items = filledChildrenConfigs;

    Logger.logAsStr('RoleToLayoutMap.filledForKey', '', 'here 4');

    Logger.logAsJsonStr('RoleToLayoutMap.filledForKey', 'filled after children', filled);
  }

  return filled;
}
