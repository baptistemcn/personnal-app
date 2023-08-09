import { renderHook } from "@testing-library/react-hooks";

import { useProjects } from "./index";

import * as api from "../../services/api/projects";

describe("useProjects", () => {
  const mockProject = [
    {
      title: "mock Title",
      description: "mock Description",
      host: {
        name: "mock hostname",
        link: "mock link",
      },
    },
  ];

  it("should fetch data correctly", async () => {
    jest.spyOn(api, "getProjects").mockResolvedValue(mockProject);

    const { result, waitForNextUpdate } = renderHook(() => useProjects());

    expect(result.current.loading).toEqual(true);

    await waitForNextUpdate();

    expect(result.current.loading).toEqual(false);
    expect(result.current.error).toEqual(false);
    expect(result.current.projects).toEqual(mockProject);
  });

  it("should handle fetch error", async () => {
    const mockErrorMessage = "Failed to fetch data";

    jest
      .spyOn(api, "getProjects")
      .mockRejectedValue(new Error("Failed to fetch data"));

    const { result, waitForNextUpdate } = renderHook(() => useProjects());

    expect(result.current.loading).toEqual(true);

    await waitForNextUpdate();

    expect(result.current.loading).toEqual(true);
    expect(result.current.error).toEqual(true);
    expect(result.current.displayError.message).toEqual(mockErrorMessage);
  });
});
