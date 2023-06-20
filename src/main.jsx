import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthenticationContext from "./Context/AuthenticationContext.jsx";

// React Query
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthenticationContext>
        <App />
      </AuthenticationContext>
    </QueryClientProvider>
  </React.StrictMode>
);
