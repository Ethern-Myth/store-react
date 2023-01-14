import React from "react";
import { useLocation } from "react-router-dom";
import { useCart } from "react-use-cart";

const PersistentDrawerLeft = React.lazy(() => import("@components/Drawer/Drawer"));

function ClientDashLayout({ children }) {
	const {
		items
	} = useCart();
	console.log(items);
	const location = useLocation();
	const [orderItems, setOrderItems] = React.useState(null);

	React.useEffect(() => {
		if (location == null || location == undefined) {
			setOrderItems(items);
		}
	}, [items]);

	console.log(orderItems);

	return <PersistentDrawerLeft>{children}</PersistentDrawerLeft>;
}

export default React.memo(ClientDashLayout);
