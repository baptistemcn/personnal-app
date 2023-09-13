import { fetch } from "cross-fetch";

import { CONSTANTS } from "@constants";

export async function getCertifications() {
  const response = await fetch(`${CONSTANTS.apiURL}/certifications`, {
    method: "GET",
  });
  return await response.json();
}
