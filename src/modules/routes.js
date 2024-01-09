import React from "react";
import App from "../App";
import { RootBoundary } from "../common/components";
import { PrivateRoute } from "./common/protected-route/protectedRoute";
// import { routes as userManagement } from "../modules/user-management/routes";
import YardsRecommendation from "./yards/components/Index";
import SparesRecommendation from "./spares/components/Index";
import VendorRecommendation from "./vendor/components/IndexHome";
import Home from "./home/components/IndexHome";


const routes =
    [
        {
            path: "/",
            element:
                <PrivateRoute>
                    <App />
                </PrivateRoute>,
            errorElement: <RootBoundary />,
            children: [
                {
                    path: "vendor",
                    element:
                        <PrivateRoute>
                            <VendorRecommendation />
                        </PrivateRoute>,
                    errorElement: <RootBoundary />
                },
                {
                    path: "yard",
                    element:
                        <PrivateRoute>
                            <YardsRecommendation />
                        </PrivateRoute>,
                    errorElement: <RootBoundary />
                },
                {
                    path: "spares",
                    element:
                        <PrivateRoute>
                            <SparesRecommendation />
                        </PrivateRoute>,
                    errorElement: <RootBoundary />
                }
            ]
        },
        {
            path: "token",
            element: <Home />,
            errorElement: <RootBoundary />
        }

    ];

export { routes };
