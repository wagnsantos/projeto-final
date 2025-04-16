import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { useRouter } from "expo-router";

const Home = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('@/src/assets/logo1.png')} />

      <Text style={styles.title}>
        Sistema de Monitoramento de Equipamentos de TI
      </Text>

      
      <View style={styles.direction}>
        <TouchableOpacity style={styles.button} onPress={() => router.push("/pc")}>
          <Text style={styles.title}> PC </Text>
          <Image style={styles.image} source={require('@/src/assets/pc mode.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push("/servidores")}>
          <Text style={styles.title}> Servidores </Text>
          <Image style={styles.image} source={require('@/src/assets/servidores.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push("/impressoras")}>
          <Text style={styles.title}> Impressoras </Text>
          <Image style={styles.image} source={require('@/src/assets/impressora.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => router.push("/roteadores")}>
          <Text style={styles.title}> Roteadores </Text>
          <Image style={styles.image} source={require('@/src/assets/roteador.png')} />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.button} onPress={() => router.push("./login")}>
            <Text style={styles.title}>Sair</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
