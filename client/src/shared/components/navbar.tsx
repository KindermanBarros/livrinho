import React from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  styled,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchHeader from './searchHeader';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../../redux/searchTermSlice';
import { RootState, AppDispatch } from '../../redux/store';

const NavBarContainer = styled(Box)({
  position: 'relative',
  zIndex: 999,
});

const StyledAction = styled(BottomNavigationAction)<{ selected?: boolean }>(
  ({ theme, selected }) => ({
    [theme.breakpoints.up('sm')]: {
      padding: theme.spacing(0, 4),
      margin: theme.spacing(0, 2),
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(0, 6),
      margin: theme.spacing(0, 3),
    },
    [theme.breakpoints.up('lg')]: {
      padding: theme.spacing(0, 8),
      margin: theme.spacing(0, 4),
    },
    color: selected ? 'blue' : 'inherit',
  }),
);

const StyledBottomNavigation = styled(BottomNavigation)({
  position: 'fixed',
  bottom: 0,
  width: '100%',
});

const NavBar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const searchTerm = useSelector((state: RootState) => state.searchTerm.value);
  const [value, setValue] = React.useState(0);
  const [isSearchBarOpen, setSearchBarOpen] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleSearchClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    setSearchBarOpen((prev) => !prev);
    dispatch(setSearchTerm(searchTerm));
  };

  return (
    <>
      <NavBarContainer>
        <SearchHeader isVisible={isSearchBarOpen} />
      </NavBarContainer>
      <NavBarContainer>
        <StyledBottomNavigation
          showLabels
          value={value}
          onChange={handleChange}
        >
          <StyledAction label="Home" icon={<HomeIcon />} />
          <StyledAction
            label="Search"
            icon={<SearchIcon />}
            onClick={handleSearchClick}
            selected={isSearchBarOpen}
          />
          <StyledAction label="Notifications" icon={<NotificationsIcon />} />
          <StyledAction label="Profile" icon={<AccountCircleIcon />} />
        </StyledBottomNavigation>
      </NavBarContainer>
    </>
  );
};

export default NavBar;
