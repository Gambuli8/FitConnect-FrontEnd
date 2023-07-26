import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPaymentIdUser, getUserId } from "../../redux/Actions/Actions";

const SuccessfulPurchase = () => {
    const dispatch = useDispatch()

    const user = useSelector((state) => state.user);
    const userId = useSelector((state)=> state.userId)
    const allExtraActivities = useSelector((state)=> state.allExtraActivities)

    useEffect(() => {
        dispatch(getUserId(user.uid));
    }, [dispatch, user]);

    let payment;
    if(userId){
        dispatch(getPaymentIdUser(userId.id))
    }
    payment = useSelector((state) => state.paymentIduser)
    
    const clickInvoice = () => {
        window.location.href = payment.invoice;
    };
    console.log(payment);
    return (
    <div className="bg-white mx-auto p-6 rounded-lg shadow-lg max-w-sm mt-10"
        style={{ display: "flex", flexDirection: "column", justifyContent: "center",
        alignItems: "center",}}>        
        <img className="h-24 inline mb-4" src="https://res.cloudinary.com/djqwbu0my/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1689956873/logoFitConnect-removebg-preview_g34p2p.png" alt="Logo" />
        <h2 className="text-3xl font-bold text-green-600 mb-4">COMPRA EXITOSA</h2>
        <p className="text-sm text-gold mb-4">Detalles de la compra:</p>
        <ul>Product:
            {payment?.membership ? (
                <h3 className="font-bold mb-4">Membership {payment.membership.levelMembership}</h3>
            ):(
            <>
                <li className="font-bold mb-4">
                    {payment?.extraActivities?.map((e) => {
                    const extra = allExtraActivities?.filter((a) => a.id == e.extraActivityId);
                    return extra[0].name + " | ";
                    })}
                </li>
            </>
            )}
        </ul>

        <ul className="list-disc ml-6 mb-4">
            <p>Fecha de la compra:</p>
            <p className="font-bold mb-4">{payment.date}</p>
            <p>Total Gastado: <h2 className="text-xl font-bold text-green-700">${payment.priceTotal} USD</h2></p>
        </ul>
        <button onClick={clickInvoice} className="bg-zinc-950 hover:bg-zinc-800 text-white font-bold py-2 px-4 rounded">
            view receipt
        </button>
    </div>
  );
};

export default SuccessfulPurchase;

