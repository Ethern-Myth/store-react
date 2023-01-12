import React from "react";
import { useLocation } from "react-router-dom";
import { useCart } from "react-use-cart";

function ClientDashLayout() {
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

	return <div>ClientDashboardLayout</div>;
}

export default ClientDashLayout;
