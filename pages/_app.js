import * as React from "react";
import { NavigationContextProvider } from "@/contexts/NavigationContext";
import { PaceContextProvider } from "@/contexts/PaceContext";

function MyApp({ Component, pageProps }) {
  return (
    <NavigationContextProvider>
      <PaceContextProvider>
        <Component {...pageProps} />
      </PaceContextProvider>
    </NavigationContextProvider>
  );
}

export default MyApp;