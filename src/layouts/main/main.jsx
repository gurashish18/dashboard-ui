import React, { useContext } from 'react';
import styles from "./main.module.css"
import Sidebar from '../../components/sidebar/sidebar';
import Navbar from '../../components/navbar/navbar';
import { AppContext } from '../../context/AppContext';

function MainLayout({ children }) {
    const { appState } = useContext(AppContext);
    const { darkMode } = appState;
    return (
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.workstation} style={{ backgroundColor: darkMode ? "#171C24" : "#F3F4F9" }}>
                <Navbar />
                <div className={styles.main}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default MainLayout