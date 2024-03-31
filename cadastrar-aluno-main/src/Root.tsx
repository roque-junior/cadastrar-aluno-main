import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";


export const Root = () => {
    return (
        <>
            <RouterProvider router={routes} />
        </>



    );
};