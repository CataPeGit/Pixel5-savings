import { Box, Button, styled, Dialog, DialogContent, DialogTitle, TextField } from '@mui/material';
import Category from '../Purchase/Purchase';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Purchase from '../Purchase/Purchase';
import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import { useDispatch, useSelector } from 'react-redux';

import { UseDispatch } from 'react-redux';
import createExpense from '../../redux/reducers/expenses/actions/createExpense';
import fetchExpenses from '../../redux/reducers/categories/actions/fetchExpenses';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  color: 'white',
  fontSize: 18,
  padding: theme.spacing(1),
}));

//@ts-ignore
const Purchases = ({category}) => { 
  
  const dispatch = useDispatch();


  const [title, setTitle] = useState('');
  const [ammount, setAmmount] = useState('');
  const [description, setDescription] = useState('');





  const purchases = useSelector((state:any) => state.categories.expenses);
  const uid = useSelector((state:any) => state.authentification.userId);


  let filteredPurchases = [];
  if(purchases){
    filteredPurchases = purchases.filter((item:any) => item.field=== category.category);
  }
   
  console.log(filteredPurchases);
  
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleEditCategoryClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  
  const handleAddPurchase = async () => {
    //@ts-ignore
    await dispatch(createExpense({uid: uid, field: category.category, amount : parseFloat(ammount), title : title, description: description}))
   //@ts-ignore
    await dispatch(fetchExpenses({uid: uid}));
    handleCloseDialog();
  }
  const handleInputChangeToBeInt = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Filter out non-integer characters using regular expression
    event.target.value = event.target.value.replace(/[^0-9]/g, '');
  };


  return (
    <Box>
        <Box>
            <Div>{`For this category you allocated: ${category.sumAllocated}` }</Div>
            <Div>{`Out of which you spent: ${category.expenses}`}</Div>
            <Div>{`You can still allocate: ${category.remaining}`}</Div>

            <Button variant="outlined" startIcon={<AddCircleOutlineIcon />} onClick={handleEditCategoryClick}>
              Create a purchase
            </Button>
        </Box>

        <br/>

       {  filteredPurchases.map((item:any) => {
           return <Purchase categoryValues={item.amount} categoryName={item.title} categoryContent={item.description} id={item.expenseId} ></Purchase>
       
        })}
  

      {/* Dialog for making a purchase */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Create a purchase</DialogTitle>
        <DialogContent>
          {/* content for creating a purchase */}
          <div>
            <TextField fullWidth id="filled-basic" label="Purchase name" variant="filled" style={{ marginBottom: 16 }}  onChange={(e) => setTitle(e.target.value)}/>
          </div>
          <div>
            <TextField
              type="text" // Use text type to allow input filtering
              inputProps={{
                pattern: '[0-9]*', // Use pattern to restrict input to integers
                onInput: handleInputChangeToBeInt, // Handle input change event
              }}
              onChange={(e) => setAmmount(e.target.value)}
           fullWidth id="filled-basic" label="Paid value (in RON)" variant="filled" />
          </div>
          <div style={{ marginTop: 16 }}>
            <TextField fullWidth id="filled-basic" label="Description" variant="filled" style={{ marginBottom: 16 }} 
            onChange={(e) => setDescription(e.target.value)}/>
          </div>
          <div style={{ marginTop: 16 }} >
            <Button style={{float:'right'}} variant="outlined" endIcon={<SendIcon />} onClick={handleAddPurchase}>
              Send
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Purchases;
