import { Alert } from "react-native";

import { AlertProps } from "@types";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

export const ReAlert = ({
  message = "Message",
  title = "Title",
}: AlertProps) => {
  const { t } = useTranslation();

  useEffect(() => {
    Alert.alert(t(title), t(message), [
      {
        text: t("alert.button.close"),
        style: "cancel",
      },
    ]);
  }, [message, t, title]);

  return null;
};
