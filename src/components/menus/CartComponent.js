

import React, { useEffect } from "react";
import useCustomLogin from "../../hooks/useCustomLogin";
import { useDispatch, useSelector } from "react-redux";
import { getCartItemsAsync } from "../../slices/cartSlice";
import useCustomCart from "../../hooks/useCustomCart";
import CartItemComponent from "../common/cart/CartItemComponent";
import { useRecoilValue } from "recoil";
import { cartTotalState } from "../../atoms/cartState";

function CartComponent(){

    const {isLogin,loginState} = useCustomLogin()

    const {cartItems, changeCart} = useCustomCart()

    const totalValue = useRecoilValue(cartTotalState)
    
    return (
        <div className="w-full">

            {isLogin ?
                <div className="flex flex-col">
                    <div className="font-extrabold text-2xl w-4/5">
                        {loginState.nickname}'s cart
                    </div>
                    <div className="bg-orange-600 text-center text-white font-bold w-1/5 rounded-full m-1">
                        {cartItems.length}
                    </div>
                    <div>
                            <ul>
                                {cartItems.map(item => <li><CartItemComponent {...item} 
                                                                               key={item.cino}
                                                                               changeCart={changeCart}
                                                                               email = {loginState.email} 
                                                                               /></li>)}
                            </ul>
                    </div>
                </div>
                :
                <div></div>}
                
        </div>
    );
}

export default CartComponent;