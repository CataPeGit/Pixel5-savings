
// src/components/Post.tsx
import { Box } from '@mui/material';
import React from 'react';
import Categories from '../Purchases/purchases';
import StatusCard from '../StatusCard/StatusCard';
import Header from '../Header/header';
import { useTheme } from '@emotion/react';
import CategoryList from '../CategoryList/CategoryList';
import './Homepage.scss';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import fetchExpenses from '../../redux/reducers/categories/actions/fetchExpenses';


const Homepage = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const uid = useSelector((state:any) =>  state.authentification.userId);
 //@ts-ignore
  dispatch(fetchExpenses({uid}));

  return (
    <Box sx={{height: 968, background: 'rgb(32, 33, 36)'}}>
        <Header></Header>
        <StatusCard></StatusCard>
        <CategoryList></CategoryList>
    </Box>
  );
};

export default Homepage;
