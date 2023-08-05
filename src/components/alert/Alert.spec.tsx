import { render } from "@testing-library/react-native";
import { ReAlert } from "./Alert";

jest.mock("react-i18next", () => ({
  useTranslation: () => ({
    t: (key: unknown) => key,
    i18n: {
      changeLanguage: jest.fn(),
    },
  }),
}));

describe("Alert component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it("should render", () => {
    render(<ReAlert />);
  });
});
