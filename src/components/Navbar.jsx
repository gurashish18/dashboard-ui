import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';

export default function ButtonAppBar() {
    const navigate = useNavigate();
    const [token, setToken] = React.useState(localStorage.getItem('token') || null);
    const [Authenticated, setAuthenticated] = React.useState(false);

    const handleLogout = () => {
        localStorage.removeItem('token')
        setToken(null)
    }

    React.useEffect(() => {
        if (token != null) {
            setAuthenticated(true);
        } else {
            setAuthenticated(false);
        }
    }, [token])

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Admin Portal
                    </Typography>
                    {
                        !Authenticated && <Button color="inherit" onClick={() => navigate("/signup")}>Sign Up</Button>
                    }
                    {
                        !Authenticated && <Button color="inherit" onClick={() => navigate("/signin")}>Sign In</Button>
                    }
                    {
                        Authenticated && <LogoutIcon onClick={() => handleLogout()} />
                    }
                </Toolbar>
            </AppBar>
        </Box >
    );
}