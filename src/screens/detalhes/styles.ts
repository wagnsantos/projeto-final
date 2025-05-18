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
        marginTop: 10
    },
    button:{
            backgroundColor: '#243a69',
            borderRadius: 10,
            margin: 5
    },
    input:{
        borderWidth: 1,
        marginVertical: 10,
        padding: 8,
        color:'white',
        fontWeight: 'bold',
        borderColor: 'white',
        width: 200
    },
    barra:{
        padding: 5,
        color: 'black'
    },
    newView: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'white'
    },
    titleNew: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        margin: 10
    }
    
})
export default styles