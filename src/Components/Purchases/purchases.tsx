import { Box, Button, styled, Dialog, DialogContent, DialogTitle, TextField } from '@mui/material';
import Category from '../Purchase/Purchase';

import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Purchase from '../Purchase/Purchase';
import React from 'react';
import SendIcon from '@mui/icons-material/Send';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  color: 'white',
  fontSize: 18,
  padding: theme.spacing(1),
}));


const Purchases = () => {

  const [openDialog, setOpenDialog] = React.useState(false);

  const handleEditCategoryClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleInputChangeToBeInt = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Filter out non-integer characters using regular expression
    event.target.value = event.target.value.replace(/[^0-9]/g, '');
  };


  return (
    <Box>
        <Box>
            <Div>{"For this category you allocated: 500 ron"}</Div>
            <Div>{"Out of which you spent: 300 ron"}</Div>
            <Div>{"You can still allocate: 200 ron"}</Div>

            <Button variant="outlined" startIcon={<AddCircleOutlineIcon />} onClick={handleEditCategoryClick}>
              Create a purchase
            </Button>
        </Box>

        <br/>

        <Purchase categoryValues={0} categoryName={'Purchase 1'} categoryContent={'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'} ></Purchase>
        <Purchase categoryValues={0} categoryName={'Purchase 1'} categoryContent={'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'} ></Purchase>
        <Purchase categoryValues={0} categoryName={'Purchase 1'} categoryContent={'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'} ></Purchase>
        <Purchase categoryValues={0} categoryName={'Purchase 1'} categoryContent={'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'} ></Purchase>
        <Purchase categoryValues={0} categoryName={'Purchase 1'} categoryContent={'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'} ></Purchase>


      {/* Dialog for making a purchase */}
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Create a purchase</DialogTitle>
        <DialogContent>
          {/* content for creating a purchase */}
          <div>
            <TextField fullWidth id="filled-basic" label="Purchase name" variant="filled" style={{ marginBottom: 16 }} />
          </div>
          <div>
            <TextField
              type="text" // Use text type to allow input filtering
              inputProps={{
                pattern: '[0-9]*', // Use pattern to restrict input to integers
                onInput: handleInputChangeToBeInt, // Handle input change event
              }}
           fullWidth id="filled-basic" label="Paid value (in RON)" variant="filled" />
          </div>
          <div style={{ marginTop: 16 }}>
            <TextField fullWidth id="filled-basic" label="Description" variant="filled" style={{ marginBottom: 16 }} />
          </div>
          <div style={{ marginTop: 16 }} >
            <Button style={{float:'right'}} variant="outlined" endIcon={<SendIcon />}>
              Send
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default Purchases;
