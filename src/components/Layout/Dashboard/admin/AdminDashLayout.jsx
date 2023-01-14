import React from "react";
const Sidebar = React.lazy(() => import("@components/Layout/Dashboard/admin/Sidebar/Sidebar"));
const Topbar = React.lazy(() => import("@components/Layout/Dashboard/admin/Topbar/Topbar"));

function AdminDashLayout({ children }) {
	return (
		<div style={{ display: "flex", height: "100%" }}>
			<Sidebar />
			<main>
				<Topbar />
				{children}
			</main>
		</div>
	);
}

export default React.memo(AdminDashLayout);
