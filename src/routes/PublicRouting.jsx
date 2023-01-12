import React from "react";
import Layout from "@components/Layout/Layout";
import { Outlet } from "react-router-dom";

function PublicRouting() {
	return (
		<Layout>
			<Outlet />
		</Layout>
	);
}

export default PublicRouting;
