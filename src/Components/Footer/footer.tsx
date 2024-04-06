import { Box, Typography } from "@mui/material";


const Footer = () => {


    return (
    <>
     <Box sx={{
        backgroundColor: "black",
        color:"#c7bf99",
        width:"100%",
        position: "fixed"
     }}>
        <Typography>
            @copyright 2024
        </Typography>
     </Box>   
    </>
    );
}

export default Footer;

