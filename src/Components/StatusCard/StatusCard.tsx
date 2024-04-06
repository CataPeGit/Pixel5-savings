import * as React from 'react';
import { Box, Button, Container, Dialog, DialogContent, DialogTitle, TextField, alpha, styled } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { useSelector } from 'react-redux';

const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  color: 'white',
  fontSize: 20,
  padding: theme.spacing(1),
}));

const StatusCard = () => {
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleEditCategoryClick = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };


  const totalSumAllocated = useSelector((state: any) => state.categories.totalSumAllocated);
  const totalExpenses = useSelector((state:any) => state.categories.totalExpenses );
  const totalRemaining = useSelector((state:any) => state.categories.totalRemaining);
  //backgroundSize: '100% 20%'
  
  return (
    <Box       
    id="hero"
    sx={(theme) => ({
      backgroundImage:
        theme.palette.mode === 'light'
          ? 'linear-gradient(180deg, #e8b73a, #8a660c)'
          : `linear-gradient(#e8b73a, ${alpha('#8a660c', 0.0)})`,
      
      backgroundRepeat: 'no-repeat',
    })}>
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pt: { xs: 4, sm: 4 },
          pb: { xs: 4, sm: 4 },
        }}
      >
        <Div sx={{
          background:"black", 
          width:"100%", 
          borderRadius: "25px",
          
          }}>
          <Container
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                pt: { xs: 4, sm: 4 },
                pb: { xs: 4, sm: 4 },
              }}
          >
            <Div>{`Your budget for this month is: ${totalSumAllocated} RON`}</Div>
            <Div>{`So far you've spent: ${totalExpenses} RON`}</Div>
            <Div>{`You can still spend: ${totalRemaining} RON`}</Div>
            <Div style={{ fontSize: 13}}>{"By the way, the current month is february ;)"}</Div>
            <Button style={{ marginTop: 0, marginBottom: 16, marginLeft: "0px" }} variant="outlined" onClick={handleEditCategoryClick}>
              Edit a category
            </Button>
          </Container> 
        </Div>

        {/* Dialog for editing a category */}
        <Dialog open={openDialog} onClose={handleCloseDialog}>
          <DialogTitle>Edit Category</DialogTitle>
          <DialogContent>
            {/* Add your edit category content here */}
            <div>
              <TextField fullWidth id="filled-basic" label="Change Category Name" variant="filled" style={{ marginBottom: 16 }} />
            </div>

            <div style={{ marginTop: 16 }} >
              <Button style={{float:'right'}} variant="outlined" endIcon={<SendIcon />}>
                Send
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </Container>

    </Box>
  );
};

export default StatusCard;
