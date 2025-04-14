import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#23145b',
        flex: 1,
        alignItems: 'center'
    },
    direction:{
        justifyContent: 'space-around', 
        alignItems: 'center',
        padding: 16,
        },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8
    },
    button: {
        backgroundColor: '#243a69',
        borderRadius: 10,
        margin: 5
    }
})

export default styles