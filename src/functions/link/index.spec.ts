import { openLink } from "./index";
import { Linking } from "react-native";

jest.mock("react-native", () => ({
  Linking: {
    openURL: jest.fn(),
  },
}));

describe("openLink", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should call Linking.openURL with the correct link", async () => {
    const link = "https://www.lorem.ipsum";

    await openLink(link);

    expect(Linking.openURL).toHaveBeenCalledWith(link);
  });

  it("should handle errors when opening the link", async () => {
    const link = "invalid-url";

    (
      Linking.openURL as jest.MockedFunction<typeof Linking.openURL>
    ).mockRejectedValueOnce(new Error("Failed to open URL"));

    try {
      await openLink(link);
    } catch (error) {
      expect(Linking.openURL).toHaveBeenCalledWith(link);

      expect(error).toEqual(new Error("Failed to open URL"));
    }
  });
});
