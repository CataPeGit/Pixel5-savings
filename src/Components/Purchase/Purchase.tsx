import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { IconButton, Typography, Dialog, DialogContent, DialogTitle, TextField, Button, Hidden } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { useSelector } from 'react-redux';
import deleteExpense from '../../redux/reducers/expenses/actions/deleteExpense';
import fetchExpenses from '../../redux/reducers/categories/actions/fetchExpenses';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import editExpense from '../../redux/reducers/expenses/actions/editExpense';



type CategoryProps = {
  categoryName: string;
  categoryValues: number;
  categoryContent: string;
  id: string
};

const Purchase = (props: CategoryProps) => {
  const [openDialog, setOpenDialog] = React.useState(false);


  const [title, setTitle] = useState('');
  const [ammount, setAmmount] = useState('');
  const [description, setDescription] = useState('');

  const uid = useSelector((state:any) => state.authentification.userId);
  const dispatch = useDispatch();

  const handleEditClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleInputChangeToBeInt = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Filter out non-integer characters using regular expression
    event.target.value = event.target.value.replace(/[^0-9]/g, '');
  };

  const handleDelete = async() => {
    let id = props.id;
    //@ts-ignore
    await dispatch(deleteExpense({id:props.id}));
    //@ts-ignore
    await dispatch(fetchExpenses({uid:uid}));
  }

  const handleEdit = async() => {
    let id = props.id;
    //@ts-ignore
    await dispatch(editExpense({id:props.id, title:title, amount: ammount, description: description}));
    //@ts-ignore
    await dispatch(fetchExpenses({uid:uid}));
  }

  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
        >
          <div style={{ flexGrow: 1, fontSize: '1.1em' }}>
            {props.categoryName}
            <Typography>{props.categoryValues} RON</Typography>
          </div>
          <div style={{ marginTop: 4 }}>
            <IconButton aria-label="edit" onClick={handleEditClick}>
              <EditIcon />
            </IconButton>
            <IconButton aria-label="delete" onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          {props.categoryContent}
        </AccordionDetails>
      </Accordion>
      <Dialog open={openDialog} onClose={handleCloseDialog}>
        <DialogTitle>Edit your purchase</DialogTitle>
        <DialogContent style={{ width: 400, minHeight: 100 }}>
          {/* Purchase edit content */}
          <div>
            <TextField fullWidth id="filled-basic" label="Change purchase name" variant="filled" style={{ marginBottom: 16 }} onChange={(e) => setTitle(e.target.value)}/>
          </div>
          <div>
            <TextField
              type="text" // Use text type to allow input filtering
              inputProps={{
                pattern: '[0-9]*', // Use pattern to restrict input to integers
                onInput: handleInputChangeToBeInt, // Handle input change event
              }}
           fullWidth id="filled-basic" label="Change value (in RON)" variant="filled" 
           onChange={(e) => setAmmount(e.target.value)}
           />
          </div>
          <div style={{ marginTop: 16 }}>
            <TextField fullWidth id="filled-basic" label="Change description" variant="filled" style={{ marginBottom: 16 }} 
            onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div style={{ marginTop: 16 }} >
            <Button style={{float:'right'}} variant="outlined" endIcon={<SendIcon />} onClick={handleEdit}>
              Send
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      <br/>
    </div>
  );
}

export default Purchase;
