import { fetch } from "cross-fetch";

import { Constants } from "@constants";

export async function getAbout(lang: string) {
  const response = await fetch(`${Constants.API_URL}/about?language=${lang}`, {
    method: "GET",
  });
  return await response.json();
}
