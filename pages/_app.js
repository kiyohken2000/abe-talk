import * as React from "react";
import { NavigationContextProvider } from "@/contexts/NavigationContext";

function MyApp({ Component, pageProps }) {
  return (
    <NavigationContextProvider>
      <Component {...pageProps} />
    </NavigationContextProvider>
  );
}

export default MyApp;