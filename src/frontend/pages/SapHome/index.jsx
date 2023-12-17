import { View, ScrollView, Text } from "react-native";
import { useState } from "react";

import { ScrollFilter } from "../../components/ScrollFilterH";
import { FilterSection } from "../../components/filterSection";

const CATEGORIES = [
  {
    name: "All",
    selected: true,
  },
  {
    name: "Engeneering",
    selected: false,
  },
  {
    name: "Eletronic",
    selected: false,
  },
  {
    name: "Manual",
    selected: false,
  },
  {
    name: "Design",
    selected: false,
  },
];

export function SapHome() {
  const [filters, setFilters] = useState(CATEGORIES);

  const handleFilterClick = (idx) => {
    const newFilters = filters.map((filter, index) => ({
      ...filter,
      selected: index === idx,
    }));

    setFilters(newFilters);
  };

  return (
    <View className="h-full">
      <ScrollFilter handleFilterClick={handleFilterClick} filters={filters} />
      <ScrollView>
        <FilterSection />
        <FilterSection />
        <FilterSection />
      </ScrollView>
    </View>
  );
}
