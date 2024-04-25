import Payment from "../../components/payment/Payment";

function PaymentPage(props){
    return (  
        <div className="p-4 w-full bg-white">
            <div className="text-3xl font-extrabold">
                Payment
            </div>

            <Payment/>
        </div>
    );
}
 
export default PaymentPage;