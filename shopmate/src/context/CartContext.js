import { useContext, createContext, useReducer } from "react";
import { cartReducer } from "../reducer/cartReducer";

const initialState = {
  cartList: [],
  total: "0",
};

const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const formatRupiah = (number) => {
    return number.toLocaleString('id-ID');
  };

  const parseRupiah = (price) => {
    return parseInt(price.replace(/\./g, ""), 10);
  };

  const addToCart = (product) => {
    const updatedCartList = state.cartList.concat(product);
    updatedTotal(updatedCartList);

    dispatch({
      type: "ADD_TO_CART",
      payload: {
        products: updatedCartList,
      },
    });
  };

  const removeFromCart = (product) => {
    const updatedCartList = state.cartList.filter(
      (current) => current.id !== product.id
    );
    updatedTotal(updatedCartList);

    dispatch({
      type: "REMOVE_FROM_CART",
      payload: {
        products: updatedCartList,
      },
    });
  };

  const updatedTotal = (productList) => {
    let total = 0;
    productList.forEach((product) => (total += parseRupiah(product.price)));
    const formattedTotal = formatRupiah(total);

    dispatch({
      type: "UPDATE_TOTAL",
      payload: {
        total: formattedTotal,
      },
    });
  };

  const value = {
    total: state.total,
    cartList: state.cartList,
    addToCart,
    removeFromCart,
    formatRupiah,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
