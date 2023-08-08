import { fetch } from "cross-fetch";

const API_URL = "http://localhost:3000";

export async function getProjects() {
  const response = await fetch(`${API_URL}/projects`, {
    method: "GET",
  });
  return await response.json();
}
