import React from 'react'
import { Box, IconButton, useTheme } from "@mui/material";
import { Sidebar as sideBar, Menu, MenuItem, useProSidebar } from "react-pro-sidebar";

function Sidebar() {
    return (
        <sideBar>
            <Menu>
                <MenuItem>Dashboard</MenuItem>
                <MenuItem>Customers</MenuItem>
                <MenuItem>Roles</MenuItem>
                <MenuItem>Role Types</MenuItem>
                <MenuItem>Products</MenuItem>
                <MenuItem>Product Types</MenuItem>
            </Menu>
        </sideBar>
    )
}

export default React.memo(Sidebar);