import React, { useEffect, useState, useContext, createRef } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button'
import axios from "axios"
import { AppContext } from '../context/AppContext';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';


const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

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

function ProductModal({ open, handleClose }) {
    const { appState, appDispatch } = useContext(AppContext);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [inStock, setInStock] = useState(true);
    const [image, setImage] = useState();
    const [imageURL, setImageURL] = useState();

    useEffect(() => {
        if (!image) return;
        setImageURL(URL.createObjectURL(image));
    }, [image])

    function onImageChange(e) {
        setImage(e.target.files[0]);
    }

    const addProduct = async (handleClose) => {
        const req = {
            name: name,
            description: description,
            price: price,
            inStock: inStock,
            image: imageURL
        }

        const res = await axios.post("https://localhost:7121/api/Product", req);
        appDispatch({ type: "ADD_PRODUCT", payload: res.data });
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
                <Typography>Enter Product Details</Typography>
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
                <Button
                    component="label"
                    role={undefined}
                    variant="contained"
                    tabIndex={-1}
                    color='secondary'
                    startIcon={<CloudUploadIcon />}
                >
                    Upload file
                    <VisuallyHiddenInput type="file" accept='image/*' onChange={onImageChange} />
                </Button>
                <div style={{ display: 'flex', gap: '10px' }}>
                    {
                        image && <img src={imageURL} alt="image" style={{ height: "50px", width: "50px" }} />
                    }
                </div>
                <Button variant='contained' onClick={() => addProduct(handleClose)}>Submit</Button>
            </Box>
        </Modal>
    )
}

export default ProductModal