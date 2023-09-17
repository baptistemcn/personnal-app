import { useState, useEffect } from "react";

import { getProjects } from "@services";
import { ProjectItems } from "@types";

export const useProjects = () => {
  const [projects, setProjects] = useState<Array<ProjectItems>>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [displayError, setDisplayError] = useState<string>("");

  useEffect(() => {
    const controller = new AbortController();

    const fetchItems = async () => {
      getProjects()
        .then((data) => {
          setProjects(data);
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
  }, []);

  return { projects, loading, error, displayError };
};
