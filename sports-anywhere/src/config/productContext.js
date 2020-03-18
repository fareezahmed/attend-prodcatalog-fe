import React from "react";

const ProductContext = React.createContext();

const reducer = (state, action) => {
    switch (action.type) {
        default:
        case "reset":
            return {};
        case "add":
            let add_state = Object.values(state);
            add_state.push(action.payload);
            localStorage.setItem("products", JSON.stringify(add_state))
            return Object.assign({}, add_state);
        case "edit":
            let edited_state = Object.values(state).map((product) => {
                if(product.id === action.payload.id){
                    product.name = action.payload.name;
                    product.description = action.payload.description;
                    product.price = action.payload.price;
                    product.inventoryDate = action.payload.inventoryDate;
                }
                return product;
            })
            localStorage.setItem("products", JSON.stringify(edited_state))
            return Object.assign({}, edited_state);
        case  "all":
            return Object.assign({}, state, action.payload)
        case "search":
            let search_state = state;
            if(action.payload) {
                search_state = Object.values(state).filter((product) => {
                    return product.name.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1;
                })
            }
            return Object.assign({}, search_state);
    }
};

const ProductContextProvider = (props) => {
    let [state, dispatch] = React.useReducer(reducer, {});
    let value = { state, dispatch };

    return (
        <ProductContext.Provider value={value}>{props.children}</ProductContext.Provider>
    );
}

export { ProductContext, ProductContextProvider };