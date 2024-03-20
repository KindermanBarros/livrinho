import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const NavBar: React.FC = () => {
  const [value, setValue] = React.useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      sx={{ width: "100%", position: "fixed", bottom: 0 }}
    >
      <BottomNavigationAction label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Search" icon={<SearchIcon />} />
      <BottomNavigationAction label="Add" icon={<AddCircleIcon />} />
      <BottomNavigationAction
        label="Notifications"
        icon={<NotificationsIcon />}
      />
      <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} />
    </BottomNavigation>
  );
};

export default NavBar;
