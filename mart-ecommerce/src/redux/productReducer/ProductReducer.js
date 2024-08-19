const intlState = {
    cartData:[],
    products:[],
};

export const productReducer = (state = intlState, action) =>{
    switch(action.type){
        case 'ADD_TO_CART':
            let existingItem = state.cartData.find((item)=>{
                return item.id === action.payload.id;
                })
                if(existingItem){
                    
                    let simData = existingItem
                    console.log('exit item= '+simData);
                    
                 return {
                    ...state,cartData:[...state.cartData,action.payload]
                 }
                
                }else{
                    return {
                        ...state,cartData:[...state.cartData,action.payload]
                    };
                }

                // return {
                //     ...state,cartData:[...state.cartData,action.payload]
                // };
            case 'REMOVE_FROM_CART':
                    const filterProduct = state.cartData.filter((cartItems)=>{
                        return cartItems.id !== action.payload;
                    })
                    return {
                        ...state,cartData:filterProduct
                    }
                default:
                    return state;
    }
};