import { Text, TouchableOpacity, View } from "react-native"
import styles from "./styles"
import { useRouter } from "expo-router";

const Impressoras = () =>{
    const router = useRouter();
    return (
        <View  style={styles.container}>
            <Text style={styles.title}>
                Central das Impressoras
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => router.push("./")}>
                <Text>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Impressoras