import { createBrowserRouter } from "react-router-dom";

// Common Application Layout Components
import ForbiddenRequest from "../components/common-layout/ForbiddenRequest";
import NotFoundResource from "../components/common-layout/NotFoundResource";
import ServerError from "../components/common-layout/ServerError";

// Application routes
import publicFacingRoutes from './public/routes';
import vendorRoutes from "./vendor/routes";
import administratorUserRoutes from "./administrator/routes";
import appUserRoutes from "./app-user/routes";

// Application Layout Components
import ChopkolaBackOfficeManagementApplicationLayout from "../apps/ChopkolaBackOfficeManagementApplicationLayout";
import ChopkolaPublicFacingApplicationLayout from "../apps/ChopkolaPublicFacingApplicationLayout";
import ChopkolaUserApplicationLayout from "../apps/ChopkolaUserApplicationLayout";
import ChopkolaVendorApplicationLayout from "../apps/ChopkolaVendorApplicationLayout";

const useAppRouter = () => {
    return createBrowserRouter(
        [
            {
              path: '',
              element: <ChopkolaPublicFacingApplicationLayout />,
              children: publicFacingRoutes
            },
            {
              path: 'back-office/',
              element: <ChopkolaBackOfficeManagementApplicationLayout />,
              children: administratorUserRoutes
            },
            {
              path: 'vendor/',
              element: <ChopkolaVendorApplicationLayout />,
              children: vendorRoutes
            },
            {
              path: 'client/',
              element: <ChopkolaUserApplicationLayout />,
              children: appUserRoutes
            },
            {
              path: 'forbidden-request',
              element: <ForbiddenRequest />
            },
            {
              path: 'server-error',
              element: <ServerError />
            },
            {
              path: '*',
              element: <NotFoundResource />
            }
        ],

        // 👇 IMPORTANT: this solves GitHub Pages routing
        {
            basename: "/ui-concepts"
        }
    );
};

export default useAppRouter;