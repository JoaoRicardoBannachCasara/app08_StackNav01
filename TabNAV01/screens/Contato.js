import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';

export default function Contato() {
  const [mensagem, setMensagem] = useState('');

  function enviarMensagem() {
    if (mensagem.trim() === '') {
      Alert.alert('Atenção', 'Digite uma mensagem antes de enviar.');
      return;
    }

    Alert.alert('Mensagem enviada', 'Obrigado pelo contato!');
    setMensagem('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contato</Text>
      <Text style={styles.nome}>João Ricardo Bannach Casara</Text>

      <View style={styles.card}>
        <Text style={styles.label}>LinkedIn:</Text>
        <Text style={styles.info}>linkedin.com/in/joaoricardobannachcasara</Text>

        <Text style={styles.label}>E-mail:</Text>
        <Text style={styles.info}>joao.ricardo@email.com</Text>

        <Text style={styles.label}>Telefone:</Text>
        <Text style={styles.info}>(41) 99999-9999</Text>
      </View>

      <Text style={styles.labelMensagem}>Mensagem direta:</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite sua mensagem aqui..."
        multiline
        value={mensagem}
        onChangeText={setMensagem}
      />

      <TouchableOpacity style={styles.botao} onPress={enviarMensagem}>
        <Text style={styles.botaoTexto}>Enviar mensagem</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f6fc',
    padding: 24,
  },
  titulo: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#1f4f8b',
    textAlign: 'center',
    marginBottom: 8,
  },
  nome: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
    marginBottom: 22,
  },
  card: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#d8e2f1',
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1f4f8b',
    marginTop: 8,
  },
  info: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  labelMensagem: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1f4f8b',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#fff',
    minHeight: 120,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#d8e2f1',
    padding: 14,
    fontSize: 16,
    textAlignVertical: 'top',
    marginBottom: 16,
  },
  botao: {
    backgroundColor: '#1f4f8b',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#fff',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
