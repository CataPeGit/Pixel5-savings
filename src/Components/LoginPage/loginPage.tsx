import { useState } from 'react';
import { Button, TextField, Typography, Container, CssBaseline, Avatar } from '@mui/material';
import { useTheme } from '@emotion/react';
import { UseDispatch, useDispatch } from 'react-redux';
import loginWithGoogle from '../../redux/reducers/authentification/actions/login/login';
import store from '../../redux/store/store';

const LoginPage = () => {
    const dispatch = useDispatch<typeof store.dispatch>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const theme = useTheme();

    const handleLogin  = () => {
        dispatch(loginWithGoogle({email,password}))
    }
    return (
        <Container maxWidth="sm">
        <CssBaseline />
            <br/>
            <Typography component="h1" variant="h5">
            Sign in
            </Typography>
            <TextField
                sx={{ background: '#000' }}
                required
                margin="normal"
                fullWidth
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
                sx={{ background: '#000'}}
                required
                margin="normal"
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" fullWidth variant="contained" sx={{ background: '#9d9a0c'}} onClick={handleLogin}>
                Sign In
            </Button>
        </Container>
    );
};

export default LoginPage;
