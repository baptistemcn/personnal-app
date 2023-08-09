import { useCertifications } from "./index";

import * as api from "../../services/api/certifications";
import { renderHook } from "@testing-library/react-hooks";

describe("useCertifications", () => {
  const mockCertifications = [
    {
      inProgress: true,
      link: "https://google.com/",
      name: "Google",
      icons: [
        { link: "https://github.com/", name: "name", base64: "img-base64" },
      ],
      testID: "google",
    },
  ];

  it("should fetch data correctly", async () => {
    jest.spyOn(api, "getCertifications").mockResolvedValue(mockCertifications);

    const { result, waitForNextUpdate } = renderHook(() => useCertifications());

    expect(result.current.loading).toEqual(true);

    await waitForNextUpdate();

    expect(result.current.loading).toEqual(false);
    expect(result.current.error).toEqual(false);
    expect(result.current.certifications).toEqual(mockCertifications);
  });

  it("should handle fetch error", async () => {
    const mockErrorMessage = "Failed to fetch data";

    jest
      .spyOn(api, "getCertifications")
      .mockRejectedValue(new Error("Failed to fetch data"));

    const { result, waitForNextUpdate } = renderHook(() => useCertifications());

    expect(result.current.loading).toEqual(true);

    await waitForNextUpdate();

    expect(result.current.loading).toEqual(true);
    expect(result.current.error).toEqual(true);
    expect(result.current.displayError.message).toEqual(mockErrorMessage);
  });
});
