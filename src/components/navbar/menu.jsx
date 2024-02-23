import React from 'react';
import Menu from '@mui/material/Menu';
import styles from "./menu.module.css"
import { Divider } from '@mui/material';
import { menuItems } from '../../data/navbarItesm';
import user from "../../assets/user.png";

function MenuPopover({ anchor, open, handleClose }) {
    return (
        <Menu
            id="menu"
            anchorEl={anchor}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <div className={styles.container}>
                <div className={styles.header}>
                    <img src={user} alt="user" />
                    <div className={styles.userInfo}>
                        <h4>Nitesh Pandey</h4>
                        <span>nitesh123@gmail.com</span>
                    </div>
                </div>
                <Divider />
                <div className={styles.menuItems}>
                    {
                        menuItems.map((item) => (
                            <div key={item.id}>
                                <span>{item.title}</span>
                            </div>
                        ))
                    }
                </div>
                <Divider />
                <div>
                    <span>Sign Out</span>
                </div>
            </div>
        </Menu>
    )
}

export default MenuPopover