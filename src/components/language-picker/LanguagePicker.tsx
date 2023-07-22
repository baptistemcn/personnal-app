import { LanguagePickerProps } from "src/types/language-picker.interface";
import { ReButton } from "../button/Button";
import { ReImage } from "../image/Image";
import { DUMMYIMG } from "@assets";

export const LanguagePicker = ({
  button = {
    ariaLabel: "language",
    testID: "lang-picker",
  },
  flag = { nation: DUMMYIMG, styles: { height: 32, width: 32 } },
}: LanguagePickerProps) => {
  return (
    <ReButton
      ariaLabel={button?.ariaLabel}
      onPress={button?.onPress}
      testID={button.testID}
    >
      <ReImage source={flag?.nation} styles={flag?.styles} testID="flag" />
    </ReButton>
  );
};
