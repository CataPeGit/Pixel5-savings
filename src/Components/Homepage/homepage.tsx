
// src/components/Post.tsx
import { Box } from '@mui/material';
import React from 'react';
import Categories from '../Purchases/purchases';
import StatusCard from '../StatusCard/StatusCard';
import Header from '../Header/header';
import { useTheme } from '@emotion/react';
import CategoryList from '../CategoryList/CategoryList';
import './Homepage.scss';

const Homepage = () => {
  const theme = useTheme();

  return (
    <Box sx={{height: 968, background: 'rgb(32, 33, 36)'}}>
        <Header></Header>
        <StatusCard></StatusCard>
        <CategoryList></CategoryList>
    </Box>
  );
};

export default Homepage;
