import React, { createContext, useState } from "react";

export const PaceContext = createContext();

export const PaceContextProvider = (props) => {
  const [pace, setPace] = useState(1)

  return (
    <PaceContext.Provider
      value={{
        pace, setPace
      }}
    >
      {props.children}
    </PaceContext.Provider>
  )
}