import { Suspense, lazy } from "react"

const Loading = <div>Loading...</div>
const Payment = lazy(()=> import("../pages/payment/PaymentPage"))

const paymentRouter = () => {
    return [
        {
            path: 'payment',
            element: <Suspense fallback={Loading}><Payment/></Suspense>
        }
    ]
}

export default paymentRouter