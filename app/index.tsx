import { Text, TextInput, Button, View, StyleSheet } from "react-native";
import { useState } from "react";
import Toast from 'react-native-toast-message'

export default function Index() {

  const [email, setEmail] = useState<string>('')
  const [senha, setSenha] = useState<string>('')

  const auth = (email: string, senha: string) => {
    Toast.show({
      type: "success",
      text1: `email: ${email}, senha ${senha}`
    })
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Faça o seu login aqui</Text>

      <TextInput
        placeholder="Digite seu email"
        placeholderTextColor="#aaa"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />

      <TextInput
        placeholder="Digite a sua senha"
        placeholderTextColor="#aaa"
        value={senha}
        onChangeText={setSenha}
        secureTextEntry
        style={styles.input}
      />

      <View style={styles.buttonContainer}>
        <Button
          title="Continuar"
          onPress={() => auth(email, senha)}
          color="#007AFF"
        />
      </View>

      <Toast />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#f9f9f9"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#ddd",
    marginBottom: 15,
    fontSize: 16,
    color: "#333",
    elevation: 2, 
  },
  buttonContainer: {
    width: "100%",
    borderRadius: 8,
    overflow: "hidden",
    marginTop: 10,
  },
});
