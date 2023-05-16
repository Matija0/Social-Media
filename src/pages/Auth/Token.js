import { BASEURL } from "@/pages/api/BaseUrl";
import axios from "axios";

export async function Token(token) {
  try {
    const decoded = await axios.get(BASEURL + "/api/users/check-auth", {
      headers: {
        "x-access-token": token,
        "Content-Type": "application/json",
      },
    });
    return decoded.data;
  } catch (e) {
    return null;
  }
}
