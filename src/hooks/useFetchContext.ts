import { useContext } from "react"
import { FetchContext } from "../context"

export const useFetchContext = () => {
  const context = useContext(FetchContext);

  if (!context) {
    throw new Error(
      'useFetchContext must be used within a FetchContext.Provider',
    );
  }

  return context;
}
