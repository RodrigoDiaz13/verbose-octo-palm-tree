import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
 
export default function App() {
 
//codigo javascript
//state  de la aplicacion
const[numero1, setNumero1]=useState(0)
const[numero2, setNumero2]=useState(0)
const[resultado, setResultado]=useState(0)
 
//hacer que se sumen dos numeros
 
const suma = ()=>{
  let sumatoria=(parseFloat(numero1)+parseFloat(numero2));
  setResultado(sumatoria);
}
 
const multiplicacion = ()=>{
  let multiplicacion=(parseFloat(numero1)*parseFloat(numero2));
  setResultado(multiplicacion);
}
 
const divicion = ()=>{
  let divicion=(parseFloat(numero1)/parseFloat(numero2));
  setResultado(divicion);
}
 
const resta = ()=>{
  let resta=(parseFloat(numero1)-parseFloat(numero2));
  setResultado(resta);
}
 
const limpiar = ()=>{
  setNumero1(0)
  setNumero2(0)
  setResultado(0)
}
 
  return (
    <View style={styles.container}>
      <Text>Suma de numeros</Text>
      <Text>Numero 1:</Text>
      <TextInput placeholder='Primer numero' value={numero1} onChangeText={setNumero1}/>
 
      <Text>Numero 2:</Text>
      <TextInput placeholder='Segundo numero' value={numero2} onChangeText={setNumero2}/>
 
      <TouchableOpacity style={{backgroundColor: '#2DB331', padding:10, borderRadius: 10}} onPress={suma}>
      <Text style={{color: '#FFF',
        fontSize:20}}>Sumar</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={{backgroundColor: '#B43612', padding:10, marginTop:10, borderRadius: 10}} onPress={multiplicacion}>    
      <Text style={{color: '#FFF',
        fontSize:20}}>Multiplicar</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={{backgroundColor: '#E1E11A', padding:10,marginTop:10, borderRadius: 10}} onPress={divicion}>    
      <Text style={{color: '#fff',
        fontSize:20}}>Dividir</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={{backgroundColor: '#F09100', padding:10, marginTop:10, borderRadius: 10}} onPress={resta}>    
      <Text style={{color: '#fff',
        fontSize:20}}>Restar</Text>
      </TouchableOpacity>
     
      <Text style={{color: '#0A0A00', fontSize:25}}>Numero 1: {numero1}</Text>
      <Text style={{color: '#0A0A00', fontSize:25}}>Numero 2: {numero2}</Text>
      <Text style={{color: '#0A0A00', fontSize:25}}>Resultado: {resultado}</Text>
 
      <TouchableOpacity style={{backgroundColor: '#3CBE00',
       padding:5, borderRadius: 10}}
       onPress={limpiar}
       >
        <Text style={{color: '#FFF',
        fontSize:20}}>Limpiar</Text>
      </TouchableOpacity>
 
     
 
     
     
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});