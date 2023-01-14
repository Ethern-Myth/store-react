import React from 'react'
import MenuItem from "@mui/material/MenuItem";
import LogoutIcon from "@mui/icons-material/Logout";
import { useAuth } from '@auth/Authorize';

function LogoutButton() {
    const auth = useAuth();
    return (
        <div>
            <MenuItem
                onClick={() => {
                    auth.logout();
                }}
                disableRipple
            >
                <LogoutIcon />
                Logout
            </MenuItem>
        </div>
    );
}

export default React.memo(LogoutButton);