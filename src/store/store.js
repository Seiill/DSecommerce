import {configureStore} from "@reduxjs/toolkit";
import { cartSlice } from "./mySlice";
export default configureStore({
        reducer:{
            cart: cartSlice.reducer
        }     
    }
)