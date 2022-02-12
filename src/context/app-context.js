import { useState, createContext } from "react";

export const AppContext = createContext({});

export const ContextWrapper = ({ children }) => {
  const [store, setStore] = useState({
    dummyText: "Its working, Bobby!",
    products: [],
  });
  const [actions] = useState({
    fetchProducts: (products) => setStore({ ...store, products: products }),
  });

  return <AppContext.Provider value={{ store, actions }}>{children}</AppContext.Provider>;
};
