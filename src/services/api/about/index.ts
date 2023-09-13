import { fetch } from "cross-fetch";

import { CONSTANTS } from "@constants";

export async function getAbout(lang: string) {
  const response = await fetch(`${CONSTANTS.apiURL}/about?language=${lang}`, {
    method: "GET",
  });
  return await response.json();
}
