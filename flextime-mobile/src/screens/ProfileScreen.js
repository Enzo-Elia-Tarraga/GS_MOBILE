import { View, Text } from "react-native";

export default function ProfileScreen() {
  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 22 }}>Meu Perfil</Text>
      <Text>Nome: Usuário Teste</Text>
      <Text>Email: teste@email.com</Text>
    </View>
  );
}
