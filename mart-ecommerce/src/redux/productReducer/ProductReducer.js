const intlState = {
    cartData:[],
    products:[],
};

export const productReducer = (state = intlState, action) =>{
    console.log(action.payload);
    
    switch(action.type){
        case 'ADD_TO_CART':
            let existingItem = state.cartData.find((item)=>{
                return item.id === action.payload.id;
                })

                if(existingItem){
                    existingItem.quantity = existingItem.quantity+1
                }else{
                    return {
                        ...state,cartData:[...state.cartData,action.payload]
                    };
                }
   
            case 'REMOVE_FROM_CART':
                    const filterProduct = state.cartData.filter((cartItem)=>{
                       return cartItem.id !== action.payload;
    })
                    return {
                        ...state,cartData:filterProduct
                    };
            
            case 'SET_INCREMENT':
                    let increasedProduct = state.cartData.map((item)=>{
                        if(item.id === action.payload){
                            let incQuantity = item.quantity+1;
                                return{
                                    ...item, quantity:incQuantity,
                                }    
                        }else{
                            return item
                        }
                    });
                    return{
                        ...state, cartData:increasedProduct,
                    }

            case 'SET_DECREMENT':
                   let decreasedProduct = state.cartData.map((item)=>{
                        if(item.id === action.payload){
                            let decQuantity = item.quantity>1 ? item.quantity-1 : item.quantity = 0

                                return{
                                    ...item, quantity:decQuantity,
                                }    
                        }else{
                            return item
                        }
                    });
                    return{
                        ...state, cartData:decreasedProduct
                    }

                default:
                    return state;
    }
};
