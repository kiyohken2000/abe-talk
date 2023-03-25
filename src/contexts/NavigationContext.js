import React, { createContext, useState } from "react";

export const NavigationContext = createContext();

export const NavigationContextProvider = (props) => {
  const [count, setCount] = useState(0)

  return (
    <NavigationContext.Provider
      value={{
        count, setCount
      }}
    >
      {props.children}
    </NavigationContext.Provider>
  )
}