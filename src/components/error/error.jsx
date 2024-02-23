import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import { Alert } from '@mui/material';

function Error({ message, open, handleClose }) {
    return (
        <Snackbar
            open={open}
            autoHideDuration={5000}
            onClose={handleClose}
            message={message}
        >
            <Alert
                onClose={handleClose}
                severity="error"
                variant="filled"
                sx={{ width: '100%' }}
            >
                {message}
            </Alert>
        </Snackbar>
    )
}

export default Error