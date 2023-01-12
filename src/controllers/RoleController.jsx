import axios from "axios";

export async function RolesResponse() {
    const res = await axios.get("/api/Roles");
    const data = res.data;
    return data;
}