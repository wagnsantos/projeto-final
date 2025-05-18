import { StyleSheet } from "react-native";

const styles  = StyleSheet.create ({
    container: {
        backgroundColor: '#23145b',
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        margin: 10
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginTop: 10,
        resizeMode: 'stretch'
    },
    button:{
            backgroundColor: '#243a69',
            borderRadius: 10,
            margin: 5
    }
    
})
export default styles