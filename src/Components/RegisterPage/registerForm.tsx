import { useState } from 'react';
import { Button, TextField, Typography, Container, CssBaseline, Box } from '@mui/material';

const RegisterForm = () => {
    // @ts-ignore

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        // TODO: Call the api and register the user when register is pressed
    };

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [passwordsMatch, setPasswordsMatch] = useState(true)

    const handlePasswordChange = (event: any) => {
        setPassword(event.target.value);
        // Check if passwords match
        setPasswordsMatch(event.target.value === confirmPassword);
    };

    const handleConfirmPasswordChange = (event: any) => {
        setConfirmPassword(event.target.value);
        // Check if passwords match
        setPasswordsMatch(password === event.target.value);
    };

    return (
        <Container component="div" maxWidth='xl'>
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography variant="h5">
                    Create an account
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ marginTop: 1 }}>

                    <TextField
                        sx={{ background: '#000' }}
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        autoComplete="Username"
                        autoFocus
                        color="primary"
                        variant="outlined"
                    />
                    <TextField
                        sx={{ background: '#000' }}
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        color="primary"
                        variant="outlined"
                    />
                    <TextField
                        sx={{ background: '#000' }}
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        color="primary"
                        variant="outlined"
                        onChange={handlePasswordChange}
                    />
                    <TextField
                        sx={{ background: '#000' }}
                        margin="normal"
                        required
                        fullWidth
                        name="confirmPassword"
                        label="Re-enter Password"
                        type="password"
                        id="confirmPassword"
                        autoComplete="current-password"
                        color="primary"
                        variant="outlined"
                        error={!passwordsMatch}
                        onChange={handleConfirmPasswordChange}
                    />
                    <TextField
                        sx={{ background: '#000' }}
                        fullWidth
                        margin="normal"
                        id="phone"
                        label="Phone Number"
                        name="phone"
                        autoComplete="phone"
                        autoFocus
                        color="primary"
                        variant="outlined"
                    />

                    <Button type="submit" fullWidth variant="contained" sx={{ background: '#9d9a0c', marginTop: 2}}>
                        Sign In
                    </Button>
                </Box>
            </Box>
        </Container>
    );

}

export default RegisterForm;