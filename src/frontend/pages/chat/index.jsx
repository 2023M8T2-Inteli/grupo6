import axios from "axios";
import { baseURL } from "../../api/baseURL";
import { useEffect, useState } from "react";

import { View, Text } from "react-native";
import { InputSection } from "../../components/InputSection";
import { TalkSection } from "../../components/TalkSection";
import { OptionsSection } from "../../components/OptionsSection";

const MESSAGES = [
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
  const [messages, setMessages] = useState(MESSAGES);
  const [isLoading, setIsLoading] = useState(false);
  const [change, makeChange] = useState(false);

  const fetchMessages = async () => {
    console.log("Acessando a API...");
    try {
      setIsLoading(true);

      const response = await axios.get(`${baseURL}/chat/1`);

      if (response.status === 200) {
        setMessages(response.data);
        setIsLoading(false);
        return;
      } else {
        throw new Error(`Failed to fetch messages. Status: ${response.status}`);
      }
    } catch (err) {
      setIsLoading(false);
      console.error(err.message);
    }
  };
  useEffect(() => {
    console.log("Use effect agora");
    fetchMessages();
  }, [change]);

  return (
    <View className="h-full bg-white">
      <View className="h-full mt-1 flex flex-col flex-nowrap justify-between">
        <TalkSection messages={messages} />

        {!isLoading ? <OptionsSection /> : <Text>Loading</Text>}

        <InputSection change={makeChange} />
      </View>
    </View>
  );
}
