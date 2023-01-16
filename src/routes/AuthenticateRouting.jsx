import React from "react";
<<<<<<< HEAD
import { Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AppTheme from "../themes/AppTheme";

const theme = createTheme(AppTheme);

function AuthenticateRouting() {
    return (
        <ThemeProvider theme={theme}>
            <Outlet />
        </ThemeProvider>
=======
import Layout from "@components/Layout/Layout";
import { Outlet } from "react-router-dom";
import { ConfigProvider, theme } from "antd";

function AuthenticateRouting() {
    return (
        <ConfigProvider theme={{ algorithm: theme.compactAlgorithm }}>
            <Layout>
                <Outlet />
            </Layout>
        </ConfigProvider>
>>>>>>> 7b828f335f90d231b233ccf5a76ae8fc2cddb9d9
    );
}

export default AuthenticateRouting;