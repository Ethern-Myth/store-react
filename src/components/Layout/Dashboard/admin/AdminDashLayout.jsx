import React from "react";
const PersistentDrawerLeft = React.lazy(() => import("@components/Drawer/Drawer"));

function AdminDashLayout({ children }) {
	return <PersistentDrawerLeft>{children}</PersistentDrawerLeft>;
}

export default React.memo(AdminDashLayout);
