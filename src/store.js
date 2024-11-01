import { configureStore, createSlice } from "@reduxjs/toolkit";

const productSlice=createSlice(
    {
        name:"products",
        initialState:{
            veg:[
                {
                    name:"tomato",price:200.5
                },
                {name:"potato",price:100.8},
                {name:"carrot",price:80.8},
                {name:"beetroot",price:120.8},
                {name:"onion",price:100},



            ],
            nonVeg:[
                {name:"fish",price:1000},
                {name:"chicken",price:800},
                {name:"mutton",price:1000.8},
                {name:"egg",price:10},
                
                

            ]
        },
        reducers:{}
    }
)
//  const store=configureStore({
//     reducer:{products:productSlice.reducer,
//         cart:cartSlice.reducer,
//     }
//  })
// export default store

const cartSlice=createSlice({
    name:'cart',
    initialState:[],
    reducers:{
        addToCart:(state,action)=>{
            const status=state.find(item=>item.name===action.payload.name);
            if(status){
                status.quantity+=1;
            }
            else{
                state.push({...action.payload,quantity:1});
            }
         
            },
            increament:(state,action) =>{
             const item=state.find(item=>item.name===action.payload.name)
                if(item){
                   item.quantity+=1;
               }  
    


        },
        decrement:(state,action)=>{
            const item=state.find(item=>item.name===action.payload.name)
            if(item && item.quantity>1){
                item.quantity-=1;
            }
            else{
                return state.filter(item=>item.name!==action.payload.name);
            }
        },
        remove:(state,action)=>{
            const item=state.find(item=>item.name===action.payload.name)
            if(item){
                return state.filter(item=>item.name!==action.payload.name)
            }

        }
    }

})
export const {addToCart,increament,decrement,remove}=cartSlice.actions
  
const store=configureStore({
    reducer:{products:productSlice.reducer,
        cart:cartSlice.reducer,
    }
 })
export default store

