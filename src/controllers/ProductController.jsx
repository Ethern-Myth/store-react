import axios from "axios";

export async function GetProducts() {
	const res = await axios.get("/api/Product");
	const data = res.data;
	return data;
}

export async function GetProduct(id) {
	const res = await axios.get(`/api/Product/${id}`);
	const data = res.data;
	return data;
}
