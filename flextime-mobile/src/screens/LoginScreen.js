import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 26, marginBottom: 20 }}>FlexTime</Text>

      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, padding: 10, marginBottom: 20 }}
      />

      <Button title="Entrar" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
