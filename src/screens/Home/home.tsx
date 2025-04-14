import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native"
import styles from "./styles";



const Home = () => {
    return (
        <View style={styles.container}>
            
            <Image style={styles.image} source={require('@/src/assets/logo1.png')}/>

            <Text style={styles.title}>
            Sistema de Monitoramento de 
            Equipamentos de TI 
            </Text>

            <Text style={styles.title}> Temperatura</Text>

            <View style={styles.direction}>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.title}> PC </Text>
                <Image style={styles.image} source={require('@/src/assets/pc mode.png')}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.title}> Servidores </Text>
                <Image style={styles.image} source={require('@/src/assets/servidores.png')}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.title}> Impressoras </Text>
                <Image style={styles.image} source={require('@/src/assets/impressora.png')}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.title}> Roteadores </Text>
                <Image style={styles.image} source={require('@/src/assets/roteador.png')}/>
            </TouchableOpacity>
            
            </View>
        </View>
    )
}

export default Home;