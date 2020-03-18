import React from "react";

const ProductContext = React.createContext();

const localState = JSON.parse(localStorage.getItem("products"));
  
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
                console.log('product.id', product.id)
                console.log('action.payload.id', action.payload)
                if(product.id === action.payload.id){
                    product.name = action.payload.name;
                    product.description = action.payload.description;
                    product.price = action.payload.price;
                    product.inventoryDate = action.payload.inventoryDate;
                    console.log('edit product', product)
                }
                console.log('product', product)
                return product;
            })
            localStorage.setItem("products", JSON.stringify(edited_state))
            return Object.assign({}, edited_state);
        case  "all":
            return Object.assign({}, state, action.payload)
    }
};

const ProductContextProvider = (props) => {
    // [A]
    let [state, dispatch] = React.useReducer(reducer, {});
    let value = { state, dispatch };


    // [B]
    return (
        <ProductContext.Provider value={value}>{props.children}</ProductContext.Provider>
    );
}


// [C]
export { ProductContext, ProductContextProvider };