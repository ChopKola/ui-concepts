import AdministratorUserLoinPageLayout from "../../modules/auth/user-specific/adminstrator/AdministratorUserLoinPageLayout";
import AdministratorUserDashboardPageLayout from "../../pages/user-specific/administrator/AdministratorUserDashboardPageLayout";

const administratorUserRoutes = [
    {
        path: '',
        name: 'administrator-dashboard',
        element: <AdministratorUserDashboardPageLayout />
    },{
        path: 'login',
        name: 'administrator-login',
        element: <AdministratorUserLoinPageLayout />
    }
]

export default administratorUserRoutes;