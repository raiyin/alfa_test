import { lazy, Suspense } from "react";
import { Route, Routes, useRouteError } from "react-router-dom";
import NotFound from "../Pages/NotFound";
import ProductPage from "../Pages/Product";
import CreateProduct from "../Pages/CreateProduct";
import Loading from "../components/Loading";
import Home from "../Pages/Home";

const Products = lazy(() => import("../Pages/Products"));

const AppRouter = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    < Suspense fallback={< Loading />}>
                        <Home />
                    </Suspense>
                }
                errorElement={< ErrorBoundary />}
            />
            <Route
                path="/products"
                element={
                    < Suspense fallback={< Loading />}>
                        <Products />
                    </Suspense>
                }
                errorElement={< ErrorBoundary />}
            />
            < Route
                path="/products/:productId"
                element={
                    < ProductPage />
                }
                errorElement={< ErrorBoundary />}
            />
            < Route
                path="/create-product"
                element={
                    < CreateProduct />
                }
                errorElement={< ErrorBoundary />}
            />
            < Route path='*' element={< NotFound />} />
        </Routes>
    );
};

function ErrorBoundary() {
    const error = useRouteError();
    console.error(error);
    // Uncaught ReferenceError: path is not defined
    return <div>Dang! </div>;
}

export default AppRouter;
