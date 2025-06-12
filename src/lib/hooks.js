import { useContext } from "react";
import { ItemContext } from "../contexts/ItemContextProvider";

export function useItemsContext(){
    const context = useContext(ItemContext);
    return context
}