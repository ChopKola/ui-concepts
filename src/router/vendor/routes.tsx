import VendorUserLoinPageLayout from "../../modules/auth/user-specific/vendor/VendorUserLoinPageLayout";
import VendorUserDashboardPageLayout from "../../pages/user-specific/vendor/VendorUserDashboardPageLayout";

const vendorRoutes = [
    {
        path: '',
        name: 'vendor-dashboard',
        element: <VendorUserDashboardPageLayout />
    },{
        path: 'login',
        name: 'vendor-login',
        element: <VendorUserLoinPageLayout />
    }
]

export default vendorRoutes;