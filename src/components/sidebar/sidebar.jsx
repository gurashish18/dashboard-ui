import React, { useContext } from 'react'
import { sidebarItems } from '../../data/sidebarItems'
import styles from "./sidebar.module.css"
import logo from "../../assets/logo.png";
import { AppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';
import LogoutIcon from '@mui/icons-material/Logout';
import LockOpenIcon from '@mui/icons-material/LockOpen';

function Sidebar() {
    const [token, setToken] = React.useState(localStorage.getItem('token') || null);
    const [Authenticated, setAuthenticated] = React.useState(false);
    const { appState } = useContext(AppContext);
    const { darkMode } = appState;
    const navigate = useNavigate();


    React.useEffect(() => {
        if (token != null) {
            setAuthenticated(true);
        } else {
            setAuthenticated(false);
        }
    }, [token])
    return (
        <div className={styles.container} style={{ backgroundColor: darkMode ? "#222B36" : "#FFFFFF" }}>
            <div className={styles.logo} onClick={() => navigate('/')}>
                <img src={logo} alt="logo" />
                <h1 style={{ color: darkMode ? "#8096AC" : "#000000" }}>DASHBOARD</h1>
            </div>
            <div className={styles.navItems}>
                {
                    sidebarItems.map((item) => (
                        <div key={item.id} className={styles.navItem} style={{ color: darkMode ? "#8096AC" : "#414F5C" }} onClick={() => navigate(`${item.path}`)}>
                            {item.icon}
                            <span className={styles.title} >{item.title}</span>
                        </div>
                    ))
                }
                {
                    !Authenticated && (
                        <div className={styles.navItem} style={{ color: darkMode ? "#8096AC" : "#414F5C" }} onClick={() => navigate('/signup')}>
                            <LockOpenIcon style={{ fontSize: "18px" }} />
                            <span className={styles.title}>Sign up</span>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Sidebar