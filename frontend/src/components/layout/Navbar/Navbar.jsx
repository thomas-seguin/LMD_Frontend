import React, { useEffect, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { FullScreenDialog } from "./components/FullScreenDialog";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [user, setUser] = useState(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const cookies = new Cookies();

  useEffect(() => {
    currentUser()
      .then((data) => {
        console.log(data);
        if (data && data._id) {
          setUser(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentUser]);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleDeliveryLogin = () => {
    let path = `/driver/login`;
    navigate(path);
    handleClose();
  };

  const handleUserLogin = () => {
    let path = `/user/login`;
    navigate(path);
    handleClose();
  };
  const handleProfileButtonClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleProfileButtonClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    setAnchorEl(null);
    const userType = cookies.get("scope");

    let path = `/${userType}/profile`;
    navigate(path);
  };

  const handleDashboardClick = () => {
    setAnchorEl(null);
    const userType = cookies.get("scope");

    let path = `/${userType}/dashboard`;
    navigate(path);
  };

  const handleLogoutClick = () => {
    setAnchorEl(null);
    logout().then((res) => {
      if (res) {
        setUser(null);
      }
    });
  };

  const signInOptions = (
    <List>
      <ListItem button>
        <ListItemText
          primary="Log in to Deliver"
          onClick={handleDeliveryLogin}
        />
      </ListItem>
      <Divider />
      <ListItem button>
        <ListItemText
          primary="Log in to send or receive items"
          onClick={handleUserLogin}
        />
      </ListItem>
    </List>
  );

  const renderProfileMenu = (
    <>
      <Typography variant="h7" component="div" sx={{ flexGrow: 0.01 }}>
        {user && user.firstName + " " + user.lastName}
      </Typography>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={handleProfileButtonClick}
      >
        <AccountCircleIcon />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleProfileButtonClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleProfileClick}>Profile</MenuItem>
        <MenuItem onClick={handleDashboardClick}>Dashboard</MenuItem>
        <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
      </Menu>
    </>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/*Need to replace it with a logo  */}
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/">
              <i color="white"></i> WASP-LMD
            </Link>
          </Typography>
          {user ? (
            renderProfileMenu
          ) : (
            <Button color="inherit" onClick={handleClickOpen}>
              Login
            </Button>
          )}
          {openDialog && (
            <FullScreenDialog onClose={handleClose} content={signInOptions} />
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};
