import axios from "axios";

export async function GetConversions() {
    const res = await axios.get("/api/Conversion");
    const data = res.data;
    return data;
}