/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Linking } from "react-native";

export async function openLink(link: string | undefined) {
  await Linking.openURL(link!);
}
