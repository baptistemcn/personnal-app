import { Linking } from "react-native";

export async function openLink(link: string) {
  await Linking.openURL(link);
}
