import { View, ScrollView } from "react-native";
import { SapCard } from "../sapCard";

export function SapScrollCards() {
  return (
    <ScrollView
      horizontal
      className="flex border border-gray-50 p-4 my-4 grow-0"
    >
      <SapCard />
      <SapCard />
      <SapCard />
      <SapCard />
      <SapCard />
      <SapCard />
    </ScrollView>
  );
}
