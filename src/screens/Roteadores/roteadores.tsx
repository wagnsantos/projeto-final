import { Text, TouchableOpacity, View } from "react-native"
import styles from "./styles"
import { useRouter } from "expo-router"

const Roteadores = () =>{
    const router = useRouter()
    return (
        <View  style={styles.container}>
            <Text style={styles.title}>
                Central dos roteadores
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => router.push("./")}>
                <Text>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Roteadores