import { useEffect, useState } from "react";

import { getAbout } from "@services";
import { ExperienceItem } from "@types";

export const useAbout = (lang: string) => {
  const [about, setAbout] = useState<Array<ExperienceItem>>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [displayError, setDisplayError] = useState<string>("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchItems = async () => {
      await getAbout(lang)
        .then((data) => {
          setAbout(data);
          setLoading(false);
        })
        .catch((error) => {
          setDisplayError(error);
          setError(true);
          setLoading(true);
        });
    };
    fetchItems();
    return () => {
      controller.abort();
    };
  }, [lang]);

  return { about, loading, error, displayError };
};
