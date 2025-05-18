import React, { useState, useEffect } from 'react';
import { View, Button, Text, FlatList } from 'react-native';

import { listarDetalhes } from '@/src/service/ListCustomerDetails';

import styles from './styles';
import { router } from 'expo-router';

const Detalhes = () => {
    interface CPU {
        manufacturer: string;
        brand: string,
        speed: string,
        cores: string,
        physicalCores: string,
        total: string,
        free: string,
        active: string,
        available: string,
        use: string,
        platform: string,
        distro: string,
        release: string,
        hostname: string,
        uptime: string
      }


    const [cpu, setCpu] = useState<CPU[]>([]);

    async function buscarEquipamentos() {
        console.log("CAIU AQ")
        try {
          const resposta = await listarDetalhes();
          console.log("resposta", resposta)
          setCpu(resposta);
        } catch (error) {
          console.error('Erro ao buscar equipamentos:', error);
        }
      }

      useEffect(() => {
        buscarEquipamentos()
      },[])


      console.log('CPU',cpu)
    
 return(
    <View style={styles.container}>
        <Text style={styles.title}>Detalhes do PC</Text>      


        <FlatList
          data={Array.isArray(cpu) ? cpu : [cpu]}
          keyExtractor={(item) => item.hostname}
          renderItem={({ item }) => (
            <View style={styles.newView}>
                <Text style={styles.titleNew}>Hostname: {item.hostname}</Text>
                <Text style={styles.titleNew}> Processador: {item.manufacturer}</Text>
                <Text style={styles.titleNew}>Especificação: {item.brand}</Text>
                <Text style={styles.titleNew}>Velocidade: {item.speed}</Text>
            </View>
          )}
        />

        <Button title='Voltar' onPress={() => router.push('/pc')} color="#841584"/>
                
    </View>
 )
}

export default Detalhes;
