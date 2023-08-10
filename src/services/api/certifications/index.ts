import { fetch } from "cross-fetch";

import { Constants } from "@constants";

export async function getCertifications() {
  const response = await fetch(`${Constants.API_URL}/certifications`, {
    method: "GET",
  });
  return await response.json();
}
