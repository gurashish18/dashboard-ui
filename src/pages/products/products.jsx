import React from 'react';
import styles from "./products.module.css";
import { Button } from '@mui/material';
import ProductTable from '../../components/ProductTable';
import WorkIcon from '@mui/icons-material/Work';

function Products() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.iconHeader}>
                    <WorkIcon />
                    <h4>Products</h4>
                </div>
                <Button variant="contained">Add Product</Button>
            </div>
            <div className={styles.productTable}>
                <ProductTable />
            </div>
        </div>
    )
}

export default Products