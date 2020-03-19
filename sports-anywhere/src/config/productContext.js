import React from "react";
import ProductReducer from "./reducer/productReducer";

const ProductContext = React.createContext();

const ProductContextProvider = (props) => {
    let [state, dispatch] = React.useReducer(ProductReducer, {});
    let value = { state, dispatch };

    return (
        <ProductContext.Provider value={value}>{props.children}</ProductContext.Provider>
    );
}

export { ProductContext, ProductContextProvider };