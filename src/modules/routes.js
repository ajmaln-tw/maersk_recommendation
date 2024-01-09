import React from "react";
import App from "../App";
import { RootBoundary } from "../common/components";
import { PrivateRoute } from "./common/protected-route/protectedRoute";
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
                    path: "analysis",
                    element:
                        <PrivateRoute>
                            <VendorRecommendation />
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
