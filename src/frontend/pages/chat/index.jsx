import { View } from "react-native";

import { InputSection } from "../../components/InputSection";
import { TalkSection } from "../../components/TalkSection";
import { OptionsSection } from "../../components/OptionsSection";

const messages = [
  {
    user: "me",
    message: "Hello there!",
  },
  {
    user: "chat",
    message: "Hello there! How may I assist you today?",
  },
  {
    user: "me",
    message: "What can you do?",
  },
  {
    user: "chat",
    message:
      "As an AI language model, I can generate text for various purposes such as :\n  Writing articles, essays and reports on various topics.\n Generating product descriptions and reviews. ",
  },
];

export function Chat() {
  return (
    <View className="h-full bg-white">
      <View className="h-full mt-1 flex flex-col flex-nowrap justify-between">
        <TalkSection messages={messages} />

        <OptionsSection />

        <InputSection />
      </View>
    </View>
  );
}
