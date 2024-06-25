import { useContext } from "react";
import { ItemsContext, ItemsContextType } from "../context/ItemsContextProvider";

export function useItemsContext(): ItemsContextType {
  const context = useContext(ItemsContext)
  if (!context) {
    throw new Error(
      "useItemsContext must be used within an ItemsContextProvider"
    )
  }
  return context
}