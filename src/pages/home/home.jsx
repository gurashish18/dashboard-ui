import React from 'react';
import styles from "./home.module.css"
import DashboardCard from '../../components/cards/dashboardCard';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import GroupIcon from '@mui/icons-material/Group';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SalesChart from '../../components/charts/sales';
import CategorySalesChart from '../../components/charts/salesCategory';
import ProductTable from '../../components/ProductTable';


function Home() {
    return (
        <>
            <div className={styles.cardsContainer}>
                <DashboardCard icon={<TrendingUpIcon style={{ fontSize: "30px", color: "#8E8FFF" }} />} primaryColor={"#8E8FFF"} secondaryColor={"#F3F3FF"} title={"Total Sales"} value={"$5667"} />
                <DashboardCard icon={<ShoppingCartIcon style={{ fontSize: "30px", color: "#FFC675" }} />} primaryColor={"#FFC675"} secondaryColor={"#FFF9F1"} title={"Today's Orders"} value={"360"} />
                <DashboardCard icon={<GroupIcon style={{ fontSize: "30px", color: "#2499EF" }} />} primaryColor={"#2499EF"} secondaryColor={"#E8F5FE"} title={"Today's Users"} value={"2,300"} />
            </div>
            <div className={styles.salesChartConatiner}>
                <div className='salesChart'>
                    <h4>Daily Sales</h4>
                    <SalesChart />
                </div>
                <div className={styles.categorySalesChart}>
                    <h4>Sales by category</h4>
                    <CategorySalesChart />
                </div>
            </div>
            <div className={styles.productsTable}>
                <ProductTable />
            </div>
        </>
    )
}

export default Home