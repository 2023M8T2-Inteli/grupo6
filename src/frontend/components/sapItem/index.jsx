import { View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SwipeableItem, {
  useSwipeableItemParams,
} from "react-native-swipeable-item";

const COLORS = [
  {
    background: "bg-rose-100",
    foreground: "bg-red-300",
  },
  {
    background: "bg-cyan-50",
    foreground: "bg-sky-300",
  },
];

export function SapItem({ item }) {
  return (
    <SwipeableItem
      key={item.id}
      item={item}
      renderUnderlayLeft={() => <UnderlayLeft item={item} />}
      snapPointsLeft={[100]}
    >
      <View
        className={`flex flex-row items-center justify-between p-4 my-6 w-5/6 self-center h-fit rounded-2xl ${
          COLORS[item.id % COLORS.length].background
        }`}
      >
        <View className="flex flex-col justify-between">
          <Text className="font-bold capitalize text-2xl">{`${item.name}`}</Text>
          <Text className="">Stock: {item.stock}</Text>
          <Text className="">Delivery: {item.delivery}</Text>
        </View>
        <View
          className={`flex flex-row items-center justify-end rounded-2xl p-1 ${
            COLORS[item.id % COLORS.length].foreground
          }`}
        >
          <MaterialCommunityIcons name={item.icon} size={65} color="black" />
        </View>
      </View>
    </SwipeableItem>
  );
}

const UnderlayLeft = ({ item }) => {
  const { close } = useSwipeableItemParams();
  return (
    <View
      className={`flex flex-row items-center justify-end p-4 my-6 w-5/6 self-center rounded-2xl ${
        COLORS[item.id % COLORS.length].foreground
      }`}
    >
      <TouchableOpacity onPress={() => close()}>
        <MaterialCommunityIcons name="bookmark-plus" size={65} color="black" />
      </TouchableOpacity>
    </View>
  );
};

// export function SapIteam({ idx }) {
//   return (
//     <Draggable
//       x={100}
//       y={100}
//       z={1}
//       scale={1}
//       renderSize={100}
//       renderColor="red"
//       isCircle
//       //   onShortPressRelease={() => console.log("short press release")}
//       //   onLongPress={() => console.log("long press")}
//       //   className={`${
//       //     COLORS[idx % COLORS.length].background
//       //   } rounded-2xl flex flex-row justify-between p-2 my-2 items-center`}
//     >
//       <View className="">
//         <Text className="ml-2 text-xl font-semibold">Hammer</Text>
//         <Text className="ml-2 text-xs font-medium h-fit text-neutral-400">
//           example
//         </Text>
//       </View>
//       <View
//         className={`${
//           COLORS[idx % COLORS.length].foreground
//         } p-1 flex rounded-2xl mr-4`}
//       >
//         <MaterialCommunityIcons name="tools" size={60} color="black" />
//       </View>
//     </Draggable>
//   );
// }
