import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@styles/index.scss";
import { ConfigProvider, theme } from "antd";
import "antd/dist/reset.css";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "react-use-cart";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppTheme from "./themes/AppTheme";

import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Authorize } from "@auth/Authorize";

const appTheme = createTheme(AppTheme);

import { Interceptor } from "./middleware/Interceptor";
Interceptor();

ReactDOM.createRoot(document.getElementById("root")).render(
	<Authorize>
		<ThemeProvider theme={appTheme}>
			<ConfigProvider theme={{ algorithm: theme.compactAlgorithm }}>
				<CartProvider>
					<BrowserRouter>
						<QueryClientProvider client={queryClient}>
							<ToastContainer />
							<App />
						</QueryClientProvider>
					</BrowserRouter>
				</CartProvider>
			</ConfigProvider>
		</ThemeProvider>
	</Authorize>
);
