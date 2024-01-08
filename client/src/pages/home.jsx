import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';


function Copyright(props) {
return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
    {'Copyright © '}
    <Link color="inherit" href="https://wsu.com/">
        Your Website
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
    </Typography>
);
}

const defaultTheme = createTheme();

export default function SignInSide() {
    const [backgroundImage, setBackgroundImage] = useState(
        'https://image.dongascience.com/Photo/2020/04/57a1d0642e11e3b047f4ee6dc0b1b88d.jpg'); // 초기 배경 이미지 URL
    const navigate = useNavigate();

    const handleButtonClick = (destinationPath) => {
        setTimeout(() => {
                navigate(destinationPath);
            }, 300); // 1000 ms 후에 실행
        };

    const handleBackgroundClick = () => {
        setBackgroundImage((prevImage) => {
    const imageOptions = [
        'https://pbs.twimg.com/media/FEaC5wLaMAImuLx.jpg',
        'https://image.blip.kr/v1/file/85dabe105c9fa662c08b4cc74d5af6aa'
        ];

    const currentIndex = imageOptions.indexOf(prevImage);
    const nextIndex = (currentIndex + 1) % imageOptions.length;
        return imageOptions[nextIndex];
        });
    };

const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
    email: data.get('email'),
    password: data.get('password'),
    });
};

return (
    <ThemeProvider theme={defaultTheme}>
    <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            cursor: 'pointer',
        }}
        onClick={handleBackgroundClick}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
            sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            }}
        >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Sign in
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
            />
            <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
            />
            <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 1 }}
                onClick={() => handleButtonClick('/homestu')}
            >
                Student
            </Button>
            <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 2, mb: 2 }}
                onClick={() => handleButtonClick('/homepro')}
            >
                Professor
            </Button>
            <Grid container>
                <Grid item xs>
                <Link href="#" variant="body2">
                    Forgot password?
                </Link>
                </Grid>
                <Grid item>
                <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                </Link>
                </Grid>
            </Grid>
            <Copyright sx={{ mt: 5 }} />
            </Box>
        </Box>
        </Grid>
    </Grid>
    </ThemeProvider>
);
}