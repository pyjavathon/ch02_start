import { Suspense, lazy } from "react";
import todoRouter from "./todoRouter";
import productsRouter from "./productsRouter";
import memberRouter from "./memberRouter";
import paymentRouter from "./paymentRouter";

const { createBrowserRouter } = require("react-router-dom");

const Loading = <div className={'bg-red-700'}>Loading....</div>
const Main = lazy(()=> import("../pages/MainPage"))

const About = lazy(() => import("../pages/AboutPage"))

const TodoIndex = lazy(() => import("../pages/todo/IndexPage"))

const ProductsIndex = lazy(() => import("../pages/products/IndexPage"))

const Payment = lazy(() => import("../pages/payment/PaymentPage"))

const root = createBrowserRouter([
    {
        path: "",
        element: <Suspense fallback={Loading}><Main/></Suspense>
    },
    {
        path: "about",
        element: <Suspense fallback={Loading}><About/></Suspense>
    },
    {
        path: "todo",
        element: <Suspense fallback={Loading}><TodoIndex/></Suspense>,
        children: todoRouter()
    },
    {
        path: "products",
        element: <Suspense fallback={Loading}><ProductsIndex/></Suspense>,
        children: productsRouter()
    },
    {
        path: "member",
        children: memberRouter()
    },
    {
        path: "payment",
        element: <Suspense fallback={Loading}><Payment/></Suspense>,
        children: paymentRouter()
    }

])

export default root;