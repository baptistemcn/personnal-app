import { fetch } from "cross-fetch";

import { Constants } from "@constants";

export async function getProjects() {
  const response = await fetch(`${Constants.API_URL}/projects`, {
    method: "GET",
  });
  return await response.json();
}
