import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.corpo}>
        <Text style={styles.titulo}>Bem-vindo!</Text>
        <Text style={styles.nome}>João Ricardo Bannach Casara</Text>
        <Text style={styles.texto}>
          Este aplicativo foi desenvolvido para praticar a navegação por abas no React Native.
        </Text>
        <Text style={styles.texto}>
          Utilize as guias inferiores para navegar entre Home, Portfólio e Contato.
        </Text>
      </View>

      <View style={styles.rodape}>
        <Text style={styles.rodapeTexto}>Tab Navigation - Projeto TabNAV01</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f6fc',
  },
  corpo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  titulo: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#1f4f8b',
    marginBottom: 12,
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
    textAlign: 'center',
    marginBottom: 20,
  },
  texto: {
    fontSize: 17,
    color: '#444',
    textAlign: 'center',
    marginBottom: 10,
    lineHeight: 24,
  },
  rodape: {
    backgroundColor: '#1f4f8b',
    padding: 18,
    alignItems: 'center',
  },
  rodapeTexto: {
    color: '#fff',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
