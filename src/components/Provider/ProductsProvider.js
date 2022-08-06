import React, { useContext, useReducer } from "react";
import { productsData } from "../../db/products";
import _ from "lodash";

const ProductsContext = React.createContext();
const ProductsContextDispatcher = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      product.quantity++;
      const updatedProducts = [...state];
      updatedProducts[index] = product;
      return updatedProducts;
    }
    case "decrement": {
      const index = state.findIndex((item) => item.id === action.id);
      const product = { ...state[index] };
      if (product.quantity === 1) {
        const filteredProducts = state.filter((p) => p.id !== action.id);
        return filteredProducts;
      } else {
        product.quantity--;
        const updatedProducts = [...state];
        updatedProducts[index] = product;
        return updatedProducts;
      }
    }
    case "delete": {
      const filteredProducts = state.filter((p) => p.id !== action.id);
      return filteredProducts;
    }
    case "filter": {
      const value = action.selectedOption.value;
      if (value === "") {
        return productsData;
      } else {
        const filteredProducts = productsData.filter(
          (p) => p.category.toLocaleLowerCase() === value.toLocaleLowerCase()
        );
        return filteredProducts;
      }
    }
    case "sort": {
      const value = action.selectedOption.value;
      const products = [...state];
      if (value === "Highest") {
        return _.orderBy(products, ["price"], "desc");
      } else {
        return _.orderBy(products, ["price"], "asc");
      }
    }
    case "search": {
      const value = action.event.target.value;
      if (value === "") {
        return state;
      } else {
        const filteredProducts = state.filter((p) =>
          p.title.toLocaleLowerCase().includes(value.toLocaleLowerCase())
        );
        return filteredProducts;
      }
    }
    default: {
      return state;
    }
  }
};

const ProductsProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, productsData);

  return (
    <ProductsContext.Provider value={products}>
      <ProductsContextDispatcher.Provider value={dispatch}>
        {children}
      </ProductsContextDispatcher.Provider>
    </ProductsContext.Provider>
  );
};

export default ProductsProvider;

export const useProducts = () => useContext(ProductsContext);
export const useProductsActions = () => useContext(ProductsContextDispatcher);
