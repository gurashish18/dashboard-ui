import React, { useContext } from 'react'
import styles from "./dashboardCard.module.css"
import { AppContext } from '../../context/AppContext'

function DashboardCard({ icon, primaryColor, secondaryColor, title, value }) {
    const { appState } = useContext(AppContext);
    const { darkMode } = appState;
    return (
        <div className={styles.container} style={{ backgroundColor: darkMode ? "#222B36" : "#FFFFFF" }}>
            <div className={styles.iconContainer} style={{ backgroundColor: `${secondaryColor}` }}>
                <div className={styles.icon}>
                    {icon}
                </div>
            </div>
            <div className={styles.content}>
                <h4 className={styles.title} style={{ color: darkMode ? "#FFFFFF" : "#000000" }}>{title}</h4>
                <h2 className={styles.value} style={{ color: `${primaryColor}` }}>{value}</h2>
            </div>
        </div>
    )
}

export default DashboardCard