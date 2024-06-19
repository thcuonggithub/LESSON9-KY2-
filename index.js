import { createContext } from "react";

const initStore = {
    pokData: [],
    setPokData: () => { },
};

const Store = createContext(initStore);

export default Store;
