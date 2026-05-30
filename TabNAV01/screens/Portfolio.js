import React from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';

const dados = [
  {
    title: 'Cursos Realizados',
    data: ['React Native', 'JavaScript', 'HTML e CSS', 'Lógica de Programação'],
  },
  {
    title: 'Projetos Web',
    data: ['Site institucional', 'Página de portfólio', 'Formulário de contato'],
  },
  {
    title: 'Projetos Mobile',
    data: ['App com navegação por abas', 'App com navegação por pilha', 'Tela de cadastro'],
  },
  {
    title: 'Projetos Sociais',
    data: ['Participação em campanhas comunitárias', 'Apoio em ações educacionais'],
  },
  {
    title: 'Língua Estrangeira Moderna',
    data: ['Inglês básico/intermediário'],
  },
];

export default function Portfolio() {
  return (
    <View style={styles.container}>
      <Text style={styles.nome}>João Ricardo Bannach Casara</Text>
      <Text style={styles.subtitulo}>Portfólio profissional e acadêmico</Text>

      <SectionList
        sections={dados}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => <Text style={styles.item}>• {item}</Text>}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.header}>{title}</Text>
        )}
        contentContainerStyle={styles.lista}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f6fc',
    padding: 20,
  },
  nome: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1f4f8b',
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitulo: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    marginBottom: 18,
  },
  lista: {
    paddingBottom: 30,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#1f4f8b',
    padding: 10,
    borderRadius: 8,
    marginTop: 12,
    marginBottom: 6,
  },
  item: {
    backgroundColor: '#fff',
    fontSize: 16,
    color: '#333',
    padding: 12,
    borderRadius: 8,
    marginBottom: 6,
    borderWidth: 1,
    borderColor: '#d8e2f1',
  },
});
