import { createContext } from "react";
import { productsArray, getProductData } from "./productsStore";
import { useState } from "react";

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotleCost: () => {}
});

export function CartProvider({children}) {
    const [cartProducts, setCartProducts] = useState([]);
    
    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;
        if (quantity === undefined) {
            return 0;
        }

        return quantity;
    }

    function addOneToCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity === 0) {
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        } else {
            setCartProducts(
                cartProducts.map(
                    product => 
                    product.id === id
                    ? {...product, quantity: product.quantity + 1}
                    : product
                )
            )
        }
    }

    function deleteFromCart(id) {
        setCartProducts(
            cartProducts =>
            cartProducts.filter(currentProduct => {
                return currentProduct.id != id;
            })
        )
    }

    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity === 1) {
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map(
                    product => 
                    product.id === id
                    ? {...product, quantity: product.quantity - 1}
                    : product
                )
            )
        }
    }

    function getTotleCost() {
        let totleCost = 0;
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id);
            totleCost += productData.price * cartItem.quantity;
        });

        return totleCost;
    }

    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotleCost
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
