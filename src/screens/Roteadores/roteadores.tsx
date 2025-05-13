import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity, FlatList, ScrollView} from 'react-native';
import { cadastrarEquipamento } from '@/src/service/CreateCustomerServices';
import { listarEquipamentos } from '@/src/service/ListCustomerServices'; // Função para buscar equipamentos
import { router } from 'expo-router';
import styles from './styles';

const Roteadores = () => {
  const [nome, setNome] = useState(''); // Nome do equipamento
  const [tipo, setTipo] = useState(''); // Tipo do equipamento
  
  const [mensagem, setMensagem] = useState(''); // Mensagem de sucesso ou erro
  interface Equipamento {
    id: string;
    name: string;
    type: string;
  }
  
  const [equipamentos, setEquipamentos] = useState<Equipamento[]>([]);
   // Lista de equipamentos filtrados

  // Executa automaticamente ao abrir a tela ou quando a mensagem mudar (ex: após cadastrar)
  async function buscarEquipamentos() {
    try {
      const resposta = await listarEquipamentos();
      console.log("Todos equipamentos:", resposta); // debug

      const filtrados = resposta.filter((item: any) => item.type?.toLowerCase() === 'roteador');
      setEquipamentos(filtrados);
    } catch (error) {
      console.error('Erro ao buscar equipamentos:', error);
    }
  }
  
  useEffect(() => {  
    buscarEquipamentos();
  }, []);

  // Função chamada ao clicar no botão "Cadastrar"
  async function handleCadastro() {
    if (!nome ) {  // Verifica se nome ou tipo estão vazios
      alert('Por favor, preencha todos os campos.');
      return;  // Não faz o cadastro se algum campo estiver vazio
    }
    try {
      await cadastrarEquipamento({ name: nome, type: 'roteador' });
      alert('Equipamento cadastrado com sucesso!');
      setNome('');
      setTipo('');

      await buscarEquipamentos()
    } catch (error) {
      console.error(error);
      alert('Erro ao cadastrar.');
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Central dos Roteadores</Text>

      <TextInput
        placeholder="Nome do equipamento"
        value={nome}
        onChangeText={setNome}
        style={styles.input}
      />


      <Button title="Cadastrar" onPress={handleCadastro} />

      <TouchableOpacity style={styles.button} onPress={() => router.push('./')}>
        <Text style={styles.title}>Voltar</Text>
      </TouchableOpacity>

      <Text style={styles.title}>{mensagem}</Text>

      <Text style={styles.title}>Equipamentos cadastrados:</Text>

      <ScrollView showsVerticalScrollIndicator={true} style={styles.barra}>

        <FlatList
          data={equipamentos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Text style={styles.input}>{item.name}</Text>
          )}/>

      </ScrollView>
    </View>
    
  );
};

export default Roteadores;
