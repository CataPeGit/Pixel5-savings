import { Box } from "@mui/material";

const RegisterText = () => {
    return (
        <Box
        sx={{
            maxWidth: 'xs',
            marginTop: 8,
            marginRight: 0,
            alignItems: 'left',
        }}
    >

        <h1>Welcome to APPNAME</h1>
        <p>
         Motto goes here ???. Lorem ipsum. Ut enim ad minim =officia deserunt mollit anim id est laborum.
        </p>
        <ul>
            Reasons you might want to sign up:
            <li> 1 way this app can help you manage your money</li>
            <li> another reason why I want to sign up </li>
            <li> 1 way this app can help you manage your money </li>
        </ul>

    </Box>
    );
}

export default RegisterText;