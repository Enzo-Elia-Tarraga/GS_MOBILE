import { View, Button, Text } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22, marginBottom: 20 }}>
        Menu
      </Text>

      <Button title="Registrar Jornada" onPress={() => navigation.navigate("Registrar")} />
      <Button title="Histórico" onPress={() => navigation.navigate("Histórico")} />
      <Button title="Perfil" onPress={() => navigation.navigate("Perfil")} />
    </View>
  );
}
