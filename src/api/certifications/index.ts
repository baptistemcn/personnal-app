import { fetch } from "cross-fetch";

const API_URL = "http://localhost:3000";

export async function getCertifications() {
  const response = await fetch(`${API_URL}/certifications`, {
    method: "GET",
  });
  return await response.json();
}
