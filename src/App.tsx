import React, { useEffect, useState } from "react";
import GlobalStyles from "./styles/GlobalStyles";
import Router from "./shared/Router";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
