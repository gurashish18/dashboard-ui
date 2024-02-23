import InventoryIcon from '@mui/icons-material/Inventory';
import GroupIcon from '@mui/icons-material/Group';
import ViewListIcon from '@mui/icons-material/ViewList';
import CategoryIcon from '@mui/icons-material/Category';

export const sidebarItems = [
    {
        id: 1,
        title: "Products",
        path: "/products",
        icon: <InventoryIcon style={{ fontSize: "18px" }} />
    },
    {
        id: 2,
        title: "Customers",
        path: "/customers",
        icon: <GroupIcon style={{ fontSize: "18px" }} />
    },
    {
        id: 3,
        title: "Orders",
        path: "/orders",
        icon: <ViewListIcon style={{ fontSize: "18px" }} />
    },
    {
        id: 4,
        title: "Categories",
        path: "/categories",
        icon: <CategoryIcon style={{ fontSize: "18px" }} />
    },

]