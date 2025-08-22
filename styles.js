import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    botao: {
        flex: 1,                          // Cada botão ocupa espaço igual
        marginHorizontal: 5,              // Espaçamento entre botões
        height: 50,
        borderRadius: 25,
        backgroundColor: '#1b967c',       // Cor do botão
        alignItems: 'center',
        justifyContent: 'center',
    },

    textoBotao: {
        fontSize: 20,
        color: "green",
        fontWeight: 'bold',
    },
    campoTela: {
        fontSize: 20,
        width: "50%",
        borderColor: "#000",
        borderWidth: 3,
        textAlign: 'center',
        borderRadius: 15,
        marginVertical: 20,
    },
    titulo: {
        fontSize: 25,
        color: "#1b56cc",
        fontWeight: 'bold',
        marginBottom: 20,
    },
    labelCampo: {
        fontSize: 20,
        color: "green",
        fontWeight: 'bold',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    linhaBotoes: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Espaça igualmente
        width: '80%',                    // Ajusta a largura da linha
        marginVertical: 10,
    },
    textoBotao: {
        fontSize: 18,
        color: '#fff',                     // Texto branco
        fontWeight: 'bold',
    },

})

export default style