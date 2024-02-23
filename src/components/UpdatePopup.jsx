import React, { useState, useContext } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button'
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

function UpdatePopup({ open, handleClose, product }) {
    const { appState, appDispatch } = useContext(AppContext);
    const [name, setName] = useState(product.name);
    const [description, setDescription] = useState(product.description);
    const [price, setPrice] = useState(product.price);
    const [inStock, setInStock] = useState(product.inStock);

    const updateProduct = async () => {
        const req = {
            id: product.id,
            name: name,
            description: description,
            price: price,
            inStock: inStock,
            image: product.image
        }
        const res = await axios.put("https://localhost:7121/api/Product", req);
        appDispatch({ type: "UPDATE_PRODUCT", payload: res.data });
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
                <Typography>Update Product Details</Typography>
                <TextField id="name" label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
                <TextField id="description" label="Description" multiline rows={4} value={description} onChange={(e) => setDescription(e.target.value)} />
                <TextField id="price" label="Price" variant='outlined' value={price} onChange={(e) => setPrice(e.target.value)} />
                <TextField
                    id="inStock"
                    select
                    label="In Stock"
                    defaultValue="true"
                    value={inStock}
                    onChange={(e) => setInStock(e.target.value)}
                >
                    <MenuItem key={"true"} value={true}>
                        YES
                    </MenuItem>
                    <MenuItem key={"false"} value={false}>
                        NO
                    </MenuItem>
                </TextField>
                <Button variant='contained' onClick={() => { updateProduct() }}>Submit</Button>
            </Box>
        </Modal>
    )
}

export default UpdatePopup