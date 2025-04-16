import { Image, Text, TouchableOpacity, View } from "react-native";
import MyTextInput from "@/src/components/TextInput/textInput";
import styles from './styles'
import { useRouter } from "expo-router";

const Login = () =>{
    const router = useRouter()
    return(
        <View style={styles.container}>

            <Image style={styles.image} source={require('@/src/assets/logo1.png')}/>
            <Text style={styles.title}>Login</Text>
            <MyTextInput placeholder="E-mail:"/>
            <MyTextInput placeholder="Senha:" secureTextEntry={true}/>

            <TouchableOpacity style={styles.button} onPress={() => router.push ('./')}>
            <Text style={styles.title}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
            <Text style={styles.title}>Cadastrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
            <Text style={styles.title}>Esqueci a senha</Text>
            </TouchableOpacity>
        </View>
    )
}
export default Login;