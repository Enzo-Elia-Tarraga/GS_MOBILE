import { View, Text, FlatList } from "react-native";
import { useEffect, useState } from "react";
import api from "../api/api";

export default function HistoryScreen() {
  const [items, setItems] = useState([]);

  const loadData = async () => {
    const response = await api.get("/jornadas");
    setItems(response.data);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22 }}>Histórico</Text>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Text>{item.local} — {item.hora}</Text>
        )}
      />
    </View>
  );
}
