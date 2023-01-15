import axios from "axios";

export async function GetProductTypes() {
    const res = await axios.get("/api/ProductType");
    const data = res.data;
    return data;
}

export async function GetProductType({ queryKey }) {
    const { id } = queryKey[1];
    const res = await axios.get(`/api/ProductType/${id}`);
    const data = res.data;
    return data;
}