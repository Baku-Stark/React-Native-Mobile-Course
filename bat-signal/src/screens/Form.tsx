import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput, Button, Alert } from "react-native";

interface IFormContent {
  nome: string;
  situacao: string;
  desc: string;
  endereco: string;
}

export default function Form() {
  const [formContent, setFormContent] = useState<IFormContent>({
    nome: "",
    situacao: "",
    desc: "",
    endereco: "",
  });

  function handleInputChange(key: keyof IFormContent, value: string) {
    setFormContent((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  }

  function onSubmitForm() {
    if (!formContent.nome || !formContent.situacao) {
      Alert.alert("Erro", "Os campos Nome e Situação são obrigatórios.");
      return;
    }

    console.log(formContent);
    Alert.alert("Formulário Enviado", "Seu pedido foi enviado com sucesso!");
  }

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {/* O React Native usa <Image> ao invés de <img> */}
        <Text style={styles.title}>Bat-Sinal</Text>
      </View>

      <View style={styles.form}>
        <View style={styles.formSection}>
          <Text style={styles.label}>Nome</Text>
          <TextInput
            style={styles.input}
            placeholder="Insira seu nome aqui"
            value={formContent.nome}
            onChangeText={(text) => handleInputChange("nome", text)}
          />
        </View>

        <View style={styles.formSection}>
          <Text style={styles.label}>Situação</Text>
          <TextInput
            style={styles.input}
            placeholder="Moderada ou Urgente"
            value={formContent.situacao}
            onChangeText={(text) => handleInputChange("situacao", text)}
          />
        </View>

        <View style={styles.formSection}>
          <Text style={styles.label}>Descrição</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Descrição detalhada"
            multiline
            numberOfLines={4}
            value={formContent.desc}
            onChangeText={(text) => handleInputChange("desc", text)}
          />
        </View>

        <View style={styles.formSection}>
          <Text style={styles.label}>Endereço</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Endereço para envio"
            multiline
            numberOfLines={2}
            value={formContent.endereco}
            onChangeText={(text) => handleInputChange("endereco", text)}
          />
        </View>

        <Button title="Enviar Pedido" onPress={onSubmitForm} color="#111" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#111",
  },
  form: {
    width: "100%",
  },
  formSection: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: "#111",
  },
  input: {
    width: "100%",
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    backgroundColor: "#f0f8ff",
    color: "#111",
  },
  textArea: {
    textAlignVertical: "top",
  },
});
