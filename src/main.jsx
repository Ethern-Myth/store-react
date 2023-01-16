import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "@styles/index.scss";

<<<<<<< HEAD
=======
import { BrowserRouter } from "react-router-dom";
>>>>>>> 7b828f335f90d231b233ccf5a76ae8fc2cddb9d9
import { CartProvider } from "react-use-cart";

import { QueryClient, QueryClientProvider } from "react-query";
import { ToastContainer } from "react-toastify";
import { Authorize } from "@auth/Authorize";
import { Interceptor } from "./middleware/Interceptor";

<<<<<<< HEAD
import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient();

Interceptor();

ReactDOM.createRoot(document.getElementById('root')).render(
  <Authorize>
    <CartProvider>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <App />
      </QueryClientProvider>
    </CartProvider>
  </Authorize>
)
=======
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Authorize } from "@auth/Authorize";

const appTheme = createTheme(AppTheme);

import { Interceptor } from "./middleware/Interceptor";
Interceptor();

ReactDOM.createRoot(document.getElementById("root")).render(
	<Authorize>
		<ThemeProvider theme={appTheme}>
			<CartProvider>
				<BrowserRouter>
					<QueryClientProvider client={queryClient}>
						<ToastContainer />
						<App />
					</QueryClientProvider>
				</BrowserRouter>
			</CartProvider>
		</ThemeProvider>
	</Authorize >
);
>>>>>>> 7b828f335f90d231b233ccf5a76ae8fc2cddb9d9
