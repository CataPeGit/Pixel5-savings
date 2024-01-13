import { Box, styled } from '@mui/material';

const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: 'black',
    color: 'white',
    fontSize: 20,
    padding: theme.spacing(1),
  }));


const StatusCard = () => {
  return (
    <Box>

        <Div>{"Buget ramas: 500 ron"}</Div>
        <Div>{"Luna asta ai cheltuit: 700 ron"}</Div>

    </Box>
  );
}

export default StatusCard;