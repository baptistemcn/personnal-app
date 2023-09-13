import { fetch } from "cross-fetch";

import { CONSTANTS } from "@constants";

export async function getProjects() {
  const response = await fetch(`${CONSTANTS.apiURL}/projects`, {
    method: "GET",
  });
  return await response.json();
}
