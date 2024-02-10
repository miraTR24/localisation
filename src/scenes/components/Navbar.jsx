


import React, { useState } from "react";
import {
  LightModeOutlined,
  DarkModeOutlined,
  Menu as MenuIcon,
  Search,
  SettingsOutlined,
  ArrowDropDownOutlined,
} from "@mui/icons-material";
import { Link } from 'react-router-dom';
import FlexBetween from "../components/FlexBetween";
import { useDispatch } from "react-redux";
import { setMode, setLogout } from "../../state";
// import profileImage from "../../assets/profile.jpeg";
import {
  AppBar,
  Button,
  Box,
  Typography,
  IconButton,
  InputBase,
  Toolbar,
  Menu,
  MenuItem,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Navbar = ({ user, isSidebarOpen, setIsSidebarOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);  // Add this line
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleMenuIconClick = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleClick = (event) => setAnchorEl(event.currentTarget);
  const handleClose = () => {
    dispatch(setLogout());
    navigate("/");
  };

  const renderDrawerContent = (
    <List>
      <ListItem  onClick={handleCloseDrawer}>
        <ListItemText primary="Catégories" />
      </ListItem>
      <ListItem  onClick={handleCloseDrawer}>
        <ListItemText primary="Mes favoris" />
      </ListItem>
      <ListItem  onClick={handleCloseDrawer}>
        <ListItemText primary="Mes réservations" />
      </ListItem>
      <ListItem  onClick={handleCloseDrawer}>
        <ListItemText primary="Mon compte" />
      </ListItem>
      <ListItem  onClick={handleClose}>
        <ListItemText primary="Déconnexion" />
      </ListItem>
    </List>
  );

  return (
    <AppBar
      sx={{
        position: "static",
        background: "none",
        boxShadow: "none",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", background: "black" }}>
        {/* LEFT SIDE */}
        <FlexBetween>
          <IconButton onClick={handleMenuIconClick} sx={{ display: { md: "none" } }}>
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
          <Link to="/Accueil" style={{ textDecoration: 'none' }}>
          <Typography
            fontWeight="bold"
            fontSize="1.5rem"
            sx={{ color: theme.palette.secondary[1000] }}
          >
            SPECTACULOOS
          </Typography>
          </Link>
        </FlexBetween>

        {/* RIGHT SIDE */}
        <FlexBetween gap="1.5rem">
        <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlined sx={{ fontSize: "25px" ,color: theme.palette.secondary[1000]}} />
            ) : (
              <LightModeOutlined sx={{ fontSize: "25px" ,color: theme.palette.secondary[1000] }} />
            )}
          </IconButton>
          <Box textAlign="left"   sx={{ display: { xs: "none", md: "block" },}}>
                <Typography
                  fontWeight="bold"
                  fontSize="0.85rem"
                  sx={{ color: theme.palette.secondary[1000] }}
                >
               Catégories
                </Typography>
                
              </Box>
              <Box textAlign="left"   sx={{ display: { xs: "none", md: "block" },}}>
                <Typography
                  fontWeight="bold"
                  fontSize="0.85rem"
                  sx={{ color: theme.palette.secondary[1000] }}
                >
               Mes favoris
                </Typography>
                
              </Box>
              <Box textAlign="left"   sx={{ display: { xs: "none", md: "block" },}} >
                <Typography
                  fontWeight="bold"
                  fontSize="0.85rem"
                  sx={{ color: theme.palette.secondary[1000] }}
                >
               Mes réservations
                </Typography>
                
              </Box>
              <Box textAlign="left"   sx={{ display: { xs: "none", md: "block" },}} >
              <Link to="/Moncompte" style={{ textDecoration: 'none' }}>
                <Typography
                  fontWeight="bold"
                  fontSize="0.85rem"
                  sx={{ color: theme.palette.secondary[1000] }}
                >
               Mon compte
                </Typography>
                </Link>
              </Box>
          <FlexBetween>
            <Button
              onClick={handleClose}
              sx={{
                display: { xs: "none", md: "flex" },
                justifyContent: "space-between",
                alignItems: "center",
                textTransform: "none",
                gap: "1rem",
              }}
            >
              <ArrowDropDownOutlined sx={{ color: "white" , fontSize: "25px" }} />
            </Button>

            {/* Drawer for small screens */}
            <Drawer
              anchor="right"
              open={isDrawerOpen}
              onClose={handleCloseDrawer}
              sx={{ display: { xs: "block", md: "none" } ,color: "white"}}
            >
              {renderDrawerContent}
            </Drawer>

            {/* Menu for large screens */}
            <Menu
              anchorEl={anchorEl}
              open={isOpen}
              onClose={handleClose}
              anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
              style={{ color: "black" }}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <MenuItem onClick={handleClose} style={{ color: "black" }}>
                Déconnexion
              </MenuItem>
            </Menu>
          </FlexBetween>
        </FlexBetween>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;

