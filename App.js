import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Alert, Text, TextInput, TouchableOpacity, View } from 'react-native';
import styles from './styles';

export default function App() {

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(0);

  function calcular(operacao) {
    if (num1 == '' || num2 == '') {
      Alert.alert('Prencha os campos!');
      return;
    }

    let fNum1 = Number.parseFloat(num1.replace(',', '.'));
    let fNum2 = Number.parseFloat(num2.replace(',', '.'));
    let result = 0
    switch (operacao) {
      case "soma":
        result = fNum1 + fNum2;
        break;
      case "subtracao":
        result = fNum1 - fNum2;
        break;
      case "multiplicacao":
        result = fNum1 * fNum2;
        break;
      case "divisao":
        if (fNum2 === 0) {
          Alert.alert('Erro: Divisão por zero não é permitida.');
          return null;
        }
        result = fNum1 / fNum2;
        break;
      case "exponenciacao":
        result = Math.pow(fNum1, fNum2);
        break;
      default:
        Alert.alert('Operação inválida');
        return null;
    }
    setResultado(result);
  }

  function limpar() {
    setNum1('');
    setNum2('');
    setResultado(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Bem vindo ao projeto de Calculadora</Text>
      <Text style={styles.labelCampo}> Digite o primeiro valor:</Text>
      <TextInput
        keyboardType='decimal-pad'
        style={styles.campoTela}
        value={num1}
        onChangeText={(text) => setNum1(text)}
      />

      <Text style={styles.labelCampo}> Digite o segundo valor:</Text>
      <TextInput
        keyboardType='decimal-pad'
        style={styles.campoTela}
        value={num2}
        onChangeText={(text) => setNum2(text)}
      />

      <View style={styles.linhaBotoes}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => calcular("soma")}
        >
          <Text style={styles.textoBotao}>Somar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => calcular("subtracao")}
        >
          <Text style={styles.textoBotao}>Subtrair</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.linhaBotoes}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => calcular("multiplicacao")}
        >
          <Text style={styles.textoBotao}>Multiplicar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => calcular("divisao")}
        >
          <Text style={styles.textoBotao}>Dividir</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.linhaBotoes}>
        <TouchableOpacity
          style={styles.botao}
          onPress={() => calcular("exponenciacao")}
        >
          <Text style={styles.textoBotao}>Exponenciação</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.campoTela}> Resultado: {resultado}</Text>

      <View style={styles.linhaBotoes}>
        <TouchableOpacity
          style={styles.botao}
          onPress={limpar}
        >
          <Text style={styles.textoBotao}>Limpar</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}