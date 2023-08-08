import { useAbout } from "./index";

import * as api from "../../services/api/about";
import { renderHook } from "@testing-library/react-hooks";

describe("useAbout", () => {
  const mockExperience = [
    {
      id: 1,
      name: "Lorem Ipsum name 1",
      duration: "NaN NaN 1",
      presentation: "Lorem Ipsum presentation 1",
      technology: [{ name: "Lorem Ipsum tech 1" }],
    },
    {
      id: 2,
      name: "Lorem Ipsum name 2",
      duration: "NaN NaN 2",
      presentation: "Lorem Ipsum presentation 2",
      technology: [{ name: "Lorem Ipsum tech 2" }],
    },
  ];
  it("should fetch data correctly", async () => {
    jest.spyOn(api, "getAbout").mockResolvedValue(mockExperience);

    const { result, waitForNextUpdate } = renderHook(() => useAbout("en"));

    expect(result.current.loading).toEqual(true);

    await waitForNextUpdate();

    expect(result.current.loading).toEqual(false);
    expect(result.current.error).toEqual(false);
    expect(result.current.about).toEqual(mockExperience);
  });

  it("should handle fetch error", async () => {
    const mockErrorMessage = "Failed to fetch data";

    jest
      .spyOn(api, "getAbout")
      .mockRejectedValue(new Error("Failed to fetch data"));

    const { result, waitForNextUpdate } = renderHook(() => useAbout("en"));

    expect(result.current.loading).toEqual(true);

    await waitForNextUpdate();

    expect(result.current.loading).toEqual(true);
    expect(result.current.error).toEqual(true);
    expect(result.current.displayError.message).toEqual(mockErrorMessage);
  });
});
