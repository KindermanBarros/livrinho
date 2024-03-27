import React, { useState } from 'react';
import { styled, Box, Grid, Tabs, Tab } from '@mui/material';

const CategoryBar = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  color: '#990F4B',
  padding: theme.spacing(1),
  overflowX: 'auto',
  whiteSpace: 'nowrap',
  position: 'relative',
}));

const StyledTab = styled(Tab)(({ theme }) => ({
  color: '#990F4B',
  fontWeight: 'bold',
  padding: theme.spacing(0, 2),
  '&.Mui-selected': {
    color: '#990F4B',
    borderBottom: '2px solid #990F4B',
  },
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(0, 4),
  },
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(0, 6),
  },
  [theme.breakpoints.up('lg')]: {
    padding: theme.spacing(0, 8),
  },
}));

const CategoryHeader: React.FC = () => {
  const categories = [
    { id: 1, name: 'Tudo' },
    { id: 2, name: 'Fantasia' },
    { id: 3, name: 'Horror' },
    { id: 4, name: 'Ficção Científica' },
    { id: 5, name: 'Romance' },
    { id: 6, name: 'Terror' },
  ];

  const [selectedTab, setSelectedTab] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <CategoryBar container justifyContent="center">
        <Tabs
          value={selectedTab}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
        >
          {categories.map((category) => (
            <StyledTab label={category.name} key={category.id} />
          ))}
        </Tabs>
      </CategoryBar>
    </Box>
  );
};

export default CategoryHeader;
