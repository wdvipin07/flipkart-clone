import axios from "axios";
const API = import.meta.env.VITE_API_BASE_URL;
export const payUsingPaytm = async (data) => {
  try {
    const res = await fetch(`${API}/payment`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error(`Server Error: ${res.status}`);
    }

    return await res.json();
  } catch (err) {
    console.error("Error in payUsingPaytm:", err);
    return null;
  }
};
