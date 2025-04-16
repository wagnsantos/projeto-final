import React, { useState } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity } from 'react-native';
import { cadastrarEquipamento } from '@/src/service/CreateCustomerServices';
import { router } from 'expo-router'; // se estiver usando expo-router
import styles from './styles'; // ajuste se necessário

const PC = () => {
  const [nome, setNome] = useState('');
  const [mensagem, setMensagem] = useState('');

  async function handleCadastro() {
    try {
      await cadastrarEquipamento({ name: nome });
      setMensagem('Equipamento cadastrado com sucesso!');
      setNome(''); // limpa o input
    } catch (error) {
      console.error(error);
      setMensagem('Erro ao cadastrar.');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Central dos PCs</Text>

      <TouchableOpacity style={styles.button} onPress={() => router.push("./")}>
        <Text>Voltar</Text>
      </TouchableOpacity>

      <TextInput
        placeholder="Nome do equipamento"
        value={nome}
        onChangeText={setNome}
        style={{ borderWidth: 1, marginVertical: 10, padding: 8 }}
      />

      <Button title="Cadastrar" onPress={handleCadastro} />

      <Text style={{ marginTop: 10 }}>{mensagem}</Text>
    </View>
  );
};

export default PC;
