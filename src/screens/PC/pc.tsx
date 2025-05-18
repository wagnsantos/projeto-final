import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity, FlatList, ScrollView } from 'react-native';
import { cadastrarEquipamento } from '@/src/service/CreateCustomerServices';
import { listarEquipamentos } from '@/src/service/ListCustomerServices';
import { deletarEquipamento } from '@/src/service/DeleteCustomerService'; // NOVO: função para deletar
import { router } from 'expo-router';
import styles from './styles';

const PC = () => {
  const [nome, setNome] = useState('');
  const [tipo, setTipo] = useState('');
  const [mensagem, setMensagem] = useState('');

  interface Equipamento {
    id: string;
    name: string;
    type: string;
  }

  const [equipamentos, setEquipamentos] = useState<Equipamento[]>([]);

  async function handleCadastro() {
    if (!nome) {
      alert('Por favor, preencha todos os campos.');
      return;
    }
    try {
      await cadastrarEquipamento({ name: nome, type: 'pc' });
      alert('Equipamento cadastrado com sucesso!');
      setNome('');
      setTipo('');
      await buscarEquipamentos();
    } catch (error) {
      console.error(error);
      alert('Erro ao cadastrar.');
    }
  }

  async function buscarEquipamentos() {
    try {
      const resposta = await listarEquipamentos();
      const filtrados = resposta.filter((item: any) => item.type?.toLowerCase() === 'pc');
      setEquipamentos(filtrados);
    } catch (error) {
      console.error('Erro ao buscar equipamentos:', error);
    }
  }

  async function handleDelete(id: string) {
    try {
      await deletarEquipamento(id);
      alert('Equipamento excluído!');
      await buscarEquipamentos();
    } catch (error) {
      console.error('Erro ao excluir:', error);
      alert('Erro ao excluir equipamento.');
    }
  }

  useEffect(() => {
    buscarEquipamentos();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Central dos PCs</Text>

      <TextInput
        placeholder="Nome do equipamento"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />

      <Button title="Cadastrar" onPress={handleCadastro} />

      <TouchableOpacity style={styles.button} onPress={() => router.push('/home')}>
        <Text style={styles.title}>Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>{mensagem}</Text>

      <Text style={styles.title}>Equipamentos cadastrados:</Text>

      <ScrollView showsVerticalScrollIndicator={true} style={styles.barra}>
        <FlatList
          data={equipamentos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.newView}>
              <TouchableOpacity style={styles.button} onPress={() => router.push('/detalhes')}>{item.name}</TouchableOpacity> 
              <TouchableOpacity onPress={() => handleDelete(item.id)} style={[styles.button, { backgroundColor: 'red', padding: 5 }]}>
                <Text style={{ color: 'white' }}>Excluir</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </ScrollView>
    </View>
  );
};

export default PC;
