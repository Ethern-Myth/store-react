import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from '@auth/Authorize';

const ClientDashLayout = React.lazy(() => import("@components/Layout/Dashboard/clients/ClientDashLayout"));
const AdminDashLayout = React.lazy(() => import("@components/Layout/Dashboard/admin/AdminDashLayout"));

function PrivateRouting({ allowedRole }) {
    const auth = useAuth();
    const loggedIn = auth.getIsLoggedIn();
    var role = auth.getRole();

    const allowAdmin = role == "Admin" ? true : false;

    const RouteOnRole = allowedRole == role && allowAdmin ? (<AdminDashLayout>
        <Outlet />
    </AdminDashLayout>) : (<ClientDashLayout>
        <Outlet />
    </ClientDashLayout>)

    function CheckRole() {
        if (role !== allowedRole && allowAdmin) {
            role = allowedRole;
        }
        switch (allowedRole) {
            case role:
                return true;
            default:
                return false;
        }
    }

    return CheckRole() && loggedIn ?
        RouteOnRole
        : (
            <Navigate to="/login" />
        );
}

export default PrivateRouting; 