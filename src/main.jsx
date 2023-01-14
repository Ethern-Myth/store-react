import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "@styles/index.scss";
import { ConfigProvider, theme } from "antd";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "react-use-cart";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppTheme from "./themes/AppTheme";

import { QueryClient, QueryClientProvider } from "react-query";
const queryClient = new QueryClient();

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ProSidebarProvider } from 'react-pro-sidebar';

import { Authorize } from "@auth/Authorize";

const appTheme = createTheme(AppTheme);

import { Interceptor } from "./middleware/Interceptor";
Interceptor();

ReactDOM.createRoot(document.getElementById("root")).render(
	<Authorize>
		<ConfigProvider theme={{ algorithm: theme.compactAlgorithm }}>
			<ThemeProvider theme={appTheme}>
				<CartProvider>
					<BrowserRouter>
						<QueryClientProvider client={queryClient}>
							<ProSidebarProvider>
								<ToastContainer />
								<App />
							</ProSidebarProvider>
						</QueryClientProvider>
					</BrowserRouter>
				</CartProvider>
			</ThemeProvider>
		</ConfigProvider>
	</Authorize >
);
