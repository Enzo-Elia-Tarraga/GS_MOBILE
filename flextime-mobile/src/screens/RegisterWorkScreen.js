import { View, Text, TextInput, Button } from "react-native";
import { useState } from "react";
import api from "../api/api";

export default function RegisterWorkScreen() {
  const [local, setLocal] = useState("");
  const [hora, setHora] = useState("");

  const handleSave = async () => {
    try {
      await api.post("/jornadas", { local, hora });
      alert("Registro salvo!");
    } catch (error) {
      alert("Erro ao salvar registro");
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22 }}>Registrar Jornada</Text>

      <TextInput
        placeholder="Local"
        value={local}
        onChangeText={setLocal}
        style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
      />

      <TextInput
        placeholder="Hora"
        value={hora}
        onChangeText={setHora}
        style={{ borderWidth: 1, padding: 10, marginVertical: 10 }}
      />

      <Button title="Salvar" onPress={handleSave} />
    </View>
  );
}
