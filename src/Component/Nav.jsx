
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const drawerWidth = 240;

const navItems = [
  { name: "Home", link: "/" },
  {
    name: "Company",
    submenu: [
      { name: "About", link: "/about" },
      { name: "Contact", link: "/contact" },
      { name: "Testimonial", link: "/testimonial" },
      { name: "Customer Profile", link: "/login" },
    ],
  },
  { name: "Product", link: "/log" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [openCompany, setOpenCompany] = useState(false);

  // Desktop dropdown open
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Mobile drawer toggle
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // Company collapse toggle (mobile)
  const handleCompanyClick = () => {
    setOpenCompany(!openCompany);
  };

  // Desktop menu items
  const menuId = "company-menu";

  const drawer = (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        JP Gadget
      </Typography>
      <List>
        {navItems.map((item) =>
          item.submenu ? (
            <React.Fragment key={item.name}>
              <ListItem disablePadding>
                <ListItemButton onClick={handleCompanyClick}>
                  <Typography sx={{ flexGrow: 1 }}>{item.name}</Typography>
                  {openCompany ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
              </ListItem>
              <Collapse in={openCompany} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {item.submenu.map((sub) => (
                    <ListItemButton
                      key={sub.name}
                      sx={{ pl: 4 }}
                      component={Link}
                      to={sub.link}
                      onClick={() => setMobileOpen(false)}
                    >
                      {sub.name}
                    </ListItemButton>
                  ))}
                </List>
              </Collapse>
            </React.Fragment>
          ) : (
            <ListItem key={item.name} disablePadding>
              <ListItemButton
                sx={{ textAlign: "center" }}
                component={Link}
                to={item.link}
                onClick={() => setMobileOpen(false)}
              >
                {item.name}
              </ListItemButton>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav" position="static" sx={{ bgcolor: "black" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography

variant="h6"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            JP  Gadget
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) =>
              item.submenu ? (
                <React.Fragment key={item.name}>
                  <Button
                    sx={{ color: "#fff" }}
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onMouseEnter={handleMenuOpen}
                  >
                    {item.name}
                  </Button>
                  <Menu
                    id={menuId}
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    MenuListProps={{
                      onMouseLeave: handleMenuClose,
                    }}
                  >
                    {item.submenu.map((sub) => (
                      <MenuItem
                        key={sub.name}
                        component={Link}
                        to={sub.link}
                        onClick={handleMenuClose}
                      >
                        {sub.name}
                      </MenuItem>
                    ))}
                  </Menu>
                </React.Fragment>
              ) : (
                <Button
                  key={item.name}
                  sx={{ color: "#fff" }}
                  component={Link}
                  to={item.link}
                >
                  {item.name}
                </Button>
              )
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for small screen */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
            color:'red'
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}