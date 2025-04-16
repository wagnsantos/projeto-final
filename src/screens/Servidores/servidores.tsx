import { Text, TouchableOpacity, View } from "react-native"
import styles from "./styles"
import { router, useRouter } from "expo-router"

const Servidores = () =>{
    const router = useRouter()
    return (
        <View  style={styles.container}>
            <Text style={styles.title}>
                Central dos Servidores
            </Text>
            <TouchableOpacity style={styles.button} onPress={() => router.push("./")}>
                <Text>Voltar</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Servidores