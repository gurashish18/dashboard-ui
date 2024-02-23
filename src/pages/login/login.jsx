import React, { useContext, useState } from 'react';
import styles from "./login.module.css"
import logo from "../../assets/logo.png";
import { TextField, InputLabel, OutlinedInput, InputAdornment, IconButton, Button, Divider, FormControl } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { AppContext } from "../../context/AppContext";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Error from '../../components/error/error';


function Login() {
    const { appState } = useContext(AppContext);
    const { darkMode } = appState;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [apiError, setApiError] = useState('');
    const [openApiError, setOpenApiError] = useState(false);
    const [token, setToken] = React.useState(localStorage.getItem('token') || null);
    const navigate = useNavigate();

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenApiError(false);
    };

    const handleLogin = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        let hasError = false;
        if (!emailRegex.test(email)) {
            setEmailError('Please enter a valid email address');
            hasError = true;
        } else {
            setEmailError('');
        }
        if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters long');
            hasError = true;
        } else {
            setPasswordError('')
        }

        if (!hasError) {
            const req = {
                userName: email,
                password: password
            }

            axios.post("https://localhost:7121/api/Auth/login", req)
                .then(res => {
                    localStorage.setItem("token", res.data.token);
                    navigate('/', { replace: true })
                })
                .catch(err => {
                    if (err.response) {
                        setOpenApiError(true);
                        if (err.response.status === 400) {
                            setApiError('Invalid email or password. Please try again.');
                        } else {
                            setApiError('An error occurred. Please try again later.');
                        }
                    } else {
                        console.error('Error:', err.message);
                    }
                })

        }
    }

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    React.useEffect(() => {
        if (token) {
            navigate('/', { replace: true })
        }
    }, [token, navigate])

    return (
        <div className={styles.container} style={{ backgroundColor: darkMode ? "#171C24" : "#F3F4F9" }}>
            {
                openApiError && <Error message={apiError} open={openApiError} handleClose={handleClose} />
            }
            <div className={styles.loginContainer} style={{ backgroundColor: darkMode ? "#222B36" : "#FFFFFF" }}>
                <div className={styles.header} onClick={() => navigate('/')}>
                    <img src={logo} alt="logo" />
                    <h1>DASHBOARD</h1>
                </div>
                <div className={styles.mid}>
                    <h1 style={{ color: darkMode ? "#FFFFFF" : "#121F43" }}>Hi, Welcome Back</h1>
                    <h4 style={{ color: darkMode ? "#FFFFFF" : "#697586" }}>Enter your credentials to continue</h4>
                </div>
                <div className={styles.form}>
                    <div className={styles.row}>
                        <TextField id="email" label="Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)} />
                        {emailError && <span className={styles.error}>{emailError}</span>}
                    </div>
                    <div className={styles.row}>
                        <FormControl variant="outlined">
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <OutlinedInput
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={() => setShowPassword(!showPassword)}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl>
                        {passwordError && <span className={styles.error}>{passwordError}</span>}
                    </div>
                    <div className={styles.forgotPassword}>
                        <span>Forgot Password?</span>
                    </div>
                </div>
                <div className={styles.footer}>
                    <Button variant='contained' sx={{ textTransform: "inherit" }} onClick={handleLogin}>Sign In</Button>
                    <Divider />
                    <span><Link to="/signup" style={{ textDecoration: 'none', color: 'inherit' }}>Don't have an account?</Link></span>
                </div>
            </div>
        </div>
    )
}

export default Login