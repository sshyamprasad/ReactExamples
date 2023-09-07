import { createContext, useState } from "react";

export const PaymentContext = createContext();

export const PaymentProvider = (props)=> {
    const [paymentProvidersList] = useState({payments: ["Pay TM", "Phone Pe", "Google Pay"]});
    return (
        <PaymentContext.Provider value={paymentProvidersList}>{props.children}</PaymentContext.Provider>
    );
}