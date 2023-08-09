import { useEffect, useState } from "react";

import { getCertifications } from "@services";
import { CertificateItem } from "@types";

export const useCertifications = () => {
  const [certifications, setCertifications] =
    useState<Array<CertificateItem>>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [displayError, setDisplayError] = useState<string>("");

  useEffect(() => {
    const fetchItems = async () => {
      await getCertifications()
        .then((data) => {
          setCertifications(data);
          setLoading(false);
        })
        .catch((error) => {
          setDisplayError(error);
          setError(true);
          setLoading(true);
        });
    };
    fetchItems();
  }, []);

  return { certifications, loading, error, displayError };
};
