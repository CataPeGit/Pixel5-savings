import { Container } from '@mui/material';
import RegisterForm from './registerForm';
import RegisterText from './registerText';


const Register = () => {
    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'row',
                width: '100%',
                height: '100vh'
            }}
        >
            <RegisterText></RegisterText>
            <RegisterForm></RegisterForm>
        </Container>
    );
}

export default Register;