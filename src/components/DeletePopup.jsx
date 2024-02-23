import React, { useContext } from 'react';
import { Typography, Box, Modal, Button } from '@mui/material';
import axios from 'axios';
import { AppContext } from '../context/AppContext';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    gap: "15px"
};

function DeletePopup({ open, handleClose, id }) {
    const { appState, appDispatch } = useContext(AppContext);
    const deleteProduct = async () => {
        const res = await axios.delete(`https://localhost:7121/api/Product?id=${id}`);
        appDispatch({ type: "DELETE_PRODUCT", payload: res.data });
        handleClose();
    }

    const closePopup = () => {
        handleClose();
    }
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography>Do you want to delete this product?</Typography>
                <div style={{ display: "flex", gap: "15px" }}>
                    <Button variant='contained' color='primary' onClick={() => deleteProduct()}>Yes</Button>
                    <Button variant='contained' color='secondary' onClick={() => closePopup()}>No</Button>
                </div>

            </Box>
        </Modal>
    )
}

export default DeletePopup