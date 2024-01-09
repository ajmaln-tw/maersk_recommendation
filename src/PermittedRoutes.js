

import React, { Suspense } from "react";
import { Outlet, RouterProvider, createHashRouter } from "react-router-dom";
import { routes } from "./modules/routes";
import { Components } from "./common/components";

const { Typography } = Components;

const PermittedRoutes = () => {

    return (
        <Suspense fallback={<Typography variant="h5"> Loading</Typography>}>
            <RouterProvider router={createHashRouter(routes)} />
            <Outlet />
        </Suspense>
    );
};

export default PermittedRoutes;
