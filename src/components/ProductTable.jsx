import React, { useEffect, useState, useContext } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from "axios"
import { AppContext } from '../context/AppContext';
import Button from '@mui/material/Button';
import BuildIcon from '@mui/icons-material/Build';
import DeleteIcon from '@mui/icons-material/Delete';
import DeletePopup from './DeletePopup';
import UpdatePopup from './UpdatePopup';
import EditIcon from '@mui/icons-material/Edit';


function ProductTable() {
    const [openDeletePopup, setopenDeletePopup] = useState(false);
    const [openUpdatePopup, setopenUpdatePopup] = useState(false);
    const [selectedRowId, setSelectedRowId] = useState();
    const [product, setProduct] = useState({});
    const { appState, appDispatch } = useContext(AppContext);
    const { products } = appState;

    const closeDeletePopup = () => {
        setopenDeletePopup(false);
    }

    const closeUpdatePopup = () => {
        setopenUpdatePopup(false);
    }

    const getProductById = async (id) => {
        const product = await axios.get(`https://localhost:7121/api/Product/${id}`);
        setProduct(product.data);
    }



    const renderUpdateButton = (params) => {
        return (
            <>
                <Button
                    variant="contained"
                    style={{ backgroundColor: "#4CAF50", width: "130px" }}
                    onClick={async () => {
                        await getProductById(params.id)
                        setopenUpdatePopup(true)
                    }}
                >
                    Edit
                </Button>
                {
                    openUpdatePopup && <UpdatePopup open={openUpdatePopup} handleClose={closeUpdatePopup} product={product} />
                }
            </>
        )
    }

    const renderDeleteButton = (params) => {
        return (
            <>
                <Button
                    variant="contained"
                    style={{ backgroundColor: "#ff3333", width: "130px" }}
                    onClick={() => {
                        setopenDeletePopup(true);
                        setSelectedRowId(params.id)
                    }}
                >
                    Delete
                </Button>
                {
                    openDeletePopup && <DeletePopup open={openDeletePopup} handleClose={closeDeletePopup} id={selectedRowId} />
                }
            </>
        )
    }

    const renderProductImage = (params) => {
        return (
            <>
                <img src={params.value} style={{ height: "60px", width: "60px" }} alt="product_image" />
            </>
        )
    }

    const renderStatus = (params) => {
        return (
            params.row.inStock ? <span style={{ color: "#27CE88" }}>Available</span> : <span style={{ color: "#FF316F" }}>Out of Stock</span>
        )
    }

    const renderPrice = (params) => {
        return (
            <span>${params.row.price}</span>
        )
    }

    const columns = [
        { field: 'image', headerName: "", width: 70, renderCell: renderProductImage, disableClickEventBubbling: true, },
        { field: 'name', headerName: 'Name', width: 130 },
        { field: 'description', headerName: 'Description', width: 200 },
        {
            field: 'price',
            headerName: 'Price',
            renderCell: renderPrice,
            width: 130,
        },
        {
            field: 'status',
            headerName: 'Status',
            renderCell: renderStatus,
            width: 130,
        },
        {
            field: 'edit',
            headerName: "",
            width: 130,
            renderCell: renderUpdateButton,
            disableClickEventBubbling: true,
        },
        {
            field: 'delete',
            headerName: "",
            width: 130,
            renderCell: renderDeleteButton,
            disableClickEventBubbling: true,
        }
    ];


    useEffect(() => {
        const getData = async () => {
            const res = await axios.get("https://localhost:7121/api/Product");
            appDispatch({ type: "GET_PRODUCTS", payload: res.data });
        }
        getData();
    }, [])


    return (
        <div style={{ height: 400, width: '100%', backgroundColor: "#FFFFFF", borderRadius: "8px" }}>
            <DataGrid
                rows={products}
                rowHeight={70}
                columns={columns}
                disableColumnFilter={true}
                disableColumnMenu={true}
                disableDensitySelector={true}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
            />
        </div>
    )
}

export default ProductTable