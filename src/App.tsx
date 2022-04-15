import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import DrawerMenuItemList from './DrawerMenuItemList';

import Container from '@mui/material/Container';

import { Routes, Route, BrowserRouter } from 'react-router-dom';
// jjw: NOTE: for react-router-dom v6, 'Switch' is replaced with 'Routes':
// jjw: https://reactrouter.com/docs/en/v6/upgrading/v5#relative-routes-and-links

// --- jjw: temp pages TODO: move them out to sub folder
const PageDashboard = () => (
  <Typography variant="h3" component="h1">
    Dashboard Page
  </Typography>
);
const PageOrders = () => (
  <Typography variant="h3" component="h1">
    Orders Page
  </Typography>
);
const PageCustomers = () => (
  <Typography variant="h3" component="h1">
    Customers Page
  </Typography>
);
const PageReports = () => (
  <Typography variant="h3" component="h1">
    Reports Page
  </Typography>
);

const SubLevelPage = () => (
  <Typography variant="h3" component="h1">
    Sub Level Page
  </Typography>
);
const Sub2LevelPage = () => (
  <Typography variant="h3" component="h1">
    Sub 2 Level Page
  </Typography>
);
// ----

const drawerWidth = 240;

// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window;
// }

export default function ResponsiveDrawer() {
  // const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // const drawer = <div>JJW: put the drawer content here</div>;

  const drawerContent = (
    <div>
      <Toolbar />
      <Divider />
      <DrawerMenuItemList />
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  // const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <BrowserRouter>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        {/* jjw: 1st ROW that is above the nav and content with left margin of {drawerWidth} */}
        <AppBar
          position="fixed"
          sx={{
            width: { sm: `calc(100% - ${drawerWidth}px)` },
            ml: { sm: `${drawerWidth}px` },
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap component="div">
              Responsive drawer
            </Typography>
          </Toolbar>
        </AppBar>
        {/* jjw: 2nd ROW 1st COLUMN with {drawerWidth}: a <Box/> containing 2 versions of the <Drawer/>*/}
        <Box
          component="nav"
          sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            // container={container}
            variant="temporary"
            open={mobileOpen}
            // jjw: this is the Drawer that only opens if mobileOpen is true, i.e. when the menuIcon is
            //  click while mobileOpen is still false
            // jjw: TODO: how does it know when the screen is too small, we don't show this Drawer (or the other Drawer)???
            onClose={handleDrawerToggle}
            // jjw: TODO!!! if extract the entire top row, how to pass a function here that works???
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
          >
            {drawerContent}
          </Drawer>
          <Drawer
            variant="permanent"
            sx={{
              display: { xs: 'none', sm: 'block' },
              '& .MuiDrawer-paper': {
                boxSizing: 'border-box',
                width: drawerWidth,
              },
            }}
            open
            // jjw: this is the Drawer that always opens when the screen is wide enough
            // jjw: TODO: how does it know when the screen is too small, we don't show this Drawer (or the other Drawer)???
          >
            {drawerContent}
          </Drawer>
        </Box>
        {/* jjw: 2nd ROW 2nd COLUMN with `calc(100% - ${drawerWidth}px)`: the container for the main page content to render*/}
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            width: { sm: `calc(100% - ${drawerWidth}px)` },
          }}
        >
          <Toolbar />
          {/* jjw: Route definitions */}
          {/* jjw: NOTE: in fact, it seems that the entire element such as <PageDashboard/> is now 
            rendered exactly inside of this '<Container/>, which is what we want' */}
          <Container maxWidth="lg">
            {/* jjw: NOTE: for react-router-dom v6, 'Switch' is replaced with 'Routes':
            jjw: https://reactrouter.com/docs/en/v6/upgrading/v5#relative-routes-and-links */}

            <Routes>
              <Route path="/" element={<PageDashboard />} />
              <Route path="/orders" element={<PageOrders />} />
              <Route path="/customers" element={<PageCustomers />} />
              <Route path="/reports" element={<PageReports />} />
              <Route path="/sublevelpage" element={<SubLevelPage />} />
              <Route path="/sub2levelpage" element={<Sub2LevelPage />} />
            </Routes>
          </Container>
        </Box>
      </Box>
    </BrowserRouter>
  );
}
