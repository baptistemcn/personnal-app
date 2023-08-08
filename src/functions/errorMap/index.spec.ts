import { mapError } from "./index";

describe("mapError", () => {
  it("should return the corresponding error message when it exists in the errorMap", () => {
    const errorMessage1 = "TypeError: Network request failed";
    const errorMessage2 = "ThrottlerException: Too Many Requests";

    const result1 = mapError(errorMessage1);
    const result2 = mapError(errorMessage2);

    expect(result1).toBe("error.api.notfound");
    expect(result2).toBe("error.api.request");
  });

  it("should return the 'error.unknown' message when the error is not found in the errorMap", () => {
    const errorMessage = "Some unknown error message";

    const result = mapError(errorMessage);

    expect(result).toBe("error.unknown");
  });
});
