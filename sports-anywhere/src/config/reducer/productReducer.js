import * as Types from '../constants/actionTypes';

const ProductReducer = (state, action) => {
    switch (action.type) {
        default:
        case Types.RESET:
            return {};
        case Types.ADD_PRODUCT:
            let add_state = Object.values(state);
            add_state.push(action.payload);
            localStorage.setItem("products", JSON.stringify(add_state))
            return Object.assign({}, add_state);
        case Types.UPDATE_PRODUCT:
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
        case  Types.LIST_ALL:
            return Object.assign({}, state, action.payload)
        case Types.SEARCH_PRODUCT:
            let search_state = state;
            if(action.payload) {
                search_state = Object.values(state).filter((product) => {
                    return product.name.toLowerCase().indexOf(action.payload.toLowerCase()) !== -1;
                })
            }
            return Object.assign({}, search_state);
    }
};

export default ProductReducer 