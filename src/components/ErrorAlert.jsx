import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

function ErrorAlert({ message }) {
    return (
        <Stack sx={{ width: '100%', position: "fixed", bottom: "20px", left: "20px", zIndex: 1000 }} spacing={2}>
            <Alert severity="warning" onClose={() => { }}>
                {message}
            </Alert>
        </Stack>
    )
}

export default ErrorAlert